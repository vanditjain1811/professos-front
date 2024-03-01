import React from 'react'
import "./Clientsays.css"
import img1 from "../Images/KPMG_logo.svg" 
import img2 from "../Images/wesley-tingey-JOhjfzjeJLw-unsplash.svg"

const Clientsays = () => {
  return (
    <div>
        <div className='heading'>
            <h1>See what our clients say...</h1>

        </div>
        <div className='cardwrap'>
        <div className='cl-card'>
            <img src={img2} alt=''/>
            <p>
            Diam donec adipiscing tristique risus nec feugiat in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Tempus iaculis urna id volutpat lacus. Ornare suspendisse sed nisi lacus sed. Non tellus orci ac auctor augue mauris augue neque.

            </p>
            
            <h4>Client’s Name (LinkedIn profile)</h4>
            <img className="img2" src={img1} alt='' />
        </div>
        <div className='cl-card'>
            <img src={img2} alt=''/>
            <p>
            Diam donec adipiscing tristique risus nec feugiat in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Tempus iaculis urna id volutpat lacus. Ornare suspendisse sed nisi lacus sed. Non tellus orci ac auctor augue mauris augue neque.

            </p>
            <h4>Client’s Name (LinkedIn profile)</h4>
            <img className="img2" src={img1} alt='' />
        </div>
        <div className='cl-card'>
            <img src={img2} alt=''/>
            <p>
            Diam donec adipiscing tristique risus nec feugiat in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Tempus iaculis urna id volutpat lacus. Ornare suspendisse sed nisi lacus sed. Non tellus orci ac auctor augue mauris augue neque.

            </p>
            <h4>Client’s Name (LinkedIn profile)</h4>
            <img className="img2" src={img1} alt='' />
        </div>
        </div>
    </div>
  )
}

export default Clientsays