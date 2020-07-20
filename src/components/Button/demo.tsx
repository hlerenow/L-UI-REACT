import * as React from 'react';
import Button from './index';

type StateType = {
  types: string[]
}

class ButtonDemo extends React.Component<any, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      types: ['default', 'primary', 'success', 'info', 'warning', 'danger'],
    };
  }

  render() {
    const { types } = this.state;
    return (
      <div>
        <h2>Button</h2>
        {
          types.map((type) => (<div style={{ padding: '5px', float: 'left' }} key={type}><Button type={type}>{type}</Button></div>))
        }
      </div>
    );
  }
}

export default ButtonDemo;
