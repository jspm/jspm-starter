/*
 * TypeScript doesn't know to compile "import './x.ts'" into "import './x.js'".
 * So this hack script fixes that. Yay.
 */

import { readFile, readdir, writeFile } from 'fs/promises';

async function replaceFilesInDir (dir) {
  for (const filename of await readdir(dir)) {
    const filePath = `${dir}/${filename}`;
    try {
      const source = (await readFile(filePath)).toString();
      await writeFile(filePath, source.replace(/\.ts(['"])/g, '.js$1'));
    }
    catch (e) {
      // It's a directory...
      if (e.code === 'EISDIR') {
        await replaceFilesInDir(filePath);
      }
      else {
        throw e;
      }
    }
  }
}

replaceFilesInDir('./dist');
