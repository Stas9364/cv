import React from 'react';
import styles from './Main.module.scss';
// import style from '../Commons/styles/Container.module.scss'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div>
                    <h5>Hi, my name is</h5>
                    <h1>STAS LISOVSKIY</h1>
                    <p>I am trying to become a web developer</p>
                </div>
                <div className={styles.picture}>
                    <img src="https://media.istockphoto.com/vectors/illustration-of-hand-victory-sign-gesture-icon-on-white-background-vector-id590051132?k=20&m=590051132&s=612x612&w=0&h=QPG2KflCf5l1bBEFeOTnsEGFZatvVwj8GL3oIxlOIBQ=" alt="it is "/>
                </div>
            </div>
        </div>
    );
};

