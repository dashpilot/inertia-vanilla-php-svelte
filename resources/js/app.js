// resources/js/app.js
import { createInertiaApp } from '@inertiajs/svelte';
import { hydrate, mount } from 'svelte';

// Debug output for development
console.log('Inertia Svelte app starting with v2.0.5 and Svelte 5');

createInertiaApp({
    progress: {
        color: '#4B5563',
        showSpinner: true,
    },
    resolve: (name) => {
        console.log('Resolving page:', name);

        const pages = import.meta.glob('./Pages/**/*.svelte', { eager: true });
        const page = pages[`./Pages/${name}.svelte`];

        if (!page) {
            console.error(`Page not found: ${name}`);
        }

        return page;
    },
    setup({ el, App, props }) {
        console.log('Mounting Svelte app with props:', props);

        // Using Svelte 5's mount function directly
        // This is the correct way to initialize components in Svelte 5
        return mount(App, {
            target: el,
            props: props || {},
        });
    },
});
