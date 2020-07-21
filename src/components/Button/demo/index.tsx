import * as React from 'react';
import Button from '../index';
import './index.scss';

type StateType = {
  refs: any,
  types?: string[]
}

class ButtonDemo extends React.Component<any, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      refs: React.createRef(),
      types: ['default', 'primary', 'success', 'info', 'warning', 'danger'],
    };
  }

  onClick = () => {
    alert('被点击');
  }

  render() {
    const { onClick } = this;
    const { refs, types } = this.state;
    return (
      <div>
        <h2>Button</h2>
        <div className="item-box">
          {
            types.map((type) => (<div className="item" key={type} onClick={onClick} ref={refs}><Button type={type}>{type}</Button></div>))
          }
        </div>
        {/* plain */}
        <div className="item-box">
          {
            types.map((type) => (<div className="item" key={type} onClick={onClick} ref={refs}><Button plain type={type}>{type}</Button></div>))
          }
        </div>
        {/* round */}
        <div className="item-box">
          {
            types.map((type) => (<div className="item" key={type} onClick={onClick} ref={refs}><Button round type={type}>{type}</Button></div>))
          }
        </div>
        {/* round and plain */}
        <div className="item-box">
          {
            types.map((type) => (<div className="item" key={type} onClick={onClick} ref={refs}><Button round plain type={type}>{type}</Button></div>))
          }
        </div>
        {/* size */}
        <div className="item-box">
          {
            types.map((type, index) => (<div className="item" key={type} onClick={onClick} ref={refs}><Button size={['', 'medium', 'small', 'mini', 'small', 'medium'][index]} type={type}>{type}</Button></div>))
          }
        </div>
      </div>
    );
  }
}

export default ButtonDemo;
