<script context="module">
    import { Client } from '../../gql/client';
    import { GET_CIRCUITS_BY_YEAR } from '../../gql/queries';

    export async function load() {
        const d = new Date();
        const current = Number(d.getFullYear());
        const queryVariables = {year: current};
        const circuits = await Client.request(GET_CIRCUITS_BY_YEAR, queryVariables);
        
        return {
            props: {
                circuits: circuits.circuits,
                year: current,
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

    export let circuits:any;
    export let year:number;

    
</script>

<div class="text-center">
    <h3>See circuits from other years...</h3>
    <div class="grid grid-cols-8 gap-4 text-sm">
        {#each years as year}
                <a class="inline-block mx-auto font-boldhover:text-primary bg-gray-200 rounded-full px-4 py-1" sveltekit:prefetch href={`circuits/year/${year}`}>{year}</a>
        {/each}
    </div>
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