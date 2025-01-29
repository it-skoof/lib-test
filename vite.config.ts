import path from 'path'
import {defineConfig, UserConfig} from 'vite'




export default defineConfig({
    base: './',
    build: {
        lib: {
            entry: path.resolve(__dirname, 'index.js'),
            fileName: (format, fileName) => {
                console.log(format + ' ' + fileName);


                // if(format === '')

                return format + '/' + fileName + '.js'
            },
            name: 'myBndl',
            formats: ['esm', 'cjs']
        }
    }
} as UserConfig)