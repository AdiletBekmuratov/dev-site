import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import("eslint").Linter.Config} */
export default [
  ...eslintPluginAstro.configs.recommended,
  eslintPluginJsxA11y.flatConfigs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "prettier/prettier": "off",
    },
  }
];
