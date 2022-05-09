<script context="module">
    import { Client } from '../..//gql/client';
    import { GET_DRIVER_BY_ID } from '../..//gql/queries';

    export async function load({ params }) {
        
        const queryVariables = {driverId: String(params.slug)};
        const driver = await Client.request(GET_DRIVER_BY_ID, queryVariables);

        return {
            props: {
                driver: driver.driver
            }
        }
    }
</script>

<script lang="ts">
    export let driver:any;
</script>

<svelte:head>
    <title>{driver.givenName} {driver.familyName} | F1 Driver</title>
</svelte:head>

<h1>{driver.givenName} {driver.familyName}</h1>
<ul>
    <li>{driver.driverId}</li>
    <li>{driver.code}</li>
    <li>{driver.url}</li>
    <li>{driver.givenName}</li>
    <li>{driver.familyName}</li>
    <li>{driver.dateOfBirth}</li>
    <li>{driver.nationality}</li>
</ul>