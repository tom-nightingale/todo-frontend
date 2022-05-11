<script lang="ts">
    import ResultsTable from '../../components/ResultsTable/index.svelte';
    import Schedule from '../../components/Schedule/index.svelte';
    import PageHeading from '../PageHeading/index.svelte';
    import Title from '../PageHeading/Title/index.svelte';
    import YearSelector from '../YearSelector/index.svelte';
    import Subtitle from '../PageHeading/Subtitle/index.svelte';
    export let title:string;
    export let driverStandings:Array<any>;
    export let teamStandings:Array<any>;
    export let driverStandingHeading:string;
    export let teamStandingHeading:string;
    export let season:number;
    
    export let schedule:Array<any>
</script>

<PageHeading>
    <div>
        <Title title={title} />
        <Subtitle subtitle={`Information from the F1 ${season} season.`} />
    </div>
    <YearSelector slugPrefix={`/seasons/year`} season={season}/>
</PageHeading>

<div class="w-full p-8 md:flex md:flex-wrap">

    <div class="w-full p-4 md:w-2/3">
        <div class="mb-12">
            <ResultsTable
                resultType="drivers"
                data={driverStandings}
                heading={driverStandingHeading} />
        </div>  
        
         <ResultsTable
            resultType="constructors"
            data={teamStandings}
            heading={teamStandingHeading} />
    </div>

    <div class="w-full p-4 md:w-1/3">
        {#if schedule}
            <Schedule {schedule} year={season} />
        {/if}
    </div>
</div>


    


