# JSPM Starters

Start repos for using JSPM import maps workflows from development to production.

Starters included:

* [React App](tree/main/react) - Basic React application with native modules and a JSPM import map.
* [JSX via SystemJS and Babel](tree/main/systemjs-babel) - React JSX application using SystemJS in development then Babel to output native modules or SystemJS modules for production.
* [TypeScript via TSC](tree/main/typescript) - TypeScript in-browser SystemJS workflow outputting native modules or SystemJS modules in production.
* [Optimization with RollupJS](tree/main/rollup) - RollupJS optimization outputting both native modules and SystemJS variants.
* [Your favourite project here](#add-a-starter)

## Starter Workflow

The typical workflow for all starters is the same and is as described below.

For more information on these workflows and the JSPM CDN, see the related documentation section at [JSPM Workflows](https://jspm.org/docs/workflows).

### 1. Buildless Development

Each starter exposes an `index.html` page. The `index.html` page is a direct copy-paste genrated by [JSPM Generator](https://generator.jspm.io),
with a `<script type="module">` referencing the main application entry point. The link to the original JSPM Generator workspace can be found in the `index.html` file.

No tooling installs or tasks is needed to run in development mode. Just start a local server or host the files.

For example with `npx http-server -c-1` and navigating to `http://localhost:8080/index.html` in a web browser to see the example.

### 2. Optional Production Optimization

Some starters have an optimization task, and when they do this uses the standard _npm build_ task convention.

Optmization typically involves building modules together into a single file or chunks via code splitting for larger applications.

```
npm run install && npm run build
```

Once the optimization task has run, the optimized application can be viewed via a separate `index-build.html`.

If the task builds for both SystemJS and for ES modules, a separate `index-build-system.html` can be found as well.

The optimized sources are not checked in to avoid unnecessary churn so the build task does still need to be explicitly run.

If the build has a watch mode a separate `npm run watch-build` may be present, but will do exactly the same work as `npm run build`.

### That's all

There's nothing more to learn or know. Get back to learning the language, learning the DOM, learning the framework. Don't waste time learning unnecessary tools. Get hacking.

## Add a Starter

To add a new starter project to this repo, create a PR with a new folder following the existing pattern.

Any starter should be a public open source framework or component library on npm.

Verify that the starter provides the exact steps described for starters above, and nothing more than that unless absolutely necessary.

### License

MIT
