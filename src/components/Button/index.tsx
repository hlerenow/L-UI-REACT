/* eslint-disable no-unused-vars */
import * as React from 'react';
import classnames from 'classnames';
import './index.scss';

export interface BaseButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
  nativeType: 'button' | 'submit' | 'reset',
  autofocus: boolean,
  className: string,
  disabled: boolean,
  round: boolean,
  plain: boolean,
  size: '' | 'medium' | 'small' | 'mini'
  [key: string]: any;
}

const Button = React.forwardRef((props: BaseButtonProps, ref: any) => {
  const {
    children, type, onClick, nativeType, className, round, plain, size,
  } = props;
  return (
    <button
      type={nativeType}
      className={classnames(['l-button', `l-button--${type}`, { 'is-round': round, 'is-plain': plain }, size, className])}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

Button.defaultProps = {
  type: 'default',
  nativeType: 'button',
  autofocus: false,
  disabled: false,
  round: false,
  plain: false,
  className: '',
  size: '',
  onClick() {},
};

export default Button;
