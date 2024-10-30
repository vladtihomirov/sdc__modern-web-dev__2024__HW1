import styles from './Button.module.css';
import React, { Component } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  appearance?: 'primary' | 'alt';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

export class Button extends Component<ButtonProps> {
  static defaultProps = {
    appearance: 'primary',
    size: 'large'
  };

  render() {
    return (
      <button className={[
        styles.button,
        styles['button__' + this.props.appearance],
        styles['button__' + this.props.size]
      ].join(' ')} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
