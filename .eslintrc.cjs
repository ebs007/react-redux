module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    // "eslint-config-prettier",
    // "prettier",
    // "prettier/react",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: 15,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    // parser: "babel-eslint",
  },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "html"],
  rules: {
    // "prettier/prettier": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
