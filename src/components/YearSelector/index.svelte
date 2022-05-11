<script lang="ts">
    export let minYear = 2005; //Default if nothing passed to it.
    export let text = "See information for...";
    export let slugPrefix;
    export let id="";
    
    export let season:number;

    let date = new Date();
    let currentYear = date.getFullYear();

    let years: Array<number> = [];
    for (let i = minYear; i <= currentYear; i++) {
        years = [...years, i];
    }

    import { goto } from '$app/navigation';
    let selectedYear:number = season ? season : minYear;

    function changeYear() {
        goto(`${slugPrefix}/${selectedYear}/${id}`);
    }
</script>

<div class="">
<label class="mr-2 text-white opacity-50">{text}</label>
<select class="px-4 py-1 rounded-full" bind:value={selectedYear} on:change={changeYear}>
    {#each years as year}
        <option selected={year === season} value={year}>{year}</option>
    {/each}
</select>
</div>