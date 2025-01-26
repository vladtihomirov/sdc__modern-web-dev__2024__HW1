import styles from './Button.module.scss';
import React, {ButtonHTMLAttributes} from "react";
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
                         type = 'button',
                         ...props
                       }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const className = classNames(styles.button, styles['button__' + appearance], styles['button__' + size], props.className);
  return (
    <button {...props} className={className} onClick={onClick} type={type}>
      {children}
    </button>
  )
}