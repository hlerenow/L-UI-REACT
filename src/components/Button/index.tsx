/* eslint-disable no-unused-vars */
import * as React from 'react';
import './index.scss';

export interface BaseButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: string;
  [key: string]: any;
}

const Button = React.forwardRef((props: BaseButtonProps, ref: any) => {
  let { children, type } = props;
  type = type || 'default';
  children = children || '';
  return <button type="button" className={`l-button l-button--${type}`} ref={ref}>{children}</button>;
});

export default Button;
