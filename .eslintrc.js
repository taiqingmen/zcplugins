// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        'indent': 'off',
        'eol-last': 'off',
        // allow async-await
        'generator-star-spacing': 'off',
        'no-trailing-spaces': 'off',
        'semi': 'off',
        'space-before-function-paren': 'off',
        'spaced-comment': 'off',
        'comma-dangle': 'off',
        'quotes': 'off',
        'space-unary-ops': 'off',
        'padded-blocks': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}