import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["packages/core/src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    outDir: "packages/core/dist",
    sourcemap: true,
    clean: true,
    splitting: false,
    minify: true,
  },

  {
    entry: ["packages/react/src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    outDir: "packages/react/dist",
    sourcemap: true,
    clean: true,
    splitting: false,
    minify: true,
    external: ["react", "react-dom"],
    banner: {
      js: '"use client";',
    },
  },
]);
