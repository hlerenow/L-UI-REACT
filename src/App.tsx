import * as React from 'react';

function importAll(r: any) {
  return r.keys().map(r);
}

let conponents = importAll(require.context('./components', true, /.*index\.[jt]sx/));
console.log('conponents', conponents);

conponents = conponents.map((con:any) => con.default);
type StateType = {
  name: string
}

class App extends React.Component<any, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'List',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <>
        <div>{name}</div>
        {
          conponents.map((Con: any) => <Con key={Con.name} />)
        }
      </>
    );
  }
}

export default App;
