/* eslint-disable no-console */
import * as React from 'react';
import { render } from 'react-dom';

function importAll(r: any) {
  return r.keys().map(r);
}

let conponents = importAll(require.context('../src', true, /.*\/__demo__\/.*index.[jt]sx/));

conponents = conponents.map((con:any, index: number) => ({
  Con: con.default,
  index,
}));
type StateType = {
  name: string
}

const App = function App() {
  return (
    <>
      <div className="componentsContainer">
        {
            conponents.map((item: any) => {
              const { Con, index } = item;
              return (
                <div className="component-box-item" key={index}>
                  <Con />
                </div>
              );
            })
          }
      </div>
    </>
  );
};

require('./styles/index.scss');

render(<App />, document.getElementById('app'));
