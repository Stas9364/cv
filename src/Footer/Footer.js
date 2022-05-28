import React from 'react';
import styles from './Footer.module.css';
import style from '../ConteinerStyle/Container.module.css';

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${style.container} ${styles.footerWrapper}`}>
                <h2 className={styles.title}>Stanislav Lisovskiy</h2>
                <div className={styles.iconsContainer}>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>
                <h5 className={styles.copyright}>All rights reserved 2022</h5>
            </div>
        </div>
    );
};

