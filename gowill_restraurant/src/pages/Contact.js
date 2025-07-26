import React from 'react';
import bannerImage from '../assets/efo.jpg';
import '../styles/Contact.css';

function Contact() {
    return(
        <div className='contact'>
            <div className='LeftSide' style={{ backgroundImage: `url(${bannerImage})`}}>sduhermferkfkwedmkfmwekm</div>
            <div className='rightSide'>
                <h1> Contact Us </h1>
                <form id='contact-form' method='POST'>
                    <label htmlFor='name'>Full Name</label>
                    <input name='' placeholder='Enter full name' type='text'></input>
                    <label htmlFor='email'>Email</label>
                    <input name='email' placeholder='Enter email address...' type='email'></input>
                    <label htmlFor='message'>Message</label>
                    <textarea row='6' name='message' placeholder='Enter message...' required></textarea>
                    <></>
                    <button type='submit'> Send Message </button>

                </form>
            </div>
        </div>
    )

}

export default Contact;