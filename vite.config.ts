import path from 'path'
import {defineConfig, UserConfig} from 'vite'




export default defineConfig({
    base: './',
    build: {
        lib: {
            entry: path.resolve('src/index.ts'),
            fileName: 'test-lib',
            name: 'testLib',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: []
        }
    }
} as UserConfig)