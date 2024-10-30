import { Component } from 'react';
import styles from './Logo.module.css';

export class Logo extends Component {
  render() {
    return (
      <img
        className={styles.logo}
        src={'/logo.svg'}
        alt={'Logo icon'}
        height={51}
        width={40}
      />
    );
  }
}
