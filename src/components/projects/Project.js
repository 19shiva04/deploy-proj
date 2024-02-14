import React from 'react'
import { useState } from 'react'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import p5 from '../../assets/p5.png'
import p6 from '../../assets/p6.png'
import p7 from '../../assets/p7.png'
import './Project.css'
const Project = () => {
    const [cards]=useState(
        [
            {
                title:'Property 1',
                img:p1,
                land:'1170 SqFt',
                building:'1404 SqFt',
                area:'Malkapur',
                text:['1. With in HMDA limits, 15 Minutes drive to Hayat Nagar upcoming Metro Rail.',
                      '2. Close to 600 Acres Green Industrial Park TIF, Hayat Nagr Bus Depot, Many Engineering Collages and close to NH-9.',
                      '3. Affordable 2 BHK Independent House.',
                      '4. Fast moving area and good rental income guarantee.'
                     ],
        
            },
            {
                title:'Property 2',
                img:p3,
                area:'Raviyala',
                land:'1080 SqFt',
                building:'2160 SqFt',
                text:[
                  '1. With in HMDA limits, 2 Min. drive to ORR Exit - 13 and 5 Min. to RGIA Airport.',
                  '2. Close to World Trade Centre - Shamshabad, Hardware Park, Tata Aero Space, TCS - Adibatla, Wonder - La, Vijaya Mega Dairy and many more developed projects.',
                  '3. Ultra Luxury 3 to 4 BHK Duplex & Villas at affordable price.',
                  '4. Situated on 100 Raviryala - Kongara road, Fast moving area.',

               ],            
              },
            {
                title:'Property 3',
                img:p4,
                land:'1098 SqFt',
                building:'2305.5 SqFt',
                text:[
                  '1. With in  GHMC limits, 2 KMs drive to PVNR Express Way Pillar No. 216, 2 KMS before Budvel IT Park & ORR Exit - 17.',
                  '2. Close to Golden Mile, Neopolis, Mehdipatnam, Attapur, Gachibowli.',
                  '3. Ultra Luxury 4 BHK Duplex Villas at affordable price.',
                  '4. LRS paid, Plan Modification allowed and high chance for land price appriciation.',

               ],
                       },
            {
                title:'Property 4',
                img:p5,
                area:'Budvel',
                land:'2196 SqFt',
                building:'4611.6 SqFt',
                text:[
                  '1. With in  GHMC limits, 2 KMs drive to PVNR Express Way Pillar No. 216, 2 KMS before Budvel IT Park & ORR Exit - 17.',
                  '2. Close to Golden Mile, Neopolis, Mehdipatnam, Attapur, Gachibowli.',
                  '3. Ultra Luxury 3 to 5 BHK Duplex & Triplex Villas at affordable price.',
                  '4. LRS paid, Plan Modification allowed and high chance for land price appriciation. ',

               ],
                 },
            {
                title:'Property 5',
                img:p6,
                area:'Malkapur',
                land:'3600 SqFt',
                building:'1800 SqFt',
                text:[
                  '1. With in HMDA limits, 15 Minutes drive to Hayat Nagar upcoming Metro Rail.',
                  '2. Close to 600 Acres Green Industrial Park TIF, Hayat Nagr Bus Depot, Many Engineering Collages and abutting on National Highway.',
                  '3. Affordable 3 BHK Resort Style / Gazibo Theme Homes in 3600 Sft land.',
                  '4. Fast moving area and high chance for land price appriciation.',
               ],
              },
            {
                title:'Property 6',
                img:p7,
                land:'2304 SqFt',
                building:'1440 SqFt',
                area:'Balapur',
                text:[
                  '1. With in GHMC limits, 15 Minutes drive to LB Nagar, Nalgonda X Road existing  Metro Rail.',
                  '2. Close to TATA Aero Space, Hardware Pak, World Trade Center, RGIA and iTEK NUCLUES Malakpet.',
                  '3. Ultra Luxury 3 to 4 BHK Duplex & Triplex Villas at affordable price.',
                  '4. Fast moving area and high chance for land price appriciation.',
               ],
              }
        ])
        const [upcome]=useState(
          [
            {
              title:'Property 1',
              img:p2,
              area:'Hayatnagar',
              land:'9801 SqFt',
              building:'1350 SqFt',
              text:['1. With in GHMC limits, 10 Minutes drive to LB Nagar.',
              '2. Upcoming Metro Rail at Hayatnagar can reach in 5 Minutes.',
              '3. Close to iTEK NUCLEUS Malakpet, Super Speciality Hospital - Gaddiannaram, Hayat Nagr Bus Depot, Engineering Collages and close to NH-9. ',
              '4. Each flat 3 sides open.'
             ],           
             },
            ])
        
  return (

    <div>
      <br></br>
    <section>
      <br></br>
    <div className="container">
     <h1>On Going Projects</h1>
     <div className="cards">
        { 
        cards.map((card,i)=>(
       <div key={i} className="card">
         <h3 style={{textAlign:"center" }}> {card.title}</h3>
         <div className='forflex'>
         <div className='tempdiv'>
         <img className='img' src={card.img}></img>
         <p>Area : {card.area}</p>
         <p>Land Area : {card.land}</p>
         <p>building Area : {card.building}</p>
         
         <button onClick={()=>
        {
          document.getElementById('contact').scrollIntoView( {behavior : 'smooth'})
        }}
        className='btn'>Know More</button>
          </div>
         <div className='info'>
         {card.text.map((text,i)=>(
          <p key={i}>
          {text}
        </p>
       )) }
         </div>
         </div>
         
       </div>
        ))
        }
     </div>
   </div>
 </section>
 <section>
    <div className="container">
     <h1>Completed Projects</h1>
     <div className="cards">
        { 
        cards.map((card,i)=>(
       <div key={i} className="card">
         <h3 style={{textAlign:"center" }}> {card.title}</h3>
         <div className='forflex'>
         <div className='tempdiv'>
         <img className='img' src={card.img}></img>
         <p>Area : {card.area}</p>
         <p>Land Area : {card.land}</p>
         <p>building Area : {card.building}</p>
         
         <button onClick={()=>
        {
          document.getElementById('contact').scrollIntoView( {behavior : 'smooth'})
        }}
        className='btn'>Know More</button>
          </div>
         <div className='info'>
         {card.text.map((text,i)=>(
          <p key={i}>
          {text}
        </p>
       )) }
         </div>
         </div>
         
       </div>
        ))
        }
     </div>
   </div>
 </section><section>
    <div className="container">
     <h1>Upcoming Projects</h1>
     <div className="cards">
        { 
        upcome.map((card,i)=>(
       <div key={i} className="card">
         <h3 style={{textAlign:"center" }}> {card.title}</h3>
         <div className='forflex'>
         <div className='tempdiv'>
         <img className='img' src={card.img}></img>
         <p>Area : {card.area}</p>
         <p>Land Area : {card.land}</p>
         <p>building Area : {card.building}</p>
         
         <button onClick={()=>
        {
          document.getElementById('contact').scrollIntoView( {behavior : 'smooth'})
        }}
        className='btn'>Know More</button>
          </div>
         <div className='info'>
         {card.text.map((text,i)=>(
          <p key={i}>
          {text}
        </p>
       )) }
         </div>
         </div>
         
       </div>
        ))
        }
     </div>
   </div>
 </section>
 </div>
 
  )
}

export default Project