import * as React from 'react';
import { render } from 'react-dom';

require('./index.scss');

const App = () => (
  <div>hello react eslint typescript</div>
);
render(<App />, document.getElementById('app'));
