import styles from './BaseTemplate.module.css';
import React from "react";
import {Header} from "../../organisms/header/Header.tsx";
import {Footer} from "../../organisms/footer/Footer.tsx";

export type BaseTemplateProps = {
  children: React.ReactNode;
}

export const BaseTemplate = ({children}: BaseTemplateProps) => {
  return (
    <div className={styles.baseTemplate}>
      <Header/>
      <div className={["wrapper", styles.baseWrapper].join(' ')}>
        {children}
      </div>
      <Footer/>
      <div className={styles.background}>
        <div className={styles.backgroundSlide}>

        </div>
      </div>
    </div>
  );
}