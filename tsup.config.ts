import { defineConfig } from "tsup";

export default defineConfig([
  // 🔥 CORE BUILD
  {
    entry: ["packages/core/src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    outDir: "packages/core/dist",
    sourcemap: true,
    clean: true,
    splitting: false,
  },

  // ⚛️ REACT BUILD
  {
    entry: ["packages/react/src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    outDir: "packages/react/dist",
    sourcemap: true,
    clean: true,
    splitting: false,
    external: ["react", "react-dom"], // 🔥 IMPORTANT
  },
]);
