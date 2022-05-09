<script lang="ts">
    export let heading:string;
    export let data:Array<string, number>;
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
            <td><a href={`/${item.type}/${item.id}`}>{item.name}</a></td>
            <td>{item.wins}</td>
            <td>{item.points}</td>
        </tr>
        {/each}
    </tbody>
</table>