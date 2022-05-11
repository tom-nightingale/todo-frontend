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
    import PageHeading from '../../components/PageHeading/index.svelte';
    import Title from '../../components/PageHeading/Title/index.svelte';
    import Subtitle from '../../components/PageHeading/Subtitle/index.svelte';
    import type { Circuit } from '../../gql/types'
    export let circuit: Circuit;
</script>

<svelte:head>
    <title>{circuit.circuitName} {circuit.Location.country} | F1 Track</title>
</svelte:head>

<PageHeading>
    <div>
        <Title title={` ${circuit.circuitName} `} />
        <Subtitle subtitle={` ${circuit.Location.country} `} />
    </div>
</PageHeading>

<ul>
    <li>{circuit.circuitId}</li>
    <li>{circuit.url}</li>
    <li>{circuit.circuitName}</li>
    <li>{circuit.Location.lat}</li>
    <li>{circuit.Location.long}</li>
    <li>{circuit.Location.locality}</li>
    <li>{circuit.Location.country}</li>
</ul>