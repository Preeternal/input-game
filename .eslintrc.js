module.exports = {
    env: {
        browser: true,
        es2021: true,
        worker: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.jsx',
                    '.json',
                    '.d.ts',
                    '.ts',
                    '.tsx',
                    '.scss',
                    '.sass',
                ],
            },
        },
    },
    rules: {
        'import/order': [
            'error',
            {
                groups: [
                    'external',
                    'internal',
                    'index',
                    'sibling',
                    'parent',
                    'builtin',
                ],
            },
        ],
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.jsx', '.tsx', '.js', '.ts'] },
        ],
        'import/extensions': [1, 'never', { svg: 'always' }],
        'no-use-before-define': 0,
        'import/prefer-default-export': 0,
        'react/require-default-props': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-curly-newline': 0,
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 0,
        camelcase: 0,
        'no-case-declarations': 0,
        'no-return-assign': 0,
        '@typescript-eslint/no-explicit-any': 'off',
        'no-prototype-builtins': 0,
        'no-console': 0,
        'no-alert': 0,
        'no-nested-ternary': 0,
        'import/no-cycle': 0,
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'jsx-a11y/label-has-for': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'no-return-await': 0,
        'import/no-anonymous-default-export': 0,
    },
};
