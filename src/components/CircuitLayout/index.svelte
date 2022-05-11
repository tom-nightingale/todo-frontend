<script lang="ts">
    import type { Schedule, Driver} from '../../gql/types';
    import Schedule from '../../components/Schedule/index.svelte';
    import DateTime from '../../components/DateTime/index.svelte';
    import ResultsTable from '../../components/ResultsTable/index.svelte';

    import PageHeading from '../PageHeading/index.svelte';
    import Title from '../PageHeading/Title/index.svelte';
    import YearSelector from '../YearSelector/index.svelte';
    import Subtitle from '../PageHeading/Subtitle/index.svelte';
    
    export let raceSchedule:Array<Schedule>
    export let drivers:Array<Driver>;
    export let season:number;
</script>

<PageHeading>
    <div>
        <Title title={`${season} Circuits`} />
        <Subtitle subtitle={`Circuits from the ${season} F1 season.`} />
    </div>
    <YearSelector slugPrefix={`/circuits/year`} season={season}/>
</PageHeading>

<div class="w-full p-8 md:flex md:flex-wrap">

    <div class="w-full p-4 md:w-2/3">
        <div class="grid grid-cols-4 gap-4">
            {#each raceSchedule as circuit, id}
                <div class="p-4">
                    <a sveltekit:prefetch href={`/circuits/${circuit.Circuit.circuitId}`}>
                        <span class="block">Round {id+1}.</span>
                        <span class="block text-xs opacity-75"><DateTime time={`${circuit.date}T${circuit.time}`} /></span>
                        <span class="font-bold">{circuit.Circuit.circuitName}</span></a>
                    
                </div>
            {/each}
        </div>
    </div>

    <div class="w-full p-4 md:w-1/3">
        
            <ResultsTable heading={`F1 ${season} Driver Standings`} resultType="drivers" data={drivers} year={season} />
        
    </div>
</div>