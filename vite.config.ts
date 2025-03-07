import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [react(),
        viteCompression({
            algorithm: 'gzip', // Du kan också använda 'brotliCompress' eller 'deflate'
          }),
    ],
    server: {
        port: 8000,
        open: true,
    },
    build: {
        outDir: 'dist',
    },
});