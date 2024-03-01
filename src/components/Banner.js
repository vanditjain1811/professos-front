import React from 'react'
import banner from "../Images/Frame 49.png" 
import Marquee from 'react-fast-marquee'
import img1 from "../Images/Logos/Artboard-logo.png"
import img2 from "../Images/Logos/Corporate Professionals Logo.jpg"
import img3 from "../Images/Logos/Finvox Logo.png"
import img4 from "../Images/Logos/Transique-logo-final_.png"
import img5 from "../Images/Logos/Trchadha-logo-white.png"
import img6 from "../Images/Logos/felix_advisory_private_limited_logo.jpg"
import img7 from "../Images/Logos/og-mazars.png"

import "./Banner.css"

const Banner = () => {
  return (
    <div>
        <div className='banner'>
        <img src={banner} alt='h' />
        </div>
        <div className='marq'>
            <Marquee>
        <div className='image_wrapper'>
        <img src={img1} alt='img'/>
        </div>
        <div className='image_wrapper'>
        <img src={img2} alt='img'/>
        </div>
        <div className='image_wrapper'>
        <img src={img3} alt='img'/>
        </div>
        <div className='image_wrapper'>
        <img src={img4} alt='img'/>
        </div>
        <div className='image_wrapper'>
        <img src={img5} alt='img'/>
        </div>
        <div className='image_wrapper'>
        <img src={img6} alt='img'/>
        </div>
        <div className='image_wrapper'>
        <img src={img7} alt='img'/>
        </div>
        <div className='image_wrapper'>
        <img src={img1} alt='img'/>
        </div>
        <div className='image_wrapper'>
        <img src={img2} alt='img'/>
        </div>
        <div className='image_wrapper'>
        <img src={img3} alt='img'/>
        </div>
        <div className='image_wrapper'>
        <img src={img4} alt='img'/>
        </div>
        <div className='image_wrapper'>
        <img src={img5} alt='img'/>
        </div>
            </Marquee>
        </div>
        
    </div>
  )
}

export default Banner