/* eslint-disable no-console */
import * as React from 'react';

function importAll(r: any) {
  return r.keys().map(r);
}

let conponents = importAll(require.context('./components', true, /.*demo\.[jt]sx/));

conponents = conponents.map((con:any, index: number) => ({
  Con: con.default,
  index,
}));
type StateType = {
  name: string
}

class App extends React.Component<any, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '列表',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <>
        <div className="title">{name}</div>
        <div className="conponentsContainer">
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
  }
}

export default App;
