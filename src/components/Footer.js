import React from 'react'
import "./Footer.css"
import img1 from "../Images/Group 427319375.svg"
import img2 from "../Images/Group 42731935.svg"
import img3 from "../Images/Group 427319377.svg"
import img4 from "../Images/Group 427319376.svg"

const Footer = () => {
  return (
    <div className='footer'>
<div className='upfooter'>
<div className='branding'>
<div className='logo'>
<img src={img1} alt=''/>
</div>
<div className='brandname'>
<h2>Professos</h2>
</div>
</div>

<div className='boxs'>
  <div className='box1'>
<ul>
  <li>Feedback</li>
  <li>Privacy Policy</li>
</ul>
  </div>
  <div className='box2'>
<ul>
  <li>Terms of use</li>
  <li>Refund Policy</li>
</ul>
  </div>
  <div className='box3'>
<ul>
  <li>Help and Support</li>
  <li>Contact Us</li>
</ul>
  </div>
  

</div>

</div>
<div className="hrline">
<hr class="hr2" />
</div>
 <div className='lowfooter'>
  <div className='social'>
    <div className='handles'>
      <img src={img2} alt=''/>
    </div>
    <div className='handles'>
      <img src={img3} alt=''/>
    </div>
    <div className='handles'>
      <img src={img4} alt=''/>
    </div>
  </div>
  </div>   
    </div>
  )
}

export default Footer