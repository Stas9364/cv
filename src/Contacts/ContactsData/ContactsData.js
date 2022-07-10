import React from 'react';
import styles from './ContactsData.module.scss';

export const ContactsData = ({img, description, contact}) => {
    return (
        <div className={styles.contactsDataWrapper}>
            <div>
                <img src={img} alt="data"/>
            </div>
            <div className={styles.content}>
                <div>{description}</div>
                <div>{contact}</div>
            </div>
        </div>
    );
};

