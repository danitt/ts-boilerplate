# TS - Boilerplate

Demonstration of valid base configurations for:

-   TypeScript

    -   config file: `tsconfig.json`
    -   dependencies: typescript
    -   optional dependencies: @types/node, ts-node

-   Jest

    -   config file: `jest.config.js`
    -   dependencies: jest, ts-jest, @types/jest

-   ESLint

    -   config file: `.eslintrc.js`
    -   dependencies: eslint, @typescript-eslint/parser, @typescript-eslint/eslint-plugin

-   Prettier

    -   config file: `.prettierrc.js`
    -   dependencies: prettier, eslint-config-prettier, eslint-plugin-prettier

-   Editor Config

    -   config file: `.editorconfig`

-   VSC Settings
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
