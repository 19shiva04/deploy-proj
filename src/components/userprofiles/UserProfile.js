import React from 'react'
import profilepic from '../../assets/profilepic.png'
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className='profiles'>
         <h1 className='title'>Our Team</h1>
    <div className='upc'>
        <div className='gradient'></div>
        <div className='profile-down'>
            <img src={profilepic} alt=" "/>
            <div className='profile-title'>Vergum Maheshwari</div>
            <p className="own" align="center">Proparaiter</p>
            <div className='profile-desc'>
            Masters in Bussiness Administration with Finance specialization Postgraduated from Osmania University affiliated college. Having 5 years of experience in the fields of land acquisition and construction.
            </div>
            <div className='profile-btn'><a href="mailto:shivasaiyo@gmail.com">contact me</a></div>
        </div>
        
    </div>
    <div className='upc'>
        <div className='gradient'></div>
        <div className='profile-down'>
            <img src={profilepic} alt=" "/>
            <div className='profile-title'>G. Bala Krishna</div>
            <p className="own" align="center">Planning - Lead</p>
            <div className='profile-desc'>
            Licensed Surveyor cum Planner with 30 years of rich experience in the fields of Surveying, Planning, Execution, Quantity Surveying and Vastu Compliance.
            </div>
            <div className='profile-btn'><a href="mailto:shivasaiyo@gmail.com">contact me</a></div>
        </div>
        
    </div><div className='upc'>
        <div className='gradient'></div>
        <div className='profile-down'>
            <img src={profilepic} alt=" "/>
            <div className='profile-title'>V. N. Rao</div>
            <p className="own" align="center">Advisor - Real Estate</p>
            <div className='profile-desc'>
            Civil Engineer with 21 Years of professional experience in Real Estate Industry, worked with many domestic and international companies, seasoned for more than two decades in Residential, Commercial and Retail developments across the country.
            </div>
            <div className='profile-btn'><a href="mailto:shivasaiyo@gmail.com">contact me</a></div>
        </div>
        
    </div>
    


    </div>
  )
}

export default UserProfile