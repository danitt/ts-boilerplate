module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    // Recommended ts/es-lint rules
    'plugin:@typescript-eslint/recommended',
    // Disable ESLint rules conflicting with Prettier
    'prettier/@typescript-eslint',
    // Displays Prettier  errors as ESLint errors - must be last plugin in 'extends' array
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
}
