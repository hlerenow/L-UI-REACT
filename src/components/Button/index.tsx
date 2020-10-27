/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { FC } from 'react';
import classnames from 'classnames';
import './index.scss';

export type ButtonType = 'primary' | 'default' | 'danger' | 'text' | 'warn' | 'info';

export type ButtonNativeType = 'button' | 'submit' | 'reset'

export type ButtonSize = 'medium' | 'small' | 'mini'
export interface BaseButtonProps {
  type?: ButtonType;
  round?: boolean;
  size?: ButtonSize;
  plain?: boolean;
  disabled?: boolean;
  className?: string;
  nativeType?: ButtonNativeType;
  /**
   * Optional click handler
   */
  onClick?: (e: any) => void;
  // onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  [key: string]: any;
}

// eslint-disable-next-line max-len
export const Button: React.FC<BaseButtonProps> = React.forwardRef((props: BaseButtonProps, ref: any) => {
  const {
    children, type, onClick, nativeType, className, round, plain, size, autofocus, disabled,
    ...rest
  } = props;
  const innerClick = (e: any) => {
    if (!disabled) {
      onClick(e);
    }
  };
  return (
    <button
      type={nativeType || 'button'}
      className={classnames(['l-button', `l-button--${type || 'default'}`, { 'is-round': round, 'is-plain': plain, 'is-disabled': disabled }, size, className])}
      ref={ref}
      onClick={innerClick}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
