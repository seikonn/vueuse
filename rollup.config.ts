import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import alias from "@rollup/plugin-alias";
import { defineConfig } from "rollup";
import { fileURLToPath, URL } from "node:url";

// 等价于 __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const aliasPlugin = alias({
  entries: [
    {
      find: "@",
      replacement: fileURLToPath(new URL("./src", import.meta.url)),
    },
  ],
});
/**
 * @type {import('rollup').RollupOptions}
 */
export default defineConfig([
  {
    plugins: [aliasPlugin, typescript({ tsconfig: "./tsconfig.json" })],
    input: "src/index.ts",
    external: ["vue"],
    output: [
      {
        format: "iife",
        dir: "./dist",
        entryFileNames: "[name].iife.js",
        name: "seikonnUse",
        globals: {
          vue: "Vue",
        },
      },
      {
        format: "es",
        dir: "./dist/es",
        entryFileNames: "[name].js",
        preserveModules: true,
      },
      {
        format: "cjs",
        dir: "./dist/lib",
        entryFileNames: "[name].js",
        preserveModules: true,
      },
    ],
  },
  {
    // 🔑 生成 d.ts
    plugins: [aliasPlugin, dts()],
    input: "src/index.ts",
    external: ["vue"],
    output: [
      // { file: `./dist/full.d.mts` },
      {
        format: "es",
        dir: "./dist/es",
        preserveModules: true,
        entryFileNames: "[name].d.ts",
      },
      {
        format: "es",
        dir: "./dist/lib",
        preserveModules: true,
        entryFileNames: "[name].d.ts",
      },
    ],
  },
]);
