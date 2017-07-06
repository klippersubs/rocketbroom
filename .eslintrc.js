/*
 eslint
 no-magic-numbers: off,
 import/no-commonjs: off,
 import/unambiguous: off,
 fp/no-mutation: off,
 */

const [ERROR, OFF] = ['error', 'off'];

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        codeFrame: true,
        ecmaFeature: {
            impliedStrict: true,
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        worker: true,
        serviceworker: true,
        webextensions: true,
    },
    globals: {
        _: true,
        VERSION: true,
        BUILD_RANDOM: true,
    },
    extends: [
        'eslint:recommended',
        'google',
        'plugin:flowtype/recommended',
        'plugin:react/recommended',
        'prettier',
        'prettier/flowtype',
        'prettier/react',
        'plugin:import/errors',
        'plugin:promise/recommended',
    ],
    plugins: [
        'flowtype',
        'react',
        'prettier',
        'babel',
        'import',
        'eslint-comments',
        'promise',
        'filenames',
        'fp',
        'security',
        'unicorn',
        'flowtype-errors',
    ],
    rules: {
        'no-cond-assign': ERROR,
        'no-console': OFF,
        'no-irregular-whitespace': OFF,
        'no-unsafe-negation': ERROR,
        'valid-jsdoc': [
            ERROR,
            {
                requireParamDescription: false,
                requireReturnDescription: false,
                requireReturn: false,
                prefer: {
                    returns: 'return',
                },
            },
        ],
        'class-methods-use-this': ERROR,
        complexity: ERROR,
        'dot-notation': [
            ERROR,
            {
                allowKeywords: true,
            },
        ],
        eqeqeq: ERROR,
        'no-alert': ERROR,
        'no-eq-null': ERROR,
        'no-eval': ERROR,
        'no-floating-decimal': ERROR,
        'no-implicit-coercion': ERROR,
        'no-implicit-globals': ERROR,
        'no-implied-eval': ERROR,
        'no-magic-numbers': [
            ERROR,
            {
                ignore: [0, 1],
                enforceConst: true,
                detectObjects: true,
            },
        ],
        'no-new-func': ERROR,
        'no-script-url': ERROR,
        'no-self-compare': ERROR,
        'no-sequences': OFF,
        'no-unmodified-loop-condition': ERROR,
        'no-unused-expressions': OFF,
        'no-useless-call': ERROR,
        'no-useless-concat': ERROR,
        yoda: ERROR,

        'no-catch-shadow': ERROR,
        'no-shadow-restricted-names': ERROR,
        // 'no-shadow': ERROR,
        'no-unused-vars': [
            ERROR,
            {
                args: 'none',
            },
        ],
        'no-use-before-define': ERROR,

        camelcase: ERROR,
        'linebreak-style': ERROR,
        'lines-around-comment': [
            ERROR,
            {
                beforeBlockComment: true,
                afterBlockComment: false,
                beforeLineComment: false,
                afterLineComment: false,
                allowBlockStart: true,
                allowBlockEnd: false,
                allowObjectStart: true,
                allowObjectEnd: false,
                allowArrayStart: true,
                allowArrayEnd: false,
            },
        ],
        'max-depth': [ERROR, 4],
        'max-lines': [
            ERROR,
            {
                max: 300,
                skipBlankLines: true,
                skipComments: true,
            },
        ],
        'max-nested-callbacks': [ERROR, 3],
        'max-params': [ERROR, 5],
        'max-statements-per-line': ERROR,
        'max-statements': [ERROR, 10],
        'newline-after-var': ERROR,
        'newline-before-return': ERROR,
        'no-continue': ERROR,
        'no-nested-ternary': ERROR,
        'no-plusplus': ERROR, // All hail Immutability!
        'no-unneeded-ternary': [
            ERROR,
            {
                defaultAssignment: false,
            },
        ],
        'operator-assignment': [ERROR, 'never'], // All hail Immutability!

        'no-useless-computed-key': ERROR,
        'no-useless-constructor': ERROR,
        'no-useless-rename': ERROR,
        'object-shorthand': ERROR,
        'prefer-arrow-callback': ERROR,
        'prefer-const': ERROR,
        'prefer-destructuring': [
            ERROR,
            {
                array: true,
                object: true,
            },
            {
                enforceForRenamedProperties: true,
            },
        ],
        'prefer-numeric-literals': ERROR,
        'prefer-template': ERROR,
        'symbol-description': ERROR,

        'react/no-did-mount-set-state': ERROR,
        'react/no-did-update-set-state': ERROR,
        'react/no-unknown-property': ERROR,
        'react/prefer-stateless-function': ERROR,
        'react/react-in-jsx-scope': OFF,
        'react/self-closing-comp': ERROR,
        'react/style-prop-object': ERROR,
        'react/void-dom-elements-no-children': ERROR,

        'react/jsx-boolean-value': ERROR,
        'react/jsx-handler-names': ERROR,
        'react/jsx-no-literals': OFF, // TODO: Change to `ERROR` when i18n library will be written.

        'flowtype/no-types-missing-file-annotation': OFF,

        // TODO: Configure `import/no-restricted-paths` rule for projects, which contains both client and server code.
        'import/no-absolute-path': ERROR,
        'import/no-dynamic-require': ERROR,
        'import/no-named-as-default-member': ERROR,
        'import/no-extraneous-dependencies': [
            ERROR,
            {
                devDependencies: false,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        'import/no-mutable-exports': ERROR,
        'import/unambiguous': ERROR,
        'import/no-commonjs': ERROR,
        'import/no-amd': ERROR,
        'import/first': ERROR,
        'import/no-duplicates': ERROR,
        // 'import/no-namespace': ERROR,
        'import/order': [
            ERROR,
            {
                'newlines-between': 'always-and-inside-groups',
            },
        ],
        'import/newline-after-import': ERROR,
        'import/prefer-default-export': ERROR,
        'import/max-dependencies': ERROR,
        'import/no-unassigned-import': ERROR,
        'import/no-named-default': ERROR,
        'import/no-deprecated': ERROR,

        'no-param-reassign': ERROR,
        'fp/no-let': ERROR,
        'fp/no-this': ERROR,
        'fp/no-mutation': ERROR,
        'fp/no-arguments': ERROR,
        'fp/no-delete': ERROR,
        'fp/no-mutating-assign': ERROR,
        'fp/no-mutating-methods': ERROR,
        'fp/no-throw': ERROR,

        'security/detect-unsafe-regex': ERROR, // TODO: Write plugin for detecting unsafe xre regexps.
        'security/detect-buffer-noassert': ERROR,
        'security/detect-child-process': ERROR,
        'security/detect-no-csrf-before-method-override': ERROR, // TODO: Anything like this for Koa2?
        'security/detect-non-literal-fs-filename': ERROR,
        'security/detect-non-literal-regexp': ERROR, // TODO: Implement the same rule for xre.
        'security/detect-object-injection': ERROR,
        'security/detect-pseudoRandomBytes': ERROR,

        'eslint-comments/no-duplicate-disable': ERROR,
        'eslint-comments/no-unlimited-disable': ERROR,
        'eslint-comments/no-unused-disable': ERROR,
        'eslint-comments/no-unused-enable': ERROR,

        // 'optimize-regex/optimize-regex': ERROR, // TODO: Write plugin for optimizing xre regexps.

        'promise/no-nesting': ERROR,
        'promise/no-promise-in-callback': ERROR,
        'promise/no-callback-in-promise': ERROR,
        'promise/avoid-new': OFF,
        'promise/prefer-await-to-then': ERROR,
        'promise/prefer-await-to-callbacks': ERROR,

        'filenames/match-exported': [ERROR, ['kebab', 'camel', 'pascal']],
        'filenames/match-regex': [ERROR, '^[A-Za-z\\-.]+$', true],

        'unicorn/no-process-exit': ERROR,
        'unicorn/number-literal-case': ERROR,
        'unicorn/escape-case': ERROR,
        'unicorn/no-array-instanceof': ERROR,
        'unicorn/no-new-buffer': ERROR,
        'unicorn/no-hex-escape': ERROR,
        'unicorn/prefer-starts-ends-with': ERROR,
        'unicorn/prefer-type-error': ERROR,
        'unicorn/custom-error-definition': ERROR,

        'flowtype-errors/show-errors': ERROR,

        'new-cap': OFF,
        'babel/new-cap': ERROR,
        'no-invalid-this': OFF,
        'babel/no-invalid-this': OFF,
        semi: OFF,
        'babel/semi': ERROR,

        'prettier/prettier': [
            ERROR,
            {
                useTabs: false,
                printWidth: 140,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: true,
                jsxBracketSameLine: false,
                semi: true,
            },
        ],

        'require-jsdoc': OFF,
        'no-unused-labels': OFF,
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: 'webpack.config.js',
                'config-index': 0,
            },
        },
        'import/extensions': ['.js', '.jsx', '.json'],
        'import/core-modules': ['api', 'components', 'const', 'containers', 'types', 'version'],
    },
};
