module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        'space-infix-ops': "error",
        "object-curly-spacing": ["error", "always"],
        'curly': ["error", "multi", "consistent"],
        "quote-props": ["error", "as-needed"],
        "no-multiple-empty-lines": ["error", {
            "max": 1,
            "maxBOF": 1
        }],
        "brace-style": ["error", "stroustrup"],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};