<script context="module">
    import { Client } from '../../../gql/client';
    import { GET_DRIVERS_BY_YEAR, GET_CONSTRUCTORS_BY_YEAR, GET_SCHEDULE_BY_YEAR } from '../../../gql/queries';

    export async function load({ params }) {
        const year = Number(params.slug);
        const queryVariables = {year: year};
        
        const drivers = await Client.request(GET_DRIVERS_BY_YEAR, queryVariables);
        const constructors = await Client.request(GET_CONSTRUCTORS_BY_YEAR, queryVariables);
        const schedule = await Client.request(GET_SCHEDULE_BY_YEAR, queryVariables);
        
        return {
            props: {
                drivers: drivers.drivers,
                teams: constructors.constructors,
                schedule: schedule.schedule,
                year: year,
            }
        }
    }

    import SeasonLayout from '../../../components/SeasonLayout/index.svelte';
</script>

<script lang="ts">
    export let drivers: any;
    export let teams: any;
    export let schedule: any;
    export let year: number;

    let date = new Date();
    let currentYear = date.getFullYear();
    let minYear = 2005;
    let years: Array<number> = [];
    for (let i = minYear; i <= currentYear; i++) {
        years = [...years, i];
    }

    let driverResults:Array<any> = [];
    let teamResults:Array<any> =[];
    let scheduleResults:Array<any> = []; 

    drivers.forEach((item:any, index:number) => {
        driverResults[index] = {
            type: "drivers",
            id: item.driverId,
            name: `${item.givenName} ${item.familyName}`,
            points: item.standing.points,
            wins: item.standing.wins
        };
    });

    teams.forEach((item:any, index:number) => {
        teamResults[index] = {
            type: "constructors",
            id: item.constructorId,
            name: item.name,
            points: item.standing.points,
            wins: item.standing.wins
        };
    });

    schedule.forEach((item:any, index:number) => {
        let d = new Date(item.date);
        let niceDate = d.toUTCString();
        let raceDate = niceDate.replace("00:00:00 GMT", '');
        
        let time = item.time;
        let raceTime = time.replace(":00Z","");
        
        
        scheduleResults[index] = {
            id: item.Circuit.circuitId,
            name: item.CircuitName,
            round: item.round,
            raceName: item.raceName,
            raceDate: raceDate,
            raceTime: raceTime,
            circuitName: item.Circuit.circuitName
        }
    });

    let driverResultsSorted = driverResults.sort((a,b) => b.points - a.points);
    let teamResultsSorted = teamResults.sort((a, b) => b.points - a.points);
</script>

<svelte:head>
    <title>F1 {year} Season</title>
</svelte:head>

<SeasonLayout
    title={`F1 ${year} Season`}
    driverStandingHeading="Driver Results"
    driverStandings={driverResultsSorted}
    teamStandingHeading="Constructor Results"
    teamStandings={teamResultsSorted}
    schedule={scheduleResults}
    year={year}
/>