import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact (){
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your e-mail is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          } 
        
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
        console.log('errorMessage', errorMessage);
    }
    return (
        <div className="container">
            <form className="contact-forms"action ="mailto:drewvena1@gmail.com" target ="_blank"method="POST" enctype="multipart/form-data">
                <div className="contact-box">
                <label htmlfor="name">Your Name</label>
                <input type="text" id="name" name="name"defaultValue={name} onBlur={handleChange}></input>
                </div>
                <div className="contact-box">
                <label htmlfor="email">Your Email</label>
                <input type="text" id="email" name="email"defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div class="contact-box">
              <label class="textarea-label" htmlFor="Message">Message</label>
              <br/>
              <textarea name="Message" defaultValue={message} onBlur={handleChange} rows="4" />
            </div>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
             <button className="button" type="submit">Email Drew</button>
            </form>

        </div>
    )
}
export default Contact