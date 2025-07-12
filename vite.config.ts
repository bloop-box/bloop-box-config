import * as path from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    base: process.env.DEPLOY_BASE,
    plugins: [
        react(),
        tsconfigPaths(),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["favicon.ico", "icon-180.png", "mask-icon.svg"],
            manifest: {
                name: "Bloop Box Config",
                short_name: "BloopBoxConfig",
                description: "Configuration Generator for Bloop Boxes",
                theme_color: "#1976d2",
                icons: [
                    {
                        src: "/icon-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/icon-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
    define: {
        appVersion: JSON.stringify(process.env.npm_package_version),
    },
    build: {
        sourcemap: true,
        outDir: process.env.OUT_DIR ? path.relative(__dirname, process.env.OUT_DIR) : undefined,
        rollupOptions: {
            output: {
                manualChunks: {
                    mui: ["@mui/material"],
                },
            },
        },
    },
});
