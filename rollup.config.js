import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import svelte from 'rollup-plugin-svelte';
import preprocess from 'svelte-preprocess';

const options = {
  input: 'src/main.ts',
  output: {
    file: 'dist/main.js'
  },
  plugins: [
    commonjs(),
    svelte({ emitCss: false, preprocess: preprocess({ sourceMap: true }) }),
    resolve({
      browser: true,
      exportConditions: ['svelte'],
      extensions: ['.svelte']
    }),
    typescript({
      sourceMap: false,
      resolveJsonModule: true
    })
  ]
};

export default options;
