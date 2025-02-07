# TS - Boilerplate

> [!WARNING]
> This boilerplate is currently outdated. The major tooling is mostly still relevant but the dependencies are several major versions behind, and the configurations have vastly changed since then. Contributions welcome to bring this up to speed, namely:
> - Bumping all versions
> - Updating ESLint to use the new flat-file config and type-aware linting
> - Removing the import-sort tool in favour of 'eslint-plugin-import-x'
> - Swapping Jest for Vitest
> - Converting the TS config and package.json to be ESM-first

Demonstration of valid base configurations for:

-   TypeScript

    Typescript language support
    -   config file: `tsconfig.json`
    -   dependencies: typescript
    -   optional dependencies: @types/node, ts-node

-   Jest

    Testing framework with typings
    -   config file: `jest.config.js`
    -   dependencies: jest, ts-jest, @types/jest

-   ESLint

    Linting tool with TS support
    -   config file: `.eslintrc.js`
    -   dependencies: eslint, @typescript-eslint/parser, @typescript-eslint/eslint-plugin

-   Prettier

    Formatting/linting with TS support
    -   config file: `.prettierrc.js`
    -   dependencies: prettier, eslint-config-prettier, eslint-plugin-prettier

-   Editor Config

    Base formatting standards, detected by IDE, linters, formatters
    -   config file: `.editorconfig`

- Import Sorting

    Adds import sort formatting to linter + formatter
    -   config file: `package.json` ("importSort")
    -   dependencies: import-sort, import-sort-cli, import-sort-parser-typescript, import-sort-style-module-scoped, prettier-plugin-import-sort

-   VSC Settings

    Helper configuration for Visual Studio Code, to integrate auto-formatting, lint preferences
    -   config file: `.vscode/settings.json`
    -   note:
        -   eslint is configured to automatically format on save
        -   vsc default format on save is disabled to prevent duplicate format operations on save

## Usage

```
    $ yarn start
    $ yarn build
    $ yarn lint
    $ yarn test
```

## IDE Configuration

This project is optimised for development using Visual Studio Code, containing launch configurations and debugging utilities, defined in the .vscode directory.

For best results, please ensure the following configuration steps are taken on your development machine:

- Add VSC Extensions: DotENV, EditorConfig, ESLint

- Remove the following global dependencies:

  `$ yarn global remove eslint typescript`

  `$ npm -g uninstall eslint typescript`
