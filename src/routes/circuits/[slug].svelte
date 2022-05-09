<script context="module">
    import { Client } from '../..//gql/client';
    import { GET_CIRCUIT_BY_ID } from '../..//gql/queries';

    export async function load({ params }) {
        
        const queryVariables = {circuitId: String(params.slug)};
        const circuit = await Client.request(GET_CIRCUIT_BY_ID, queryVariables);

        return {
            props: {
                circuit: circuit.circuit
            }
        }
    }
</script>

<script lang="ts">
    export let circuit: any;
</script>

<svelte:head>
    <title>{circuit.circuitName} {circuit.Location.country} | F1 Track</title>
</svelte:head>

<h1>{circuit.circuitName}</h1>
<ul>
<li>{circuit.circuitId}</li>
<li>{circuit.url}</li>
<li>{circuit.circuitName}</li>
<li>{circuit.Location.lat}</li>
<li>{circuit.Location.long}</li>
<li>{circuit.Location.locality}</li>
<li>{circuit.Location.country}</li>
</ul>