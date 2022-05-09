<script lang="ts">
    import ResultsTable from '../../components/ResultsTable/index.svelte';
    import ConstructorGrid from '../ConstructorGrid/index.svelte';
    import YearSelector from '../YearSelector/index.svelte';
    export let title:string;
    export let teamData:Array<any>;
    export let teamStandingsHeading:string;
    export let teamStandings:Array<any>;
    export let year:number;
    
</script>


<div class="p-12 text-white bg-gradient-to-tr from-black to-gray-700">
    <h1 class="mb-0">{title}</h1>
</div>

<div class="w-full p-8 md:flex md:flex-wrap">

    <div class="w-full p-4 md:w-2/3">

        <ConstructorGrid data={teamData} {year} />
       
    </div>

    <div class="w-full p-4 md:w-1/3">
        <ResultsTable
            data={teamStandings}
            heading={teamStandingsHeading} />
    </div>
</div>

<YearSelector recordType="constructors" />
    


