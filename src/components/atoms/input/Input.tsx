import React, {Component} from 'react';
import styles from './Input.module.css';

type InputProps = {
  value: string | number;
  onChange: (value: string | number) => void;
  type?: 'text' | 'number';
  className?: string;
};

export class Input extends Component<InputProps> {
  static defaultProps = {
    type: 'text',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  };

  render() {
    const {value, type, className} = this.props;

    return (
      <input
        className={[styles.input, className].join(' ')}
        type={type}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}
