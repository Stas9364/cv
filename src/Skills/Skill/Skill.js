import React from 'react';
import styles from './Skill.module.scss';

export const Skill = ({title, description, imgUrl}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src={imgUrl} alt="#"/>
            </div>
            <h3>{title}</h3>
            <span className={styles.description}>
                {description}
            </span>
        </div>
    );
};

