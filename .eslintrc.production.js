/*
 eslint
 no-magic-numbers: off,
 import/no-commonjs: off,
 import/unambiguous: off,
 fp/no-mutation: off
 */

const [ERROR] = ['error'];

module.exports = {
    plugins: ['compat'],
    rules: {
        'compat/compat': ERROR,
    },
};
