<script lang="ts">
    let date = new Date();
    let currentYear = date.getFullYear();
    let minYear = 2005;
    let years: Array<number> = [];
    for (let i = minYear; i <= currentYear; i++) {
        years = [...years, i];
    }
    export let recordType:string;
</script>

<div class="p-6 text-center bg-gray-100">
    <p class="text-lg font-bold">Select year...</p>
    <div class="flex p-4 text-sm">
        {#each years as year}
                <a class="inline-block px-4 py-1 mx-auto rounded-full {currentYear === year ? 'bg-primary-light text-white' : 'bg-white hover:bg-primary-light hover:text-white'}" sveltekit:prefetch href={`/${recordType}/year/${year}`}>{year}</a>
        {/each}
    </div>
</div>