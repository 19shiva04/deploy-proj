import React from 'react'
import { useRef } from 'react';
import complogo from '../../src/assets/complogo.png'
import tlogo from '../../src/assets/tlogo.png'
import fbicon from '../../src/assets/fbicon.png'
import instaico from '../../src/assets/instaico.png'
import linkedinico from '../../src/assets/linkedinico.png'
import emailjs from '@emailjs/browser';
import './ContactUs.css'

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => 
  {
    e.preventDefault();

    emailjs.sendForm('service_2jih5gc', 'template_bwjkljz', form.current, '7ErZeO5mhg0efJ0kL')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Query Sent !');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
    <section id='contactPage'>


      <div className='clients'>
        <h1 className='contactPageTitle'>NCC</h1>
        <p className='clientDesc'>Liked Our Work Get In Touch With Us  !</p>
        <div className='clientImgs'>
          <img src={complogo} alt="" className='clientImg'/>
        </div>
      </div>


      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Us</h1>
        <p className='contactDesc'>Fill in your details and we will get back to you !</p>

        <form className='contactForm' ref={form} onSubmit={sendEmail} >
          <input type="text" className='name' placeholder='Your Name' name='from_name'></input>
          <input type="email" className='email' placeholder='Your Email' name='from_email'></input>
          <input type="tel" className='number' placeholder='Your P.No' name='from_num'></input>
          <textarea className='msg' name='message' rows="3" placeholder='Your Query'></textarea>
          <button type='submit' value='send' className='submitBtn'>Submit</button>
          
        </form>
      </div>


    </section>
    
  )
}

export default ContactUs