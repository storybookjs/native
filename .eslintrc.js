module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module",
        project: ["./packages/*/tsconfig.json"]
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "airbnb-typescript",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "linebreak-style": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/indent": "off",
        "import/prefer-default-export": "off",
        "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-indent": "off",
        "@typescript-eslint/ban-ts-comment": "warn",
        "react/jsx-indent-props": "off",
        "@typescript-eslint/comma-dangle": ["error", "never"],
        "operator-linebreak": "off",
        "object-curly-newline": "off"
    }
};
