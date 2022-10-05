import react from '@vitejs/plugin-react';
import {visualizer} from 'rollup-plugin-visualizer';
import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        visualizer(),
    ],
    build: {
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    'mui': ['@mui/material', '@mui/lab'],
                    'js-joda': ['@js-joda/core', '@js-joda/timezone', '@js-joda/locale_en-us'],
                },
            },
        },
    },
});
