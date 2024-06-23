import './contact.css';
import React, { useRef } from 'react'
import linkedinLogo from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0fhau4y', 'template_dkd4tnk', form.current, {publicKey: 's4RNRzCQJkxtWwiZU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactpage">
      <div className="contact">
        <h1 className="contactpagetitle">
          Contact Me
        </h1>
        <span className="contactdescription">
          For any work related inquiries, please fill out the form below with your contact information and a message!
        </span>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='your_name'/>
          <input type="text" className="email" placeholder='Your Email' name='your_email'/>
          <textarea className="message" rows="5" placeholder = 'Your Message' name='message'></textarea>
          <button type='submit' value='Send' className="submit">Submit</button>
          <div className="links"></div>
          <a href="www.linkedin.com/in/gocai" target="_blank" rel="noreferrer">
          <img src={linkedinLogo} alt="LinkedIn Logo" className="linkedin" />
          </a>
        </form>
      </div>
    </section>
  )
}

export default Contact