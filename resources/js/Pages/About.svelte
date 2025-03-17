<script>
    import { inertia } from '@inertiajs/svelte';
</script>

<main>
    <h1>About Page</h1>
    <p>This is a demo of Inertia.js working with vanilla PHP and Svelte.</p>
    <nav>
        <a href="/" use:inertia>Home</a> |
        <a href="/contact" use:inertia>Contact</a>
    </nav>
</main>

<style>
    h1 {
        color: #555;
    }

    nav {
        margin: 20px 0;
    }
</style>
