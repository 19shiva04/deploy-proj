import React from 'react'
import './About.css'
import homeicon from '../../assets/homeicon.png';
import building from '../../assets/building.png';
import consulting from '../../assets/consulting.png';
import realestate from '../../assets/realestate.png';
const About = () => {
  return (
    <section id="skills">
        <span className='skillTitle'>What we do</span>
        <span className='skillDesc'>We are a full-service construction company that specializes in residential homes, industrial facilities, consulting, and real estate.<br/>We are committed to providing our customers with high-quality, affordable, and sustainable construction solutions.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={homeicon} alt="homeicon" className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Resedential Homes</h2>
                    <p>Crafting spaces, building futures.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={building} alt="building" className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2> Industrial Facilities</h2>
                    <p>From homes to industries, we construct your dreams.</p>
                </div>
            </div><div className='skillBar'>
                <img src={consulting} alt="consulting" className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Consulting</h2>
                    <p>Expert guidance, seamless execution, lasting results.</p>
                </div>
            </div><div className='skillBar'>
                <img src={realestate} alt="realestate" className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Real Estate</h2>
                    <p>Your trusted partner in construction excellence.</p>
                </div>
            </div>
        </div>


    </section>
  )
}

export default About