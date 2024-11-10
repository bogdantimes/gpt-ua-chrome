import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: './popup',
        rollupOptions: {
            input: '../gpt-ua/src/web/index.tsx',
            output: {
                entryFileNames: 'index.js',
                assetFileNames: 'index.css',
                format: 'es', // Ensure ES module format
            },
        },
        sourcemap: false,
        emptyOutDir: false, // Prevent cleaning up the output folder
    },
    base: './',
});