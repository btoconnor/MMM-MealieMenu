const globals = require("globals");
const {configs: eslintConfigs} = require("@eslint/js");
const eslintPluginImport = require("eslint-plugin-import");
const eslintPluginStylistic = require("@stylistic/eslint-plugin");

const config = [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      ...eslintPluginStylistic.configs["all-flat"].plugins,
      import: eslintPluginImport
    },
    rules: {
      ...eslintConfigs.all.rules,
      ...eslintPluginImport.configs.recommended.rules,
      ...eslintPluginStylistic.configs["all-flat"].rules,
      "capitalized-comments": "off",
      "consistent-this": "off",
      "default-case": "off",
      "func-style": "off",
      "init-declarations": "off",
      "line-comment-position": "off",
      "max-lines-per-function": ["error", 120],
      "max-lines": "off",
      "max-params": "off",
      "max-statements": ["error", 40],
      "multiline-comment-style": "off",
      "no-await-in-loop": "off",
      "no-inline-comments": "off",
      "no-magic-numbers": "off",
      "no-ternary": "off",
      "no-undef": "warn",
      "one-var": "off",
      "sort-keys": "off",
      strict: "off",
      "@stylistic/array-element-newline": ["error", "consistent"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/lines-around-comment": "off",
      "@stylistic/no-multi-spaces": "off",
      "@stylistic/object-property-newline": "off",
      "@stylistic/quote-props": ["error", "as-needed"],
      "@stylistic/padded-blocks": ["error", "never"]
    }
  }
];

/*
 * Set debug to true for testing purposes.
 * Since some plugins have not yet been optimized for the flat config,
 * we will be able to optimize this file in the future. It can be helpful
 * to write the ESLint config to a file and compare it after changes.
 */
const debug = false;

if (debug === true) {
  const FileSystem = require("node:fs");
  FileSystem.writeFile("eslint-config-DEBUG.json", JSON.stringify(config, null, 2), (error) => {
    if (error) {
      throw error;
    }
  });
}

module.exports = config;
