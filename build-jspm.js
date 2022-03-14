import { Generator } from '@jspm/generator';
import { readFile, writeFile } from 'fs/promises';
import { pathToFileURL } from 'url';

const generator = new Generator({
  mapUrl: pathToFileURL('app.html'),
  env: ['production', 'browser', 'module']
});

const htmlSource = await readFile('app.html', 'utf-8');

await writeFile('app.html', await generator.htmlGenerate(htmlSource, {
  preload: true,
  integrity: true
}));
