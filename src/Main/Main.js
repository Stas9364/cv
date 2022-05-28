import React from 'react';
import styles from './Main.module.css';
import style from '../ConteinerStyle/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={style.container}>
                <div className={styles.text}>
                    <span>Hi</span>
                    <h1>My name is Stas!</h1>
                    <span>I am trying to become a web developer</span>
                </div>
                <div className={styles.img}>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    );
};

