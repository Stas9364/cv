import React from 'react';
import style from '../ConteinerStyle/Container.module.css'
import {Skill} from './Skill/Skill';
import styles from './Skills.module.css'

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${style.container} ${styles.skillsWrapper}`}>
                <h2 className={styles.title}>My skills</h2>
                <div className={styles.skillsContainer}>
                    <Skill
                        title={'HTML'}
                        description={'some description HTML-some description HTML-some description HTML'}
                        imgUrl={''}
                    />
                    <Skill
                        title={'JS'}
                        description={'some description JS-some description JS'}
                        imgUrl={''}
                    />
                    <Skill
                        title={'React'}
                        description={'some description React'}
                        imgUrl={''}
                    />
                    <Skill
                        title={'React'}
                        description={'some description React'}
                        imgUrl={''}
                    />
                    <Skill
                        title={'React'}
                        description={'some description React'}
                        imgUrl={''}
                    />
                    <Skill
                        title={'React'}
                        description={'some description React'}
                        imgUrl={''}
                    />
                </div>
            </div>
        </div>
    );
};

