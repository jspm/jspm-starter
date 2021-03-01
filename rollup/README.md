# JSPM TypeScript Starter

Clone and open `index.html` via a webserver.

Run `npm install && npm run build` then see `index-build.html` and `index-build-system.html`.

* The development scenario uses native modules and import maps directly.
* Run `npm install && npm run build` to build for production.
* `index-build.html` serves the native ES module build output.
* `index-build-system.html` serves the SystemJS build output.

RollupJS Implementation Details:

* The configuration file at `rollup.config.js` defines the build.
* RollupJS ignores the external modules by default, which exactly is what we want to use the JSPM CDN in production. We disable the default warning it outputs for this case.
* RollupJS outputs a single file build for the application, instead of having multiple local modules.
* Adding additional entry points to the build / using dynamic imports automatically starts a RollupJS
  codesplitting build where it optimizes into as few modules as possible to both avoid code duplication
  and loading any more files than necessary.
