<script>
    import { fade } from 'svelte/transition';
    import EditTodo from '../EditTodo/index.svelte';
    
    export let todo;
    export let _id;
    export let title;
    export let content;
    export let status;
    export let createdDate;

    export let warnOnDelete;
    export let updateTodo;
    export let refreshTodos;

    let deteWarning = false;
    let idToDelete = 0;
    let contentToDelete = "";
</script>


<div class="mt-4 border border-gray-200 bg-white rounded-lg p-8 mb-4 shadow-lg" transition:fade>
                        
    <div class="relative">
        <button on:click={warnOnDelete(_id, title)} class="absolute top-0 right-0 inline-block text-xs">
            Delete
        </button>
    </div>
    
    <p class="font-bold">{title}</p>
    {#if content}
        <p>{content}</p>
    {/if}
    {#if status}
        {status}
    {/if}
    <p class="mt-2 text-xs">Created: {createdDate}</p>

    <EditTodo {updateTodo} _id={_id} title={title} content={content} status={status} createdDate={createdDate} />

</div>