<script context="module">
    import { Client } from '../../../gql/client';
    import { GET_DRIVERS_BY_YEAR } from '../../../gql/queries';

    export async function load({ params }) {
        const year = Number(params.slug);
        const queryVariables = {year: year};
        const drivers = await Client.request(GET_DRIVERS_BY_YEAR, queryVariables);
        
        return {
            props: {
                drivers: drivers.drivers,
                year: year,
            }
        }
    }
</script>

<script lang="ts">
    export let drivers:Array<any>;
    export let year:number;

    // Sort the results to display the table
    let resultsArray:Array<any> = [];
    drivers.forEach((item:any, index:number) => {
        resultsArray[index] = {
            name: `${item.givenName} ${item.familyName}`,
            points: item.standing.points,
            wins: item.standing.wins
        };
    });

    let filteredResults = resultsArray.sort((a,b) => b.points - a.points);
</script>

<h2>F1 {year} Drivers:</h2>
<div class="grid grid-cols-6 gap-4">
    {#each drivers as driver, id (driver.driverId)}
        <div class="p-4">
            <h3><a sveltekit:prefetch href={`/drivers/${driver.driverId}`}>{driver.givenName} {driver.familyName}</a></h3>
            <p>Finished {driver.standing.position} in driver championship with {driver.standing.wins} wins.</p>
            {#if driver.getConstructor.carImage}
                <img src={driver.getConstructor.carImage} alt={driver.getConstructor.name} />
            {/if}
            <h4>Constructor: {driver.getConstructor.name}</h4>
            <p>Constructor position: {driver.getConstructor.standing.position}</p>
            <p>Constructor points: {Number(driver.getConstructor.standing.points)}</p>
        </div>
    {/each}
</div>

<h2>Driver Championship Results {year}</h2>
<table>
    <thead>
        <tr>
            <td>Position</td>
            <td>Team</td>
            <td>Points</td>
            <td>Wins</td>
        </tr>
    </thead>
    <tbody>
        {#each filteredResults as item, index}
        <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.points}</td>
            <td>{item.wins}</td>
        </tr>
        {/each}
    </tbody>
</table>