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
    h1 {
        color: #555;
    }

    nav {
        margin: 20px 0;
    }
</style>
