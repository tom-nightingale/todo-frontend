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
    import type {
        Driver,
        Constructor,
        Schedule
     } from '../../../gql/types';

    export let drivers: Array<Driver>;
    export let teams: Array<Constructor>;
    export let schedule: Array<Schedule>;
    export let year: number;

    let date = new Date();
    let currentYear:number = date.getFullYear();
    let minYear:number = 2005;
    let years:Array<number> = [];
    for (let i = minYear; i <= currentYear; i++) {
        years = [...years, i];
    }

    let driverResultsSorted:Array<Driver> = drivers.sort((a,b) => b.standing.points - a.standing.points);
    let teamResultsSorted:Array<Constructor> = teams.sort((a, b) => b.standing.points - a.standing.points);
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
    schedule={schedule}
    season={year}
/>