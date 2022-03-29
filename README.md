# JSPM Starter

Starter repo for using JSPM generated import maps.

## What This Does

This demonstrates a Lit component `src/motion-slide.ts` being built from TypeScript into JavaScript, and then run in `app.html` with Lit and its dependencies loaded from the JSPM CDN using the JSPM generator generated import map.

The two build steps being run are:

1. Converting TypeScript into JavaScript (`src/x.ts` -> `lib/x.js`).
2. Injecting the import map into the `app.html` file using JSPM Generator's [htmlGenerate](https://github.com/jspm/generator#generating-html) method.

The JSPM generator will automatically pick up all included JS files and work out the correct import map to make them work.

Adding new dependency imports will automatically be picked up and added to the import map. Custom dependency ranges in the local package.json file will be used if present.

The ES Module Shims polyfill is automatically included to the latest version to support import maps in older browsers.

## The Build Workflows

There are two ways to run the starter:

1. [Classic npm Scripts](#npm-scripts-workflow)
2. [Chomp Task Runner & Dev Server](#chomp-workflow) (recommended!)

Chomp is recommended as it provides makefile-style caching and also comes with a web server and fast incremental watcher.

### npm Scripts Workflow

```sh
npm install
npm run build
```

Run your preferred local static web server and navigate to `app.html` to see the built application.

### Chomp Workflow

You will need to have Chomp installed either via npm:

```sh
npm install -g chomp
```

or with the [Rust Toolchain](https://rustup.rs/):

```sh
cargo install chompbuild
```

From the cloned `jspm-starter` folder, run the Chomp build task with the dev server:

```sh
chomp build --serve
```

Navigate to `http://localhost:5776/app.html` in a web browser to see the built application.

Incremental rebuilds will apply as changes are made. Future support for [hot reloading](https://github.com/guybedford/es-module-shims/pull/269) is planned.

### License

MIT
