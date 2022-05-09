<script context="module">
    import { Client } from '../..//gql/client';
    import { GET_DRIVERS_BY_YEAR, GET_CIRCUITS_BY_YEAR } from '../..//gql/queries';

    export async function load() {
        const year = 2022;
        const queryVariables = {year: year};
        const drivers = await Client.request(GET_DRIVERS_BY_YEAR, queryVariables);
        const circuits = await Client.request(GET_CIRCUITS_BY_YEAR, queryVariables);
        
        return {
            props: {
                drivers: drivers.drivers,
                circuits: circuits.circuits,
                year: year,
            }
        }
    }
</script>

<script lang="ts">
    export let drivers: any;
    export let circuits: any;
    export let year: number;
</script>

<svelte:head>
    <title>F1 {year} Season</title>
</svelte:head>

<h2>F1 {year} Drivers:</h2>
<div class="grid grid-cols-6 gap-4">
    {#each drivers as driver, id (driver.driverId)}
        <div class="p-4">
            <h3><a sveltekit:prefetch href={`/drivers/${driver.driverId}`}>{driver.givenName} {driver.familyName}</a></h3>
            <ul>
                <li>{driver.driverId}</li>
                <li>{driver.code}</li>
                <li><a href={driver.url}>Wiki Link</a></li>
                <li>{driver.dateOfBirth}</li>
                <li>{driver.nationality}</li>
            </ul>
        </div>
    {/each}
</div>

<h2>F1 {year} Circuits:</h2>
<div class="grid grid-cols-6 gap-4">
    {#each circuits as circuit, id (circuit.circuitId)}
    <div class="p-4">
            <h3><a sveltekit:prefetch href={`/circuits/${circuit.circuitId}`}>{circuit.circuitName}</a></h3>
            <ul>
                <li>{circuit.circuitId}</li>
                <li><a href={circuit.url}>Wiki Link</a></li>
                <li>{circuit.Location.lat}</li>      
                <li>{circuit.Location.long}</li>      
                <li>{circuit.Location.locality}</li>              
                <li>{circuit.Location.country}</li>      
            </ul>
        </div>
    {/each}
</div>