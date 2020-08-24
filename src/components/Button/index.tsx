/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { FC } from 'react';
import classnames from 'classnames';
import './index.scss';

export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

export type ButtonNativeType = 'button' | 'submit' | 'reset'

export type ButtonSize = '' | 'medium' | 'small' | 'mini'
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
  onClick?: () => void;
  // onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  [key: string]: any;
}

// eslint-disable-next-line max-len
export const Button: React.FC<BaseButtonProps> = React.forwardRef((props: BaseButtonProps, ref: any) => {
  const {
    children, type, onClick, nativeType, className, round, plain, size, autofocus,
    ...rest
  } = props;
  return (
    <button
      type={nativeType}
      className={classnames(['l-button', `l-button--${type}`, { 'is-round': round, 'is-plain': plain }, size, className])}
      ref={ref}
      onClick={onClick}
      {...rest}
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
};
