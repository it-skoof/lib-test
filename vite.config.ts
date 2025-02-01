import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
   
   base: './',
   build: {
    lib: {
        entry: {
            main: path.resolve(__dirname, 'src', 'index.ts'),
        },
        fileName: 'index',
        formats: ['es', 'cjs'],
    },
    outDir: 'lib'
   },
   resolve: {
    extensions: ['.ts', '.js']
   },
})