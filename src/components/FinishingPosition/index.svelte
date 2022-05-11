<script lang="ts">
    export let start:number;
    export let end:number;
</script>

{#if (start - end) > 0}
    <span class="text-green-500">⇡ {start - end}</span>
{:else if (start - end) < 0}
    <span class="text-red-500">⇣ {start - end}</span>
{:else}
    <span class="text-blue-500">-</span>
{/if}