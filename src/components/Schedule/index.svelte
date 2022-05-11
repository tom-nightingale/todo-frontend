<script lang="ts">
    import DateTime from '../DateTime/index.svelte';
    import Event from '../Event/index.svelte';

    import type { Schedule } from '../../gql/types';
    export let schedule:Array<Schedule>;
    export let year:number;

    let currentDate = new Date();
    let currentDateHours = currentDate.setHours(0,0,0,0);
    
</script>

<h2 class="mb-8">F1 {year} Schedule</h2>

{#each schedule as circuit, id (id)}

    <Event {circuit} {id} {year} />
                
{/each}
