import styles from './Input.module.scss';

type InputProps = {
  value: string | number;
  onChange: (value: string | number) => void;
  type?: 'text' | 'number';
  className?: string;
}

export const Input = ({value, onChange, type = 'text', className}: InputProps) => {
  return (
    <input
      className={[styles.input, className].join(' ')}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}