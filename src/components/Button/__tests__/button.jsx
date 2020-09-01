import * as React from 'react';
import { shallow } from 'enzyme';
import Button from '@/src/components/Button/index';
import imageTest from '@/tests/imageSnapshots/imageTest';

describe('Test button', () => {
  it('render a Button', () => {
    const button = shallow(<Button>Default</Button>);
    expect(button.html()).toMatchSnapshot();
    expect(button.text()).toEqual('Default');
    expect(button.hasClass('l-button--default')).toBe(true);
  });

  it('button type primary', () => {
    const button = shallow(<Button type="primary">primary</Button>);
    expect(button.html()).toMatchSnapshot();
    expect(button.text()).toEqual('primary');
    expect(button.hasClass('l-button--primary')).toBe(true);
  });

  it('button disabled click', () => {
    let hasClick = false;
    const onClick = () => {
      hasClick = true;
    };
    // eslint-disable-next-line react/jsx-no-bind
    const button = shallow(<Button disabled onClick={onClick}>disabled</Button>);
    button.find('button').simulate('click');
    expect(hasClick).toBe(false);
  });

  it('button click', () => {
    let hasClick = false;
    const onClick = () => {
      hasClick = true;
    };
    // eslint-disable-next-line react/jsx-no-bind
    const button = shallow(<Button onClick={onClick}>Click</Button>);
    button.find('button').simulate('click');
    expect(hasClick).toBe(true);
  });
});

describe('Button image', () => {
  imageTest((
    <>
      <Button>Default</Button>
      <Button type="primary">Default</Button>
    </>
  ));
});
