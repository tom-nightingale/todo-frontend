<script lang="ts">
    import DateTime from '../DateTime/index.svelte';
    export let circuit;
    export let id;
    export let year;

    let currentDate = new Date();
    let currentDateHours = currentDate.setHours(0,0,0,0);

    let eventD = new Date(circuit.date);
    let eventDateHours = eventD.setHours(0,0,0,0);

    let containerClasses = 'block mb-4 transition duration-200 ';
    let pastEvent = false;
    if(eventDateHours < currentDateHours) {
        pastEvent = true;
        containerClasses += 'opacity-50 hover:opacity-500';
    }
    
</script>

<div class={containerClasses}>
    {#if pastEvent}
        <a sveltekit:prefetch href={`/seasons/${year}/round/${id + 1}`}>
            <p><span class="text-primary {pastEvent ? '' : 'pl-2'}">{pastEvent ? '🏁' : `${id + 1}.`}</span> {circuit.Circuit.circuitName}</p>
            <span class="pl-6 text-sm text-gray-500"><DateTime time={`${circuit.date}T${circuit.time}`} /></span>
        </a>
    {:else}
        <div class={containerClasses}>
            <p><span class="text-primary {pastEvent ? '' : 'pl-2'}">{pastEvent ? '🏁' : `${id + 1}.`}</span> {circuit.Circuit.circuitName}</p>
            <span class="pl-6 text-sm text-gray-500"><DateTime time={`${circuit.date}T${circuit.time}`} /></span>
        </div>
    {/if}
</div>