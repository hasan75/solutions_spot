import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: './src',  // Explicit root directory
    server: {
        open: true,
        port: 5173,
        host: true    // Enable network access
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                services: resolve(__dirname, 'src/services.html'),
                privacy: resolve(__dirname, 'src/privacy-policy.html'),
                terms: resolve(__dirname, 'src/terms-conditions.html'),
                refund: resolve(__dirname, 'src/refund-policy.html'),
                about: resolve(__dirname, 'src/about-us.html'),
            }
        }
    },
    css: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    }
})