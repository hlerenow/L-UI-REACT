import * as React from 'react';
import { render } from 'react-dom';

require('./index.scss');

const App = () => (
  <div>hello react eslint typescript</div>
);
const a = localStorage.getItem('key');
console.log('a', a);
render(<App />, document.getElementById('app'));
