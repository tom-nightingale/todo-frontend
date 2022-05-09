<script>
    import '../styles/app.css';
</script>

<header>
    <nav class="text-white bg-primary">
        <ul class="flex justify-center w-full">
            <li><a sveltekit:prefetch class="inline-block p-2 mx-2" href="/">Home</a></li>
            <li><a sveltekit:prefetch class="inline-block p-2 mx-2" href="/drivers">Drivers</a></li>
            <li><a sveltekit:prefetch class="inline-block p-2 mx-2" href="/constructors">Constructors</a></li>
            <li><a sveltekit:prefetch class="inline-block p-2 mx-2" href="/circuits">Circuits</a></li>
            <li><a sveltekit:prefetch class="inline-block p-2 mx-2" href="/seasons">Seasons</a></li>
            <li><a sveltekit:prefetch class="inline-block p-2 mx-2" href="/">Results</a></li>
            <li><a sveltekit:prefetch class="inline-block p-2 mx-2" href="/">Qualifying</a></li>
            <li><a sveltekit:prefetch class="inline-block p-2 mx-2" href="/">Schedules</a></li>
            <li><a sveltekit:prefetch class="inline-block p-2 mx-2" href="/">Standings</a></li>
            <li><a sveltekit:prefetch class="inline-block p-2 mx-2" href="/">Finishing Status</a></li>
            <li><a sveltekit:prefetch class="inline-block p-2 mx-2" href="/">Lap Times</a></li>
            <li><a sveltekit:prefetch class="inline-block p-2 mx-2" href="/">Pit Stops</a></li>
        </ul>
    </nav>
</header>

<main>
    <slot />
</main>

<footer class="p-8 font-bold text-center text-white bg-black">
    F1 stats.
</footer>