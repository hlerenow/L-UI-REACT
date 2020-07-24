/* eslint-disable no-unused-vars */
import React, { FC } from 'react';
import classnames from 'classnames';
import './index.scss';

export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

export type ButtonNativeType = 'button' | 'submit' | 'reset'

export type ButtonSize = '' | 'medium' | 'small' | 'mini'
export interface BaseButtonProps {
  /**
   * 用户名
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: ButtonType
  nativeType?: ButtonNativeType,
  autofocus?: boolean,
  className?: string,
  disabled?: boolean,
  round?: boolean,
  size: ButtonSize,
  plain?: boolean,
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
