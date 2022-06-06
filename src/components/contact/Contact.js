import './contact.scss'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Person, Email } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // If successful, we want to clear out the input after registration.
        setName('');
        // TODO: Set the password back to an empty string after the user clicks submit
        setEmail('');
        setMessage('');

        alert(`Thank you ${name}, your form has been submitted`);
    };


    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="wrapper">
                    <h1>Get in touch</h1>
                    <div className="itemContainer">
                        <a href="mailto:kai@kaiconsulting.co" target="_blank" id="mail"><Email className="icon" sx={{ fontSize: 65 }}/></a>
                        <span>kai@kaiconsulting.co</span>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/kaiwalsh1" target="_blank" ><GitHubIcon sx={{ fontSize: 65 }} id="icon"/></a>
                        <span>GitHub</span>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/kai-walsh/" target="_blank"><LinkedInIcon sx={{ fontSize: 65 }} id="icon"/></a>
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <form className="form">
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="name"
                    />
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                    />
                    <input
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="message"
                        id="message"
                    />
                    <Button variant="contained" className="button" sx={{ fontSize: 20 }}
                        onClick={handleFormSubmit}
                    >Submit</Button>
                </form>
            </div>

        </div>
    )
}