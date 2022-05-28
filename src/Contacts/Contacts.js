import React from 'react';
import style from '../ConteinerStyle/Container.module.css';
import styles from './Contacts.module.css';

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${style.container} ${styles.contactsWrapper}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form action="#" className={styles.formWrapper}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                    <input type="submit"/>
                </form>
            </div>
        </div>

    );
};

