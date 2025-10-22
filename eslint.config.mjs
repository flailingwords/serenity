/* eslint-disable import/no-unresolved -- ESM... */
import cjs from '@tyisi/config-eslint/cjs'
import mjs from '@tyisi/config-eslint/mjs'
import ts from '@tyisi/config-eslint/ts'
import tsx from '@tyisi/config-eslint/tsx'
import { globalIgnores } from 'eslint/config'
import jest from 'eslint-plugin-jest'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'

// cjs[0]['settings'] = {
//     'import/resolver': {
//         node: {
//             extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx']
//         }
//     }
// }

mjs[0]['settings'] = {
    'import/resolver': {
        node: {
            extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx']
        }
    }
}

mjs[0].languageOptions ??= {}
mjs[0].languageOptions.ecmaVersion = 'latest'
mjs[0].languageOptions.sourceType = 'module'

tsx[0]['settings'] = {
    'import/resolver': {
        node: {
            extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx']
        }
    }
}

tsx[0].files.push('**/.storybook/**/**.ts')
tsx[0].files.push('**/.storybook/**/**.tsx')
tsx[0].rules['import/order'] = [
    'error',
    {
        'alphabetize': {
            caseInsensitive: true,
            order: 'asc'
        },

        'groups': ['builtin', 'type', 'external', 'internal', 'parent', 'sibling', 'object'],
        'newlines-between': 'always',

        'pathGroups': [
            {
                group: 'builtin',
                pattern: 'react',
                position: 'before'
            },
            {
                group: 'internal',
                pattern: '@/**',
                position: 'before'
            },
            {
                group: 'object',
                pattern: '**/**.(class|types)',
                position: 'after'
            },
            {
                group: 'internal',
                pattern: '**/**.s?css',
                position: 'before'
            },
            {
                group: 'parent',
                pattern: '../**/**.s?css',
                position: 'after'
            },
            {
                group: 'sibling',
                pattern: './**/**.s?css',
                position: 'after'
            },
            {
                group: 'parent',
                pattern: '../**/**.(class|types)',
                position: 'after'
            },
            {
                group: 'sibling',
                pattern: './**/**.(class|types)',
                position: 'after'
            }
        ],

        'pathGroupsExcludedImportTypes': ['react']
    }
]

tsx[0].rules['@typescript-eslint/no-unused-vars'] = [
    'error',
    {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_'
    }
]

tsx[0].rules['@typescript-eslint/no-magic-numbers'] = 'off'
tsx[0].rules['@typescript-eslint/class-methods-use-this'] = 'off'

tsx[0].rules['@typescript-eslint/naming-convention'] = [
    'error',
    {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble'
    },
    {
        selector: 'import',
        format: ['camelCase', 'PascalCase']
    },
    {
        selector: 'variableLike',
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
    },
    {
        selector: 'variable',
        modifiers: ['const'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
    },
    {
        selector: 'variable',
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
    },
    {
        selector: 'typeLike',
        format: ['PascalCase']
    },
    {
        selector: 'variable',
        format: ['strictCamelCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        modifiers: ['destructured']
    },
    {
        selector: 'objectLiteralProperty',
        format: null,
        modifiers: ['requiresQuotes']
    },
    {
        selector: 'objectLiteralProperty',
        format: ['snake_case', 'camelCase', 'PascalCase', 'UPPER_CASE']
    },
    {
        selector: 'typeProperty',
        format: ['snake_case', 'camelCase', 'PascalCase', 'UPPER_CASE']
    }
]

tsx[0].settings.react ??= {}
tsx[0].settings.react = { version: '19.2.0' }

const ignores = [globalIgnores(['**/dist/**', 'tmp/'])]
const storybookConfig = storybook.configs['flat/recommended']
const jestConfig = [
    {
        files: ['test/**', 'src/**/**.test.ts', 'src/**/**.test.tsx'],
        ...jest.configs['flat/recommended'],
        rules: {
            ...jest.configs['flat/recommended'].rules,
            'jest/prefer-expect-assertions': 'off'
        },
        languageOptions: {
            globals: {
                ...globals.jest
            }
        }
    }
]
const globalsConfig = [
    {
        languageOptions: {
            globals: {
                ...globals.builtin,
                ...globals.browser,
                ...globals.node,
                NodeJS: false
            }
        }
    }
]
const miscConfig = [
    {
        rules: {
            'no-undef': 'off',
            'import/no-nodejs-modules': 'off'
        }
    }
]

const combined = [...ignores, ...cjs, ...mjs, ...ts, ...tsx, ...storybookConfig, ...jestConfig, ...globalsConfig, ...miscConfig]

export { combined, ignores, cjs, mjs, ts, tsx, storybookConfig, jestConfig, globalsConfig, miscConfig }

export default combined
