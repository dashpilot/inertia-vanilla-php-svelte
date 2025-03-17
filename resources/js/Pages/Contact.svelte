<script>
    import { inertia } from '@inertiajs/svelte';
</script>

<main>
    <h1>Contact Page</h1>
    <p>Get in touch with us.</p>
    <nav>
        <a href="/" use:inertia>Home</a> |
        <a href="/about" use:inertia>About</a>
    </nav>
</main>

<style>
    main {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
