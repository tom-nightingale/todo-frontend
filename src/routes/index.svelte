<script lang="ts">
    import PageHeading from '../components/PageHeading/index.svelte';
    import Title from '../components/PageHeading/Title/index.svelte';
    import Subtitle from '../components/PageHeading/Subtitle/index.svelte';
</script>

<PageHeading>
    <div>
        <Title title={`F1 Information`} />
        <Subtitle subtitle={`Information based on the Ergast API.`} />
        <a class="inline-block mt-8 text-xs text-white opacity-75" href="http://ergast.com/mrd/">Ergast API Documentation</a>
    </div>
</PageHeading>

<div class="w-full p-8 md:flex md:flex-wrap">

    <div class="w-full p-4">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <a href="/drivers" class="p-12 text-white transition duration-500 bg-gradient-to-tr from-primary to-primary-light hover:from-primary-light hover:to-primary">
                <p class="mb-4 text-2xl font-bold">Drivers.</p>
                <p>Information on F1 Drivers throughout 2005 - present day.</p>
            </a>
            <a href="/constructors" class="p-12 text-white transition duration-500 bg-gradient-to-tr from-primary to-primary-light hover:from-primary-light hover:to-primary">
                <p class="mb-4 text-2xl font-bold">Constructors.</p>
                <p>Information on F1 Constructors throughout 2005 - present day.</p>
            </a>
            <a href="/circuits" class="p-12 text-white transition duration-500 bg-gradient-to-tr from-primary to-primary-light hover:from-primary-light hover:to-primary">
                <p class="mb-4 text-2xl font-bold">Circuits.</p>
                <p>Information on F1 Circuits throughout 2005 - present day.</p>
            </a>
            <a href="/seasons" class="p-12 text-white transition duration-500 bg-gradient-to-tr from-primary to-primary-light hover:from-primary-light hover:to-primary">
                <p class="mb-4 text-2xl font-bold">Seasons.</p>
                <p>Information on F1 Seasons & standings throughout 2005 - present day.</p>
            </a>
        </div>
    </div>    
</div>
