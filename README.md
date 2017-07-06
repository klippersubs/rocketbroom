# RocketBroom

## Dependencies explanation

### Development dependencies

#### Core

 *  `webpack` — build system.
 *  `weboack-dev-server` — development build system.
 *  `eslint` — static analysis.
 *  `flow-bin` — static type checking.
 *  `jest` — unit testing framework.

#### webpack plugins

 *  `@aliceklipper/build-number-plugin` — injects build number into build.
 *  `babili-webpack-plugin` — minifies JS.
 *  `compression-webpack-plugin` — compresses some assets using gzip.
 *  `html-webpack-plugin` — generates static HTML assets.
 *  `webpack-notifier` — shows desktop notifications after each build.

#### webpack loaders

 *  `babel-loader` — JS/JSX sources loader.
 *  `cache-loader` — speeds up expensive builds by caching intermediate results.
 *  `eslint-loader` — lints JS/JSX files on each build.
 *  `file-loader` — loads files.
 *  `json-loader` — loads JSON data.
 *  `pug-loader` — loads Pug sources, needed for generating static HTML assets with `html-webpack-plugin`.
 *  `url-loader` — loads files as data URI if possible.

#### Babel presets

 *  `babel-preset-env` — Autoprefixer for JS.
 *  `babel-preset-stage-0` — bleeding edge, fuck yeah.
 *  `babel-preset-react` — React support, also includes Flow.
 *  `babel-preset-react-optimize` — optimize React, obviously.

#### Babel plugins

 *  `babel-plugin-flow-runtime` — runtime type checking.
 *  `babel-plugin-groundskeeper-willie` — eliminates debug code from production builds.
 *  `babel-plugin-react-require` — automatically require React in files with JSX.
 *  `babel-plugin-styled-components` — helper plugin for styled components.
 *  `babel-plugin-ramda` — cherry-pick Ramda functions.
 *  `babel-plugin-partial-application` — syntax sugar for partial application and lambdas.

#### Other Babel-related modules

 *  `babel-eslint` — Babel's parser for ESLint.
 *  `babel-jest` — Babel's parser for Jest.

#### ESLint configs

 *  `eslint-config-google` — Google's config.
 *  `eslint-config-prettier` — Prettier's config.

#### ESLint plugins

 *  `eslint-plugin-babel` — Babel overrides for some ESLint rules.
 *  `eslint-plugin-compat` — checks the production build for compatibility with required environments.
 *  `eslint-plugin-eslint-comments` — ESLint comments best practices.
 *  `eslint-plugin-filenames` — checks the consistency of file names.
 *  `eslint-plugin-flowtype` — Flow best practices.
 *  `eslint-plugin-flowtype-errors` — shows Flow errors as ESLint errors.
 *  `eslint-plugin-fp` — FP best practices.
 *  `eslint-plugin-import` — consistent import statements.
 *  `eslint-plugin-prettier` — Prettier.
 *  `eslint-plugin-promise` — promises best practices.
 *  `eslint-plugin-react` — React best practices.
 *  `eslint-plugin-security` — detects possible security issues.
 *  `eslint-plugin-unicorn` — various checks.

#### Other

 *  `pug` — required by `pug-loader` for `html-webpack-plugin`.
 *  `prettier` — code formatter, required by `eslint-plugin-prettier` and `eslint-config-prettier`.
 *  `flow-typed` — CLI tool for installing Flow libdefs.

### Runtime dependencies

#### General

 *  `babel-polyfill` — polyfills.
 *  `@klippersubs/hsluv` — HSLuv wrapper.
 *  `flow-runtime` — Flow runtime.
 *  `moment` — datetime parser, serializer and other utilities.
 *  `qs` — query string parser and serializer.
 *  `xre` — XRegExp template literal tag and wrapper.
 *  `ramda` — functional utilities.

#### React

 *  `react` — React.
 *  `react-dom` — virtual DOM.
 *  `prop-types` — `PropTypes`.
 *  `recompose` — HOC utilities for React.
 *  `styled-components` — CSS-in-JS.
 *  `react-router` — routing.
 *  `react-redux` — Redux bindings for React.
 *  `react-router-redux` — Redux bindings for React Router.

#### Redux

 *  `redux` — state management.
 *  `reselect` — Redux selectors.
 *  `redux-act` — action creators.
 *  `redux-thunk` — thunk middleware for Redux.

## TODO

 *  Add `fast-async`.
 *  Add `babel-plugin-transform-runtime`.
