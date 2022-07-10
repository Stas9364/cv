import React from 'react';
import styles from './Title.module.scss'


export const Title = ({title}) => {
    return (
        <>
            <h2 className={styles.title}><a name='skills'/> {title}</h2>
            <div className={styles.horizontalLine}>
                <div className={styles.top}></div>
                <div className={styles.bottom}></div>
            </div>
        </>
    );
};

