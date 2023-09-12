import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import {PiLinkedinLogoBold} from 'react-icons/pi'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2u10fl8', 'template_lf1zj9q', form.current, 'Zh-Y-dyeRQRKIuo31')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5 className="section-title">Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>garciam2017@gmail.com</h5>
            <a href="mailto:garciam2017@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon'/>
            <h4>Work Phone</h4>
            <h5>(312) 625-0655</h5>
            <a href="tel:3126250655">Text or Call</a>
          </article>
          <article className="contact__option">
            <PiLinkedinLogoBold className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>mariagarcia-cs</h5>
            <a href="https://www.linkedin.com/in/mariagarcia-cs/" target='_blank'>Connect</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='fname' placeholder='First Name' required/>
          <input type="text" name='lname' placeholder='Last Name' required/>
          <input type="email" name='fname' placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
