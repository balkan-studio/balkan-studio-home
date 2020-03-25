import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import builtins from "rollup-plugin-node-builtins";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import config from "sapper/config/rollup.js";
import pkg from "./package.json";
import sveltePreprocess from "svelte-preprocess";
const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);
const dedupe = importee =>
  importee === "svelte" ||
  importee.startsWith("svelte/") ||
  importee.startsWith("$");

const path = require("path");
const projectRootDir = path.resolve(__dirname);

const aliases = {
  entries: [
    {
      find: "$stores",
      replacement: path.resolve(projectRootDir, "src/stores")
    },
    {
      find: "$shared",
      replacement: path.resolve(projectRootDir, "src/routes/_shared")
    },
    {
      find: "$components",
      replacement: path.resolve(projectRootDir, "src/components")
    }
  ]
};

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ["src", "node_modules"]
  },
  postcss: {
    plugins: [
      require("autoprefixer")({
        Browserlist: "last 2 versions"
      })
    ]
  }
});

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      alias(aliases),
      builtins(),
      json(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess
      }),
      resolve({
        browser: true,
        dedupe
      }),
      commonjs(),
      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          runtimeHelpers: true,
          exclude: ["node_modules/@babel/**"],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, not dead"
              }
            ]
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            [
              "@babel/plugin-transform-runtime",
              {
                useESModules: true
              }
            ]
          ]
        }),

      !dev &&
        terser({
          module: true
        })
    ],

    onwarn
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      alias(aliases),
      builtins(),
      json(),
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      svelte({
        generate: "ssr",
        dev,
        preprocess
      }),
      resolve({
        dedupe
      }),
      commonjs()
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives"))
    ),
    onwarn
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      alias(aliases),
      builtins(),
      json(),
      resolve(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      commonjs(),
      !dev && terser()
    ],

    onwarn
  }
};
