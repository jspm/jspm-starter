# JSPM TypeScript Starter

Clone and open `index.html` via a webserver.

Run `npm install && npm run build` then see `index-build.html` and `index-build-system.html`.

* TypeScript is transpiled in-browser using the SystemJS Babel plugin.
* Run `npm install && npm run build` to build for production.
* `index-build.html` serves the native ES module build output.
* `index-build-system.html` serves the SystemJS build output.

TypeScript Implementation Details:

* Note that the types are installed via `npm install --save-dev @types/...`.
* In addition explicit `.ts` extensions are used for local relative imports, see the src/app.tsx file.
* TSC handling for converting `.ts` into `.js` is not currently supported, instead a typescript-hack-so-sorry.js script provides this functionality.
* The tsconfig.json and tsconfig.system.json files demonstrate the TypeScript configuration.

See the [workflows section of the JSPM documentation](https://jspm.org/docs/workflows#typescript), where some alternatives to this workflow are shown as well.
