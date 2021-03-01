import React from 'react';
import ReactDOM from 'react-dom';
import { getMessage } from './common.js';

ReactDOM.render(
  React.createElement('h1', { children: getMessage('world') }),
  document.getElementById('root')
);
