import React from 'react';
import styles from './Footer.module.scss';
import style from '../Commons/styles/Container.module.scss';
import {Title} from "../Commons/Title/Title";
import linkedin from '../assets/img/linkedin_black.png';
import gitHub from '../assets/img/github_black.png';
import instagram from '../assets/img/inst.png';

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${style.container} ${styles.footerWrapper}`}>
                <Title title={'Stanislav Lisovskiy'}/>
                <div className={styles.iconsContainer}>
                    <div className={styles.icon}>
                        <a href='https://www.linkedin.com/in/stanislav-lisovskii-42877a244/'>
                            <img src={linkedin} alt="linkedin"/>
                        </a>
                        </div>
                    <div className={styles.icon}>
                        <a href='https://github.com/Stas9364'>
                            <img src={gitHub} alt="gitHub"/>
                        </a>
                    </div>
                    <div className={styles.icon}><img src={instagram} alt="instagram"/></div>
                </div>
                <h5 className={styles.copyright}>All rights reserved 2022</h5>
            </div>
        </div>
    );
};

