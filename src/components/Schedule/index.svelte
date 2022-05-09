<script lang="ts">
    export let schedule:Array<any>;
    export let year:number;
</script>

<h2 class="mb-8">F1 {year} Schedule</h2>

{#each schedule as circuit, id (circuit.id)}
    
        <div class="mb-4">
            <a class="block" sveltekit:prefetch href={`/circuits/${circuit.id}`}><span class="text-primary">{id + 1}. </span> {circuit.circuitName}</a>
            <span class="pl-6 text-sm text-gray-500">{circuit.raceDate} ({circuit.raceTime})</span>
         </div>
        
        
{/each}
