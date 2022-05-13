<script context="module">

    export async function load() {
        let todos = await fetch('https://todo-api-mauve.vercel.app/api')
        .then((response) => {
            return response.json()
            .then((data) => {
                return data;
            })
        })
        return {
            props: {
                todos: todos
            }
        }
    }
</script>

<script>
    import { fade } from 'svelte/transition';
    import Card from '../components/Card/index.svelte';
    export let todos;

    $: todoList = todos.reverse();    

    /* refresh to do list */
    async function refreshTodos() {
        await fetch('https://todo-api-mauve.vercel.app/api')
        .then((response) => {
            return response.json()
            .then((data) => {
                todos = data;
            })
        });
    }

    /* handle adding a new Todo */
    async function createTodo(e) {
        console.log('adding...');

        const formData = new FormData(e.target);
        let json = Object.fromEntries(formData.entries());

        await fetch('https://todo-api-mauve.vercel.app/api', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: json.title,
            })
        })
        .then((response) => {
            console.log(response);
            if(response.ok) {
                console.log('ok');
                refreshTodos();
                e.target.querySelector('input').value = '';
            }
        });
    }

    /* handle todo updates */
    const updateTodo = async function(id, title, content, status) {
        await fetch(`https://todo-api-mauve.vercel.app/api/edit/${id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                title: title,
                content: content,
                status: status,
            })
        })
        .then((response) => {
            if(response.ok) {
                console.log('updated ok');
                refreshTodos();
            }
        });
    }

    /* handle todo deletion */
    let deleteWarning = false;
    let idToDelete = 0;
    let contentToDelete = "";
    
    function warnOnDelete(id, content) {
        console.log(id);
        console.log(content);
        deleteWarning = true;
        idToDelete = id;
        contentToDelete = content;
    }

    function cancelWarnOnDelete() {
        deleteWarning = false;
        idToDelete = 0;
        contentToDelete = "";
    }

    async function deleteTodo(id) {
        // console.log(id);
        console.log('deleting...');
        await fetch(`https://todo-api-mauve.vercel.app/api/remove/${id}`)
        .then((response) => {
            if(response.ok) {
                console.log('ok');
                refreshTodos();
            }
        });
        deleteWarning = false;
    }
    
</script>

<div class="bg-gray-100 p-4 min-h-screen">

    {#if deleteWarning}
        <div class="modal-container">
            <div class="modal-content" transition:fade>
                <div class="text-center w-full">
                    <h2>Warning!</h2>
                    <p class="mb-4">You're about to delete this record, are you sure?</p>
                    {idToDelete}
                    <p class="mb-4 text-sm">Record: <strong>{contentToDelete}</strong></p>
                    <div class="flex flex-wrap w-full justify-center">
                        <button on:click={cancelWarnOnDelete} class="mx-2 bg-primary rounded-full inline-block py-1 px-4 text-white">Cancel</button>
                        <button on:click={deleteTodo(idToDelete)} class="mx-2 bg-black/30 hover:bg-black transition duration-200 hover:text-white text-white p-2 px-4 rounded-full text-sm">Yes, I'm sure</button>
                    </div>
                </div>
            </div>
        </div>
    {/if}

    
    <form class="flex flex-wrap justify-center w-full bg-black p-16" method="POST" on:submit|preventDefault={createTodo}>
        <input class="w-5/12 p-2 rounded-l-md" type="text" name="title" placeholder="What do you want to achieve today?">
        <button type="submit" class="cursor-pointer w-1/12 rounded-r-md text-center text-white p-2 bg-primary-light">Add task</button>
    </form>
    

    <div class="mt-12 grid grid-cols-4 gap-12">

        <div>

            <h2>To do</h2>

            {#if todoList.length > 0}
            
                {#each todoList as todo, index (todo._id) }

                    <Card {...todo} {warnOnDelete} {updateTodo} {refreshTodos} />
                    
                {/each}

            {:else}

                <div class="mt-4 border border-gray-100 bg-white rounded-lg p-8 mb-4 shadow-lg opacity-50">

                    <p class="font-bold">Nothing to complete!</p>

                </div>

            {/if}
            
        </div>

        <div>
            <h2>In progress</h2>
        </div>

        <div>
            <h2>In review</h2>
        </div>

        <div>
            <h2>Complete</h2>
        </div>

    

    </div>
</div>