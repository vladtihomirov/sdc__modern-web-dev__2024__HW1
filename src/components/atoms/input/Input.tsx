import styles from './Input.module.scss';
import {InputHTMLAttributes} from "react";

type InputProps = {
  value: string | number;
  type?: 'text' | 'number' | 'email' | 'password';
  className?: string;
}

export const Input = ({
                        value,
                        type = 'text',
                        className,
                        ...props
                      }: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={[styles.input, className].join(' ')}
      type={type}
      value={value}
      {...props}
    />
  )
}