<script context="module">
    import { Client } from '../../../../gql/client';
    import { GET_RESULTS_BY_YEAR_ROUND } from '../../../../gql/queries';

    export async function load({ params }) {
        const year = Number(params.year);
        const round = Number(params.round);
        const queryVariables = {
            year: year,
            round: round 
        };
        
        const results = await Client.request(GET_RESULTS_BY_YEAR_ROUND, queryVariables);
    
        return {
            props: {
                year: year,
                round: round,
                results: results.results,
            }
        }
    }
</script>

<script lang="ts">

    import FinishingPosition from '../../../../components/FinishingPosition/index.svelte';
    import PageHeading from '../../../../components/PageHeading/index.svelte';
    import DateTime from '../../../../components/DateTime/index.svelte';

    export let year:number;
    export let round:number;
    export let results:Array<any>;
</script>

<svelte:head>
    <title>Round {round} | {results.race.Circuit.circuitName} | F1 {year}</title>
</svelte:head>

<PageHeading recordType="hidden" title={`${results.race.raceName} ${year}`} subTitle={`Round ${round}, ${results.race.Circuit.circuitName}.`} season={year}/>
<div class="w-full p-8 md:flex md:flex-wrap">

    <div class="w-full p-4 md:w-2/3">

        <table>
            <thead>
                <tr>
                    <td>Position</td>
                    <td>Driver</td>
                    <td>Points</td>
                    <td>Position Change</td>
                </tr>
            </thead>
            <tbody>
                {#each results.results as item, index}
                <tr>
                    <td>{item.position}</td>
                    <td>{item.Driver.givenName} {item.Driver.familyName}</td>
                    <td>{item.points}</td>
                    <td><FinishingPosition start={item.grid} end={item.position} /> {#if item.status !== "Finished"}<span class="text-sm opacity-50">({item.status})</span>{/if}</td>
                </tr>
                {/each}
            </tbody>
        </table>

    </div>

    <div class="w-full p-4 py-6 md:w-1/3">
        <h2>{results.race.raceName}</h2>
        <p>{results.race.Circuit.circuitName}</p>
        <DateTime time={`${results.race.date}T${results.race.time}`} />

        <p class="mt-8"><strong>Total Laps:</strong> {results.results[0].laps} </p>
        <p class="mt-8"><strong>Won By:</strong> 
            <a sveltekit:prefetch href=/drivers/{results.results[0].Driver.driverId}>
                {results.results[0].Driver.givenName} {results.results[0].Driver.familyName}
                </a>
                (<a sveltekit:prefetch href={`/constructors/${results.results[0].Driver.getConstructor.constructorId}`}>{results.results[0].Driver.getConstructor.name}</a>)
        </p>
        

    </div>

</div>