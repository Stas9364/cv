import React from 'react';
import styles from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={styles.navContainer}>
        <div className={styles.nav}>
            <a href="#main">MAIN</a>
            <a href="#skills">SKILLS</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contacts">CONTACTS</a>
        </div>
        </div>
    );
};


