<script context="module">
    import { Client } from '../../gql/client';
    import { GET_DRIVERS_BY_YEAR } from '../../gql/queries';

    export async function load() {
        const d = new Date();
        const current = Number(d.getFullYear());
        const queryVariables = {year: current};
        const drivers = await Client.request(GET_DRIVERS_BY_YEAR, queryVariables);
        
        return {
            props: {
                drivers: drivers.drivers,
                year: current,
            }
        }
    }
</script>

<script lang="ts">
    import type { Driver } from '../../gql/types';
    let date = new Date();
    let currentYear = date.getFullYear();
    let minYear = 2005;
    let years: Array<number> = [];
    for (let i = minYear; i <= currentYear; i++) {
        years = [...years, i];
    }

    export let drivers:Array<Driver>;
    export let year:number;

    let filteredResults = drivers.sort((a,b) => b.standing.points - a.standing.points);
    import DriversLayout from '../../components/DriversLayout/index.svelte';
</script>

<DriversLayout
    title={`F1 Drivers ${year}`}
    driverData={drivers}
    driverStandingsHeading={`Driver Standings ${year}`}
    driverStandings={filteredResults}
    year={year}
/>