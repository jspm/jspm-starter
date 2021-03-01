import React from 'react';
import ReactDOM from 'react-dom';

// @ts-ignore
// Try using the Deno VSCode extension to avoid the above ts-ignore.
// This is needed otherwise because TypeScript doesn't like its own file extension.
import { getMessage } from './common.ts';

ReactDOM.render(
  <h1>{getMessage('world')}</h1>,
  document.getElementById('root')
);
