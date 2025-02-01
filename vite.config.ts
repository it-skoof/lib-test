import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
   
   base: './',
   build: {
    lib: {
        entry: {
            main: path.resolve(__dirname, 'src', 'index.ts'),
        },
        fileName: 'main',
        formats: ['cjs', 'es'],
    },
    outDir: 'lib'
   },
   resolve: {
    extensions: ['.ts', '.js']
   },
})