import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,vue}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  ...pluginVue.configs["flat/essential"],
  {
    files: ["frontend/src/components/doc/Doc.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
]);
