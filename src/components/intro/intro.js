import React from 'react';
import './intro.css';
import bgintro from '../../assets/bgintro.png';
import intropic from '../../assets/intropic.png'
import bg2 from '../../assets/bg2.png'
import {Link} from 'react-scroll';
import contactuspng from '../../assets/contactuspng.png';
const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
        <span className='hello'>NCC <br/></span>
        <span className='introText'>Construction <span className='introName'></span> <br/><span className='made'>made</span> Easy</span>
        <p className='intropara'>At NCC, we're passionate about helping our customers find their dream homes.</p>
        <p className='intropara'>We're committed to providing our customers with the best possible experience to buy your dream homes.</p>
        <p className='intropara'>We offer a wide range of properties to choose from,all of which are competitively priced and offer exceptional value for money.</p>
        <Link><button className='btn'onClick={()=>
        {
          document.getElementById('contact').scrollIntoView( {behavior : 'smooth'})
        }}>
           <img src={contactuspng} alt="hire" className='btnImg'/>Contact Us</button></Link>
        </div>
        <img src={bgintro} alt="" className='bg'/>
        <img src={intropic} alt="" className='bg1'/>
        <img src={bg2} alt="" className='bg2'/>
    </section>
  )
}

export default Intro