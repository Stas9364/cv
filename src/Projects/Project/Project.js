import React from 'react';
import styles from './Project.module.scss';

export const Project = ({projectName, description, style}) => {
    return (
        <div className={styles.project}>
            <div className={styles.picture} style={style}>
                <a href='' className={styles.linkWatch}>Watch</a>
            </div>
            <h3>{projectName}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    );
};

