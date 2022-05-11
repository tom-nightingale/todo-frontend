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
    import type { Driver } from '../../../gql/types';
    export let drivers:Array<Driver>;
    export let year:number;

    let filteredResults = drivers.sort((a,b) => b.standing.points - a.standing.points);
    import DriversLayout from '../../../components/DriversLayout/index.svelte';
</script>

<DriversLayout
    title={`F1 Drivers ${year}`}
    driverData={drivers}
    driverStandingsHeading={`Driver Standings ${year}`}
    driverStandings={filteredResults}
    year={year}
/>