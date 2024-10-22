import eslint from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import solidPlugin from 'eslint-plugin-solid'
import globals from 'globals'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['dist/**', '**/node_modules/**', '*.config.{js,ts}'],
  },
  // Non-TypeScript files config
  {
    files: ['**/*.{js,jsx}'],
    ...eslint.configs.recommended,
  },
  // TypeScript files config
  {
    files: ['src/**/*.{ts,tsx}'], // Only TypeScript files in src
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.es2024,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      solid: solidPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...solidPlugin.configs.typescript.rules,
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
]
