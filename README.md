# generator-typescript-webpack-basic [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> generator-typescript-webpack-basic
## Description
This is a basic generator for simple TypeScript projects. ```Warning: current version is not acceptable for widespread use.```

## Installation

First, install [Yeoman](http://yeoman.io) and generator-typescript-webpack-basic using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-typescript-webpack-basic
```

Then generate your new project:

```bash
yo generator-typescript-webpack-basic
```

## Commands

This configuration exposes two command line operations.

While you are developing, open a console and run: 
```bash
npm run start
```
This launches the webpack dev server which watches your TypeScript files 
and refreshes the webpage when you make changes.

When you would like to produce the static files for serving, open a console and run: 
```bash
npm run build
```
This bundles the code and places it in the ```dist``` folder. 

## License

MIT © [Andrew Ribeiro](https://andrewnetwork.github.io/)

[npm-image]: https://badge.fury.io/js/generator-typescript-webpack-basic.svg
[npm-url]: https://npmjs.org/package/generator-typescript-webpack-basic
[travis-image]: https://travis-ci.com/Andrewnetwork/generator-typescript-webpack-basic.svg?branch=master
[travis-url]: https://travis-ci.com/Andrewnetwork/generator-typescript-webpack-basic
[daviddm-image]: https://david-dm.org/Andrewnetwork/generator-typescript-webpack-basic.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Andrewnetwork/generator-typescript-webpack-basic
