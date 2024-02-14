import React, { useState } from 'react'
import tlogo from '../../assets/tlogo.png';
import complogo from '../../assets/complogo.png'
import contactuspng from '../../assets/contactuspng.png'
import menu from '../../assets/menu.png'
import './navbar.css';
import {Link} from 'react-scroll';
const Navbar = () => {
  const [showmenu,setshowmenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={complogo} alt="logo" className='logo'/>
        <div className='desktopmenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuitem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='desktopmenuitem'>About</Link>
            <Link activeClass='active' to='container' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuitem'>Projects</Link>
            <Link activeClass='active' to='profiles' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuitem'>Our Team</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>
        {
          document.getElementById('contact').scrollIntoView( {behavior : 'smooth'})
        }}>
            <img src={contactuspng} alt="" className='destopMenuImg' /> Contact Us 
        </button>

        <img src={menu} alt="logo" className='mobmenu' onClick={()=>setshowmenu(!showmenu)}/>
        <div className='navmenu' style={{display: showmenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>setshowmenu(false)} >Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='listitem' onClick={()=>setshowmenu(false)} >About</Link>
            <Link activeClass='active' to='container' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>setshowmenu(false)} >Projects</Link>
            <Link activeClass='active' to='profiles' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>setshowmenu(false)} >Our Team</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>setshowmenu(false)} >Contact Us</Link>
        </div>
    </nav>
  )}

export default Navbar