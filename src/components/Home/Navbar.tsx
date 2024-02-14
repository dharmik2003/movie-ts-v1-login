import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { IoMdNotificationsOutline } from "react-icons/io";


const Navbar = () => {
  return (
    <div>
          <div className="navbar">
            <div className="leftpartnav">
                <img src="https://github.com/dharmik2003/poster_movie/blob/main/Navbar/tix%20id%201.png?raw=true"/>
            </div>  

            <div className="rightpartnav">
                <div className="nav-text">
                    {/* <a href="">Home</a> */}
                    <NavLink to="/">Home</NavLink>
                </div>
                <div className="nav-text">
                    <a href="">Tiket Saya</a>
                </div>
                <div className="nav-text">
                    <a href="">TIX ID News</a>
                </div>
                
                <div className="navicon nav-text">
                    <a href=""><IoMdNotificationsOutline className='notifIcon' /></a>
                </div>

                {/* <div className="circle">
                    D
                </div> */}
                <div  className='home-nav-Login-but' >
                    <h4 className='home-nav-login-text'>Log In</h4>
                </div>
                {/* <div  className='home-nav-Login-but' >
                    <h4 className='home-nav-login-text'>Log Out</h4>
                </div> */}
                   
            </div>
        </div>
    </div>
  )
}

export default Navbar