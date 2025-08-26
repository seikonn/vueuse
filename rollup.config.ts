import type { Options as ESBuildOptions } from 'rollup-plugin-esbuild'
import { fileURLToPath, URL } from 'node:url'
import alias from '@rollup/plugin-alias'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

function aliasPlugin() {
  return alias({
    entries: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  })
}

function esbuildMinifier(options: ESBuildOptions) {
  const { renderChunk } = esbuild(options)

  return {
    name: 'esbuild-minifier',
    renderChunk,
  }
}

export default defineConfig([
  {
    plugins: [aliasPlugin(), typescript({ tsconfig: './tsconfig.json' })],
    input: 'src/index.ts',
    external: ['vue'],
    output: [
      {
        file: './dist/index.iife.js',
        format: 'iife',
        name: 'easyuse',
        globals: {
          vue: 'Vue',
        },
        plugins: [],
      },
      {
        file: './dist/index.iife.min.js',
        format: 'iife',
        name: 'easyuse',
        globals: {
          vue: 'Vue',
        },
        plugins: [
          esbuildMinifier({
            minify: true,
          }),
        ],
      },
      {
        format: 'es',
        dir: './dist',
        entryFileNames: 'index.mjs',
      },
    ],
  },
  {
    plugins: [aliasPlugin(), dts()],
    input: 'src/index.ts',
    external: ['vue'],
    output: [
      {
        format: 'es',
        file: `./dist/index.d.mts`,
      },
    ],
  },
])
