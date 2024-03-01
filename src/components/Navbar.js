import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    
    <div className='nav'>
    <div className="navbar-brand">
       
         Professos
        
      </div>

    <div className="navbar-menu">
        <div className="navbar-end">
          <div  className="navbar-item">
            Home
          </div>
          <div  className="navbar-item">
            About
          </div>
          <div  className="navbar-item">
            Services
          </div>
          <div  className="navbar-item">
            Contact
          </div>
          <div className="navbar-item">
          
              <button  className="button is-primary">
                Login
              </button>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar