import styles from './Button.module.css';
import React from "react";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  appearance?: 'primary' | 'alt';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button = ({
                         children,
                         onClick,
                         appearance = 'primary',
                         size = 'large',
                         ...props
                       }: ButtonProps) => {
  const className = classNames(styles.button, styles['button__' + appearance], styles['button__' + size]);
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  )
}