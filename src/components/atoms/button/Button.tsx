import styles from './Button.module.css';
import React from "react";

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
                         size = 'large'
                       }: ButtonProps) => {
  return (
    <button className={[styles.button, styles['button__' + appearance], styles['button__' + size]].join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}