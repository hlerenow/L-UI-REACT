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
  type = type || 'primary';
  children = children || '默认按钮';
  return <button type="button" className={`l-button ${type}`} ref={ref}>{children}</button>;
});

export default Button;
