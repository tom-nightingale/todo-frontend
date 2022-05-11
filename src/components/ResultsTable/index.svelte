<script lang="ts">
    import type { Driver, Constructor } from '../../gql/types';
    export let heading:string;
    export let data:Array<Driver | Constructor>;
    export let resultType:string;
</script>

<h2>{heading}</h2>
<table>
    <thead>
        <tr>
            <td>Position</td>
            <td>Team</td>
            <td>Wins</td>
            <td>Points</td>
        </tr>
    </thead>
    <tbody>
        {#each data as item, index}
        <tr>
            <td>{index + 1}</td>

            {#if resultType === "drivers"}
                <td><a href={`/${resultType}/${item.driverId}`}>{item.givenName} {item.familyName}</a></td>
                <td>{item.standing.wins}</td>
                <td>{item.standing.points}</td>
            {:else}
                <td><a href={`/${resultType}/${item.constructorId}`}>{item.name}</a></td>
                <td>{item.standing.wins}</td>
                <td>{item.standing.points}</td>
            {/if}
        </tr>
        {/each}
    </tbody>
</table>