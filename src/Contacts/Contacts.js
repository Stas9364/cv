import React, {useState} from 'react';
import styles from './Contacts.module.scss';
import {Title} from '../Commons/Title/Title';
import phone from '../assets/img/phone-call.png';
import emailIMG from '../assets/img/email.png';
import location from '../assets/img/location.png';
import thanks from './../assets/img/thanks.jpg';
import {ContactsData} from "./ContactsData/ContactsData";
import axios from 'axios';

export const Contacts = () => {
    const [name, setName] = useState('');
    const [contacts, setContacts] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSent(true);

        axios.post('https://portfolio-node-js-server.herokuapp.com/send-message',
            {name, contacts, message})
            .then(() => {
                setTimeout(() => {
                    setIsSent(false);
                }, 2000)
            });

        console.log('name', name)
        console.log('contacts', contacts)
        console.log('message', message)

        setName('');
        setMessage('');
        setContacts('');
    };

    return (
        <div className={styles.contactsBlock}>
            <div className={`${styles.container} ${styles.contactsWrapper}`}>
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
                            img={emailIMG}
                            description={'Email'}
                            contact={'stas-lisovskiy@mail.ru'}
                        />
                        <ContactsData
                            img={location}
                            description={'Location'}
                            contact={'Belarus, Minsk'}
                        />
                    </div>

                    {isSent
                        ? <div className={styles.gratitude}>
                            <img src={thanks} alt="gratitude"/>
                        </div>

                        : <form  className={styles.formWrapper} onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder='Your Name'
                                value={name}
                                onChange={e => setName(e.currentTarget.value)}
                            />
                            <input
                                type="text"
                                placeholder='Your Contacts'
                                value={contacts}
                                onChange={e => setContacts(e.currentTarget.value)}
                            />
                        </div>
                        <textarea
                            placeholder='Your Message'
                            value={message}
                            onChange={e => setMessage(e.currentTarget.value)}
                        />
                        <button type="submit">Send message</button>
                    </form>}
                </div>
            </div>
        </div>

    );
};

