module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "linebreak-style": 0,
    "array-bracket-spacing": [2, "always"],
    "import/no-default-export": 2,
    "import/prefer-default-export": 0,
    "max-len": [2, { code: 180, ignoreStrings: true }],
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js"]
      }
    ]
  }
};
