<script lang="ts">
    import ResultsTable from '../../components/ResultsTable/index.svelte';
    export let title:string;
    export let driverStandings:Array<any>;
    export let teamStandings:Array<any>;
    export let driverStandingHeading:string;
    export let teamStandingHeading:string;
</script>


<div class="p-12 text-white bg-black">
    <h1 class="mb-0">{title}</h1>
</div>

<div class="w-full p-8 md:flex md:flex-wrap">

    <div class="w-full p-4 md:w-2/3">
        <ResultsTable
            data={driverStandings}
            heading={driverStandingHeading} />
    </div>

    <div class="w-full p-4 md:w-1/3">
        <ResultsTable
            data={teamStandings}
            heading={teamStandingHeading} />
    </div>
</div>
    


