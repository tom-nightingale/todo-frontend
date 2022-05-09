<script lang="ts">
    import ResultsTable from '../../components/ResultsTable/index.svelte';
    import DriverGrid from '../DriverGrid/index.svelte';
    import YearSelector from '../YearSelector/index.svelte';
    export let title:string;
    export let driverData:Array<any>;
    export let driverStandingsHeading:string;
    export let driverStandings:Array<any>;
    export let year:number;
    
    
</script>


<div class="p-12 text-white bg-gradient-to-tr from-black to-gray-700">
    <h1 class="mb-0">{title}</h1>
</div>



<div class="w-full p-8 md:flex md:flex-wrap">

    <div class="w-full p-4 md:w-2/3">

        <DriverGrid data={driverData} {year} />
       
    </div>

    <div class="w-full p-4 md:w-1/3">
        <ResultsTable
            data={driverStandings}
            heading={driverStandingsHeading} />
    </div>
</div>

<YearSelector recordType="drivers" />
    


