module.exports = {
  extends: "./.eslintrc.js",
  rules: {
    "no-console": ["error", { allow: ["debug", "warn", "error"] }],
    "no-debugger": "error",
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_$",
        argsIgnorePattern: "^_$",
        ignoreRestSiblings: true,
      },
    ],
  },
};
