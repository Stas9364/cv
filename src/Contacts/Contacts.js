import React from 'react';
import style from '../Commons/styles/Container.module.scss';
import styles from './Contacts.module.scss';
import {Title} from '../Commons/Title/Title';
import phone from '../assets/img/phone-call.png';
import email from '../assets/img/email.png';
import location from '../assets/img/location.png';
import {ContactsData} from "./ContactsData/ContactsData";

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${style.container} ${styles.contactsWrapper}`}>
                <a name='contacts'/>
                <Title title={'GET IN TOUCH'}/>
                <div className={styles.wrapper}>

                    <div className={styles.myContacts}>
                        <div className={styles.text}>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                            Ad commodi corporis ducimus, facilis
                            minima necessitatibus, nihil non numquam! </div>
                        <ContactsData
                            img={phone}
                            description={'Phone'}
                            contact={'+375333896666'}
                        />
                        <ContactsData
                            img={email}
                            description={'Email'}
                            contact={'stas-lisovskiy@mail.ru'}
                        />
                        <ContactsData
                            img={location}
                            description={'Location'}
                            contact={'Belarus, Minsk'}
                        />
                    </div>

                    <form action="#" className={styles.formWrapper}>
                        <div>
                            <input type="text" placeholder='Your Name'/>
                            <input type="text" placeholder='Your Email'/>
                        </div>
                        <textarea placeholder='Your Message'/>
                        <button type="submit">Send message</button>
                    </form>

                </div>
            </div>
        </div>

    );
};

