import React from 'react';
import styles from './Project.module.css';

export const Project = ({projectName, description}) => {
    return (
        <div className={styles.project}>
            <div className={styles.picture}>
                <button className={styles.button}>Watch</button>
            </div>
            <h3>{projectName}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    );
};

