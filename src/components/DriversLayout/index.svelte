<script lang="ts">
    import ResultsTable from '../../components/ResultsTable/index.svelte';
    import DriverGrid from '../DriverGrid/index.svelte';
    import PageHeading from '../PageHeading/index.svelte';
    import Title from '../PageHeading/Title/index.svelte';
    import YearSelector from '../YearSelector/index.svelte';
    import Subtitle from '../PageHeading/Subtitle/index.svelte';
    
    export let title:string;
    export let driverData:Array<any>;
    export let driverStandingsHeading:string;
    export let driverStandings:Array<any>;
    export let year:number;
    let season:number = year;
</script>

<PageHeading>
    <div>
        <Title title={title} />
        <Subtitle subtitle={`Drivers from the ${year} F1 season.`} />
    </div>
    <YearSelector slugPrefix={`/drivers/year`} season={year}/>
</PageHeading>

<div class="w-full p-8 md:flex md:flex-wrap">

    <div class="w-full p-4 md:w-2/3">

        <DriverGrid data={driverData} {year} />
       
    </div>

    <div class="w-full p-4 md:w-1/3">
        <ResultsTable
            resultType='drivers'
            data={driverStandings}
            heading={driverStandingsHeading} />
    </div>
</div>
    


