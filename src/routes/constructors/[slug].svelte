<script context="module">
    import { Client } from '../../gql/client';
    import { GET_CONSTRUCTOR_BY_ID } from '../../gql/queries';

    export async function load({ params }) {
        const queryVariables = {constructorId: String(params.slug)};
        const team = await Client.request(GET_CONSTRUCTOR_BY_ID, queryVariables);
        return {
            props: {
                team: team.getConstructor,
            }
        }
    }
</script>

<script lang="ts">
    export let team:any;
</script>

<svelte:head>
    <title>{team.name} | F1 Team</title>
</svelte:head>

<h1>{team.name}</h1>
<img src="{team.carImage}" alt={team.name} />
<ul>
    <li>{team.constructorId}</li>
    <li>{team.url}</li>
    <li>{team.nationality}</li>
</ul>