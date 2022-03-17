import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import components from "unplugin-vue-components/vite";
import { minifyHtml, injectHtml } from "vite-plugin-html";
import pluginRewriteAll from "vite-plugin-rewrite-all";
import process from "process";
import autoImport from "unplugin-auto-import/vite";

export default defineConfig(({ mode }) => {
  //this is totally broken afaik - Jared
  Object.assign(process.env, loadEnv(mode, process.cwd()));
  const isSandbox = true;

  return {
    plugins: [
      vue(),
      components({
        dts: "src/components.d.ts",
      }),
      pluginRewriteAll(),
      autoImport({
        dts: "src/auto-imports.d.ts",
        include: [/\.vue$/, /\.vue\?vue/],
        imports: ["vue"],
      }),
      minifyHtml(),
    ],
    server: {
      watch: {
        ignored: ["src/components.d.ts", "src/auto-imports.d.ts"],
      },
    },
  };
});
