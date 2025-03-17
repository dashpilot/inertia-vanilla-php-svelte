<script>
    import { page } from '@inertiajs/svelte';
    import { inertia } from '@inertiajs/svelte';

    // Props from the server automatically provided by page store
    let { message } = $props();
</script>

<main>
    <h1>Home Page</h1>
    <p>Welcome to our Inertia.js Vanilla PHP with Svelte 5 Demo!</p>
    <nav>
        <a href="/about" use:inertia>About</a> |
        <a href="/contact" use:inertia>Contact</a>
    </nav>
    <div>
        <p>Message from server: {message}</p>
        <p>Current page: {$page.component}</p>
    </div>
</main>

<style>
    h1 {
        color: #555;
    }

    nav {
        margin: 20px 0;
    }
</style>
