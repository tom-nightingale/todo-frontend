<script>
    export let _id;
    export let title;
    export let content;
    export let createdDate;
    export let status;

    export let updateTodo;

    let isOpen = false;
    const toggleOpen = () => isOpen = !isOpen;

    function updateThisTodo(id, title, content, status) {
        updateTodo(id, title, content, status);
        toggleOpen();
    }

    import { fade } from 'svelte/transition';
</script>

{#if isOpen}
    <div class="modal-container">
        <div class="modal-content" transition:fade>
            <button class="absolute top-8 right-8 text-xs text-gray-500 " on:click={toggleOpen}>Close</button>
            <h2 class="mb-4">Edit Todo task</h2>
            <form method="POST" class="w-full" on:submit|preventDefault={updateThisTodo(_id, title, content, status)}>
                <label class="block mb-4" for="title">
                    <span class="opacity-50 font-regular text-sm">Title</span>
                    <input class="rounded-md border border-gray-200 p-2 block w-full" type="text" name="title" bind:value={title}>
                </label>
                <label class="block mb-4" for="content">
                    <span class="opacity-50 font-regular text-sm">Content</span>
                    <textarea class="rounded-md border border-gray-200 p-2 block w-full min-h-[200px]" name="content" bind:value={content} />
                </label>

                <label class="block mb-4" for="status">
                    <span class="opacity-50 font-regular text-sm">Status</span>
                    <select class="rounded-md border border-gray-200 w-full p-2 block" name="status" bind:value={status}>
                        <option value="to-do">To do</option>
                        <option value="in-progress">In progress</option>
                        <option value="in-review">In review</option>
                        <option value="complete">Complete</option>
                    </select>
                </label>

                <submit class="cursor-pointer inline-block mx-auto mt-4 border border-gray-200 text-white p-2 text-center bg-primary" on:click={updateThisTodo(_id, title, content, status)}>Update todo</submit>
            </form>
        </div>
    </div>
{/if}


<button class="mt-4 text-primary text-xs inline-block" on:click={toggleOpen}>
    Edit
</button>