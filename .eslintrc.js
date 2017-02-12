module.exports = {
    "parserOptions": {
        "ecmaVersion": 6
    },
    "env": {
        "browser": false
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-unused-vars": "warn",
        "no-undef": "warn",
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "warn",
            "always"
        ]
    }
};