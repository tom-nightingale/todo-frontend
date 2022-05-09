<script context="module">
    import { Client } from '../../../gql/client';
    import { GET_CIRCUITS_BY_YEAR } from '../../../gql/queries';

    export async function load({ params }) {
        const year = Number(params.slug);
        const queryVariables = {year: year};
        const circuits = await Client.request(GET_CIRCUITS_BY_YEAR, queryVariables);
        
        return {
            props: {
                circuits: circuits.circuits,
                year: year,
            }
        }
    }
</script>

<script lang="ts">
    export let circuits: any;
    export let year: number;
</script>

<svelte:head>
    <title>F1 {year} Season</title>
</svelte:head>

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