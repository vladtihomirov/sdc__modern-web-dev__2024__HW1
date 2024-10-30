import { Component, ReactNode } from 'react';
import styles from './BaseTemplate.module.css';
import { Header } from '../../organisms/header/Header.tsx';
import { Footer } from '../../organisms/footer/Footer.tsx';

export type BaseTemplateProps = {
  children: ReactNode;
};

export class BaseTemplate extends Component<BaseTemplateProps> {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.baseTemplate}>
        <Header />
        <div className={["wrapper", styles.baseWrapper].join(' ')}>
          {children}
        </div>
        <Footer />
        <div className={styles.background}>
          <div className={styles.backgroundSlide}></div>
        </div>
      </div>
    );
  }
}
