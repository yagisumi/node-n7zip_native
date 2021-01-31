import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/n7zip-native.ts',
  output: {
    file: './umd/n7zip-native.js',
    format: 'umd',
    name: 'window',
    extend: true,
    sourcemap: true,
    sourcemapExcludeSources: true,
  },

  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      tsconfigOverride: {
        compilerOptions: {
          module: 'es2015',
          sourceMap: true,
          declaration: false,
        },
      },
    }),
    terser(),
  ],
}
