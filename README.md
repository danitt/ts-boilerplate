# TS - Boilerplate

Demonstration of valid base configurations for:

-   TypeScript

    Typescript language support
    -   config file: `tsconfig.json`
    -   dependencies: typescript
    -   optional dependencies: @types/node, tsx

-   Vitest

    Testing framework
    -   config file: `vitest.config.js`
    -   dependencies: vitest, @vitest/coverage-v8

-   ESLint

    Linting tool with TS support
    -   config file: `eslint.config.mjs`
    -   dependencies: @eslint/js, @types/eslint__js, eslint, eslint-import-resolver-typescript, eslint-plugin-import-x, eslint-plugin-unused-imports

-   Prettier

    Formatting/linting with TS support
    -   config file: `prettier.config.mjs`
    -   dependencies: prettier, eslint-config-prettier, eslint-plugin-prettier

-   Editor Config

    Base formatting standards, detected by IDE, linters, formatters
    -   config file: `.editorconfig`

-   VSC Settings

    Helper configuration for Visual Studio Code, to integrate auto-formatting, lint preferences
    -   config file: `.vscode/settings.json`
    -   note:
        -   eslint is configured to automatically format on save
        -   vsc default format on save is disabled to prevent duplicate format operations on save

## Usage

```
    $ npm start
    $ npm run build
    $ npm run lint
    $ npm run test
```

## IDE Configuration

This project is optimised for development using Visual Studio Code, containing launch configurations and debugging utilities, defined in the .vscode directory.

For best results, please ensure the following configuration steps are taken on your development machine:

- Add VSC Extensions: DotENV, EditorConfig, ESLint

- Remove the following global dependencies:

  `$ yarn global remove eslint prettier`

  `$ npm -g uninstall eslint prettier`
