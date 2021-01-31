import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/n7zip-native.ts',
  output: {
    file: './lib/n7zip-native.js',
    format: 'cjs',
    sourcemap: true,
    sourcemapExcludeSources: true,
  },
  external: [],

  plugins: [
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
  ],
}
