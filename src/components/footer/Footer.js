import React from 'react'
import './Footer.css'


var date=new Date();
var year=date.getFullYear();
const Footer = () => {
  return (
    <div>
    <footer className='footer'>
      
        <h2>Copyright &#169; {year} NCC . All rights reserved.</h2>
    
    <div className='contact'>
        <p>Address:1st Floor, 2-1-61,Behind Shivalayam</p>
        <p>&emsp;&emsp;&emsp;&emsp;Upperpally, Hyderabad.</p>
        <p>Phone No : +91 8143272717</p>
      </div>

      </footer>
    </div>
  )
}

export default Footer
