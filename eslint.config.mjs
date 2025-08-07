import eslintPluginPrettier from 'eslint-plugin-prettier';

export default tseslint.config({
  ignores: ['eslint.config.mjs'],
  ...tseslint.configs.recommendedTypeChecked,
  plugins: {
    prettier: eslintPluginPrettier,
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
  },
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.jest,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});