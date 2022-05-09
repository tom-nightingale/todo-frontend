<script context="module">
    import { Client } from '../../../gql/client';
    import { GET_CONSTRUCTORS_BY_YEAR } from '../../../gql/queries';

    export async function load({ params }) {
        const queryVariables = {year: Number(params.slug)};
        const constructors = await Client.request(GET_CONSTRUCTORS_BY_YEAR, queryVariables);
        
        return {
            props: {
                constructors: constructors.constructors,
                year: params.slug,
            }
        }
    }
</script>

<script lang="ts">
    let date = new Date();
    let currentYear = date.getFullYear();
    let minYear = 2005;
    let years: Array<number> = [];
    for (let i = minYear; i <= currentYear; i++) {
        years = [...years, i];
    }

    export let constructors:any;
    export let year:number;

    let teamResults:Array<any> = [];

    constructors.forEach((item:any, index:number) => {
        teamResults[index] = {
            type: "constructors",
            name: item.name,
            id: item.constructorId,
            points: item.standing.points,
            wins: item.standing.wins
        };
    });

    let filteredResults = teamResults.sort((a,b) => b.points - a.points);
    import ConstructorsLayout from '../../../components/ConstructorsLayout/index.svelte';


</script>

<ConstructorsLayout
    title={`F1 Constructors ${year}`}
    teamData={constructors}
    teamStandingsHeading={`Constructor Standings ${year}`}
    teamStandings={filteredResults}
    year={year}
/>



