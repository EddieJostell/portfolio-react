import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './config/setup.ts',
        include: ['src/**/*.{test,spec}.{ts,tsx}'],
        exclude: ['node_modules', 'dist'],
        
        coverage: {
            reporter: ['text', 'json', 'html'],
            extension: '.tsx',
        },
        
    },
    resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
