import { defineConfig } from 'vite';
export default defineConfig ({
    optimizeDeps: {
        exclude: ['@urlql/svelte'],
    }
})