<script context="module">
    import { Client } from '../../gql/client';
    import { GET_DRIVERS_BY_YEAR, GET_SCHEDULE_BY_YEAR } from '../../gql/queries';

    export async function load() {
        const d = new Date();
        const current = Number(d.getFullYear());
        const queryVariables = {year: current};
        const schedule = await Client.request(GET_SCHEDULE_BY_YEAR, queryVariables);
        const drivers = await Client.request(GET_DRIVERS_BY_YEAR, queryVariables);
        
        return {
            props: {
                drivers: drivers.drivers,
                schedule: schedule.schedule,
                year: current,
            }
        }
    }
</script>

<script lang="ts">
    import type { Driver, Schedule } from '../../gql/types';
    import CircuitLayout from '../../components/CircuitLayout/index.svelte';

    export let drivers:Array<Driver>;
    export let schedule:Array<Schedule>;
    export let year:number;

    let driverResults = drivers.sort((a,b) => b.standing.points - a.standing.points);

</script>

<CircuitLayout drivers={driverResults} raceSchedule={schedule} season={year} />