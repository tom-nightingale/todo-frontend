<script context="module">
    import { Client } from '../../../gql/client';
    import { GET_CONSTRUCTORS_BY_YEAR } from '../../../gql/queries';

    export async function load({ params }) {
        const year = Number(params.slug);
        const queryVariables = {year: year};
        const constructors = await Client.request(GET_CONSTRUCTORS_BY_YEAR, queryVariables);
        
        return {
            props: {
                constructors: constructors.constructors,
                year: year
            }
        }
    }
</script>

<script lang="ts">
    import type { Constructor } from '../../../gql/types';
    export let constructors:Array<Constructor>;
    export let year:number;

    let filteredResults = constructors.sort((a,b) => b.standing.points - a.standing.points);
    import ConstructorsLayout from '../../../components/ConstructorsLayout/index.svelte';


</script>

<ConstructorsLayout
    title={`F1 Constructors ${year}`}
    teamData={constructors}
    teamStandingsHeading={`Constructor Standings ${year}`}
    teamStandings={filteredResults}
    year={year}
/>



