import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, '/index.html'),
                login: resolve(__dirname, '/login/index.html'),
                register: resolve(__dirname, '/register/index.html'),
                dashboard: resolve(__dirname, '/dashboard/index.html'),
                profile: resolve(__dirname, '/profile/index.html'),
            },
        },
    },
})