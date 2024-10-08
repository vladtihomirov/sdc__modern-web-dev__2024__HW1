import styles from './BaseTemplate.module.css';
import React from "react";
import {Header} from "../../organisms/header/Header.tsx";

export type BaseTemplateProps = {
    children: React.ReactNode;
}

export const BaseTemplate = ({children}: BaseTemplateProps) => {
    return (
        <div className={styles.baseTemplate}>
            <Header/>
            {children}
        </div>
    );
}