<script context="module">
    import { Client } from '../../../gql/client';
    import { GET_DRIVERS_BY_YEAR } from '../../../gql/queries';

    export async function load({ params }) {
        const year = Number(params.slug);
        const queryVariables = {year: year};
        const drivers = await Client.request(GET_DRIVERS_BY_YEAR, queryVariables);
        
        return {
            props: {
                drivers: drivers.drivers,
                year: year,
            }
        }
    }
</script>

<script lang="ts">
    export let drivers:Array<any>;
    export let year:number;

    // Sort the results to display the table
    let resultsArray:Array<any> = [];
    drivers.forEach((item:any, index:number) => {
        resultsArray[index] = {
            name: `${item.givenName} ${item.familyName}`,
            points: item.standing.points,
            wins: item.standing.wins
        };
    });

    let filteredResults = resultsArray.sort((a,b) => b.points - a.points);
    import DriversLayout from '../../../components/DriversLayout/index.svelte';
</script>

<DriversLayout
    title={`F1 Drivers ${year}`}
    driverData={drivers}
    driverStandingsHeading={`Driver Standings ${year}`}
    driverStandings={filteredResults}
    year={year}
/>