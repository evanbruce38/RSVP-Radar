import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact () {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const [disabledButton, setDisabledButton] = useState(true);
    const { name, email, message } = formState;

    

    return (
        <section className="content">
            <div id="contact" className ="section-title">
                <h1>About us</h1>
            </div>
            <div className="main-content">
                <p>Write info about our page and it's use here</p>
            </div>
            <div className="section-title">
                <h2>Created by</h2>
            </div>
            <div className="main-content">
                <p>Evan Bruce github: -- email: --</p>
                <p>Damien Bleus github: -- email: --</p>
                <p>John Robinson github: -- email: --</p>
                <p>Claudy Regis github: -- email: --</p>
            </div>
            <div className="section-title">
                <h2>Contact Form</h2>
            </div>
            <div className="main-content">
                <form id="contact-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div></div>
                </form>
            </div>
        </section>
    )
}