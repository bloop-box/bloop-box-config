import react from '@vitejs/plugin-react';
import {visualizer} from 'rollup-plugin-visualizer';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        visualizer(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: [
                'favicon.ico',
                'icon-180.png',
                'mask-icon.svg',
            ],
            manifest: {
                name: 'Boop Box Config',
                short_name: 'BoopBoxConfig',
                description: 'Configuration Generator for Boop Boxes',
                theme_color: '#1976d2',
                icons: [
                    {
                        src: '/icon-192.png',
                        sized: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/icon-512.png',
                        sized: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
    build: {
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    'mui': ['@mui/material'],
                },
            },
        },
    },
});
