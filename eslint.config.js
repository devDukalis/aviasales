import { fileURLToPath } from "url"
import { dirname } from "path"

import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint, { configs as tseslintConfigs } from "typescript-eslint"
import reactPlugin from "eslint-plugin-react"
import importPlugin from "eslint-plugin-import"
import jsxA11y from "eslint-plugin-jsx-a11y"
import eslintPluginPrettier from "eslint-plugin-prettier/recommended"

const project = "./tsconfig.json"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default tseslint.config(
  { ignores: ["dist", "node_modules", "build"] },
  {
    extends: [
      js.configs.recommended,
      tseslintConfigs.recommended,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat["jsx-runtime"],
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      jsxA11y.flatConfigs.recommended,
      eslintPluginPrettier,
    ],
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
        tsconfigRootDir: __dirname,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project,
        },
        alias: {
          map: [["@", "./src"]],
          extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"],
        },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react/prop-types": "off",
      indent: ["off"],
      "linebreak-style": [0, "unix"],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      semi: ["error", "never"],
      "import/no-unresolved": [2, { caseSensitive: false }],
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
      "import/order": [
        2,
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
    },
  },
)
