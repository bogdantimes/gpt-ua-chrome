import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const isGitHubAction = fs.existsSync(path.resolve(__dirname, './gpt-ua'));

const inputPath = isGitHubAction ? './gpt-ua/src/web/index.tsx' : '../gpt-ua/src/web/index.tsx';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: './popup',
        rollupOptions: {
            input: inputPath,
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