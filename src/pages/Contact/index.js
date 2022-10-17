import React from 'react';
import './index.scss';
import { useState, useRef } from 'react';

function Contact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const nameRef = useRef();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const validateAll = () => {
        const msg = {};
        if (name.trim() === '') {
            msg.nameInput = '*Please enter your name';
            nameRef.current.focus();
        } else if (name.trim().split(' ').length < 2) {
            msg.nameInput = '*Please enter your full name (both first and last)';
        }

        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.trim() === '') {
            msg.emailInput = '*Please enter your email';
        } else if (!email.match(mailformat)) {
            msg.emailInput = '*Please enter a valid email address';
        }

        if (message.trim() === '') {
            msg.messageInput = '*Please share something';
        }

        setErrorMsg(msg);
        if (msg.length > 0) {
            return false;
        } else return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidate = validateAll();
        const data = {
            name,
            email,
            message,
        };
        console.log(data);
        if (!isValidate) return;
    };

    return (
        <div className="contact">
            <div className="contact__bgr"></div>
            <div className="container">
                <div className="contact__content">
                    <div className="contact__message">
                        <h3>Get In Touch</h3>
                        <form name="message__form" onSubmit={handleSubmit}>
                            <div>
                                <label className="form__label" htmlFor="name">
                                    Your full name{' '}
                                </label>
                                <br />
                                <input
                                    className="form__input"
                                    ref={nameRef}
                                    id="name"
                                    onChange={(e) => handleNameChange(e)}
                                />
                                <p className="form__errorMsg">{errorMsg.nameInput}</p>
                            </div>
                            <div>
                                <label className="form__label" htmlFor="email">
                                    Your email{' '}
                                </label>
                                <br />
                                <input className="form__input" id="email" onChange={(e) => handleEmailChange(e)} />
                                <p className="form__errorMsg">{errorMsg.emailInput}</p>
                            </div>
                            <div>
                                <label className="form__label" htmlFor="message">
                                    {' '}
                                    Message{' '}
                                </label>
                                <textarea
                                    className="form__textarea"
                                    id="message"
                                    onChange={(e) => handleMessageChange(e)}
                                />
                                <p className="form__errorMsg">{errorMsg.messageInput}</p>
                            </div>
                            <button className="form__submit__btn" type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="contact__address">
                        <div>
                            <div className="contact__city">
                                <h3>New York</h3>
                                <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                            <div className="contact__city">
                                <h3>Lon Don</h3>
                                <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                            <div className="contact__city">
                                <h3>Canada</h3>
                                <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
