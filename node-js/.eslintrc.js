module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["standard", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "array-callback-return": "off",
    "no-unused-vars": ["warn", { argsIgnorePattern: "req|res|next|val|err" }],
    "prefer-destructuring": ["error", { object: true, array: false }],
    "no-cond-assign": ["error", "always"],
    "no-use-before-define": "error",
    "no-param-reassign": "warn",
  },
};
