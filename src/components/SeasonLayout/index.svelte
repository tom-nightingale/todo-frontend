<script lang="ts">
    import ResultsTable from '../../components/ResultsTable/index.svelte';
    import Schedule from '../../components/Schedule/index.svelte';
    import YearSelector from '../../components/YearSelector/index.svelte';
    export let title:string;
    export let driverStandings:Array<any>;
    export let teamStandings:Array<any>;
    export let driverStandingHeading:string;
    export let teamStandingHeading:string;
    export let year:number;
    
    export let schedule:Array<any>
</script>


<div class="p-12 text-white bg-gradient-to-tr from-black to-gray-700">
    <h1 class="mb-0">{title}</h1>
</div>

<div class="w-full p-8 md:flex md:flex-wrap">

    <div class="w-full p-4 md:w-2/3">
        <div class="mb-12">
            <ResultsTable
                data={driverStandings}
                heading={driverStandingHeading} />
        </div>  
        
         <ResultsTable
            data={teamStandings}
            heading={teamStandingHeading} />
    </div>

    <div class="w-full p-4 md:w-1/3">
        {#if schedule}
            <Schedule {schedule} {year}/>
        {/if}
    </div>
</div>

<YearSelector recordType="seasons" />


    


