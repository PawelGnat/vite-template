# Vite Artneo Frontend Template

Sourcemap is commented out as a default inside `vite.config.js` file. If you want to generate maps just set is as true. As a further improvement `@vitejs/plugin-legacy` and `terser` might be removed if found unnecessary.

## Installation

```
npm install
```

## Development mode

```
npm run dev
```

## Production mode

```
npm run build
```

_Move your fonts icons img folder to the assets folder after building your project._

## DevDependencies

- [vite](https://vitejs.dev/) ^5.0.8 - frontend build tooling
- [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) ^5.2.0 - support for legacy browsers that don't include those features when building for production
- [terser](https://www.npmjs.com/package/@vitejs/plugin-legacy) ^5.29.2 - plugin-legacy uses Terser for minification
- [vite-plugin-purgecss](https://www.npmjs.com/package/vite-plugin-purgecss) ^0.2.12 - plugin automatically removes unused CSS
- [eslint](https://eslint.org/) ^8.56.0 - static code analysis tool for JavaScript
- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) ^15.0.0 - a set of ESLint rules defined by the Airbnb community
- [eslint-import-resolver-alias](https://www.npmjs.com/package/eslint-import-resolver-alias) ^1.1.2 - plugin for module alias/mapping and custom file extensions
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) ^2.29.1 - support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names
- [sass](https://sass-lang.com/) ^1.69.5 - CSS preprocessor
- [prettier](https://prettier.io/) 3.1.1 - code formatter (strict version)
- [prettier-plugin-ejs](https://github.com/ecmel/prettier-plugin-ejs) ^0.0.19 - plugin to format EJS markup in html files

## Dependencies

- [ejs](https://ejs.co/) ^3.1.9 - generates HTML markup with JavaScript
- [uikit](https://getuikit.com/) ^3.17.11 - UI library
- [vite-plugin-ejs](https://www.npmjs.com/package/vite-plugin-ejs) ^1.7.0 - EJS plugin for Vite

### Path aliases

Follow the convention below with your SCSS files. Unfortunately, EJS doesn't work with path aliases.

```
"@": path.resolve(__dirname, "./src"),
"@assets": path.resolve(__dirname, "./src/assets"),
"@js": path.resolve(__dirname, "./src/js"),
"@scss": path.resolve(__dirname, "./src/scss"),
"@layout": path.resolve(__dirname, "./src/layout"),
"@components": path.resolve(__dirname, "./src/components"),
```

### ESLint rules

```
"no-console": "error",
"no-irregular-whitespace": "error",
"no-empty": ["error", { allowEmptyCatch: true }],
"no-empty-function": "error",
"no-eval": "error",
"no-var": "error",
```

Breaking the above rules will result in an error inside terminal window and an incomplete build of the project. Empty catch blocks are allowed. If your project requires other rules, you can change them in the `.eslintrc.cjs` file.

### Polyfills

Declaration in `vite.config.js` targets `defaults` value, meaning `> 0.5%, last 2 versions, Firefox ESR, not dead`.

### Typography

Feel free to remove all files from `public/fonts` directory and replace them with needed ones. Remember to adjust your font declarations in `_global`, `_typography` and `_variables` scss files.

### Scripts

To run eslint write

```
npm run lint
```

To run prettier write

```
npm run format
```
