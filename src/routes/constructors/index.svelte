<script context="module">
    import { Client } from '../../gql/client';
    import { GET_CONSTRUCTORS_BY_YEAR } from '../../gql/queries';

    export async function load() {
        const d = new Date();
        const current = Number(d.getFullYear());
        const queryVariables = {year: current};
        const constructors = await Client.request(GET_CONSTRUCTORS_BY_YEAR, queryVariables);
        
        return {
            props: {
                constructors: constructors.constructors,
                year: current,
            }
        }
    }
</script>

<script lang="ts">
    import type { Constructor } from '../../gql/types';
    export let constructors:Array<Constructor>;
    export let year:number;

    let filteredResults = constructors.sort((a,b) => b.standing.points - a.standing.points);
    import ConstructorsLayout from '../../components/ConstructorsLayout/index.svelte';
</script>

<ConstructorsLayout
    title={`F1 Constructors ${year}`}
    teamData={constructors}
    teamStandingsHeading={`Constructor Standings ${year}`}
    teamStandings={filteredResults}
    year={year}
/>