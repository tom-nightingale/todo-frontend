<script context="module">
    import { Client } from '../../../gql/client';
    import { GET_CONSTRUCTORS_BY_YEAR } from '../../../gql/queries';

    export async function load({ params }) {
        const queryVariables = {year: Number(params.slug)};
        const constructors = await Client.request(GET_CONSTRUCTORS_BY_YEAR, queryVariables);
        
        return {
            props: {
                constructors: constructors.constructors,
                year: params.slug,
            }
        }
    }
</script>

<script lang="ts">
    let date = new Date();
    let currentYear = date.getFullYear();
    let minYear = 2005;
    let years: Array<number> = [];
    for (let i = minYear; i <= currentYear; i++) {
        years = [...years, i];
    }

    export let constructors:any;
    export let year:number;

    //Sort the results to display the table
    let resultsArray:Array<any> = [];
    constructors.forEach((item:any, index:number) => {
        resultsArray[index] = {
            name: item.name,
            points: item.standing.points,
            wins: item.standing.wins
        };
    });
    let filteredResults = resultsArray.sort((a,b) => b.points - a.points);

</script>

<div class="text-center">
    <h3>See constructors from other years...</h3>
    <div class="grid grid-cols-8 gap-4 text-sm">
        {#each years as year}
                <a class="inline-block mx-auto font-boldhover:text-primary bg-gray-200 rounded-full px-4 py-1" sveltekit:prefetch href={`/constructors/year/${year}`}>{year}</a>
        {/each}
    </div>
</div>

<h2>F1 {year} Constructors:</h2>
<div class="grid grid-cols-6 gap-4">
    {#each constructors as item, id (item.constructorId)}
        <div class="p-4">
            <h3><a sveltekit:prefetch href={`/constructors/${item.constructorId}`}>{item.name}</a></h3>
            <p>Finished {item.standing.position} in driver championship with {item.standing.wins} wins.</p>
            {#if item.carImage}
                <img src={item.carImage} alt={item.name} />
            {/if}
        </div>
    {/each}
</div>


<h2>Constructors Championship Results {year}</h2>
<table>
    <thead>
        <tr>
            <td>Position</td>
            <td>Team</td>
            <td>Wins</td>
            <td>Points</td>
        </tr>
    </thead>
    <tbody>
        {#each filteredResults as item, index}
        <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.wins}</td>
            <td>{item.points}</td>
        </tr>
        {/each}
    </tbody>
</table>


