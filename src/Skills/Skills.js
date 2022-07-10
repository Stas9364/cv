import React from 'react';
import style from '../Commons/styles/Container.module.scss'
import {Skill} from './Skill/Skill';
import styles from './Skills.module.scss'
import {Title} from "../Commons/Title/Title";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${style.container} ${styles.skillsWrapper}`}>
                    <a name='skills'/>
                    <Title title={'skills'}/>
                <div className={styles.skillsContainer}>

                    <Skill
                        title={'HTML'}
                        description={'some description HTML-some description HTML-some description HTML'}
                        imgUrl={'https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png'}
                    />
                    <Skill
                        title={'JS'}
                        description={'some description JS-some description JS'}
                        imgUrl={'https://i2.wp.com/thebamboocode.com/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500'}
                    />
                    <Skill
                        title={'React'}
                        description={'some description React'}
                        imgUrl={'https://www.svgrepo.com/show/327388/logo-react.svg'}
                    />
                    <Skill
                        title={'React'}
                        description={'some description React'}
                        imgUrl={'https://www.svgrepo.com/show/327388/logo-react.svg'}
                    />

                </div>
            </div>
        </div>
    );
};

