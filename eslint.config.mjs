import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default tseslint.config(
  {
    ignores: [
      'routeTree.gen.ts',
      '.output',
      '.tanstack',
      'node_modules',
      'dist',
      'build',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React + Hooks
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Off: conflicts with TanStack file-based routing (Route + component in same file)
      'react-refresh/only-export-components': 'off',
    },
  },

  // Project-specific rules
  {
    rules: {
      // Padding before return
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'return' },
      ],

      // Prettier handles these
      semi: 'off',

      // Unused vars: error only when not prefixed with _
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // Enforce type-only imports (cleaner output, avoids import side-effects)
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],

      // Sort named imports alphabetically
      'sort-imports': [
        'error',
        { ignoreDeclarationSort: true, ignoreCase: true },
      ],

      // Disallow console.log in production code
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
)
