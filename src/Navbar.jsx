import './Navbar.css'
import React from 'react';
import logo from './assets/logo.png'; 


export default function Navbar(){
    return(
        <nav className="navbar w-screen flex flex-wrap  items-center fixed z-50 mt-0">
            <div className="navbar-container main-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="links mr-20 flex-1 flex flex-wrap items-center justify-evenly">
                <a href="#about" className=''>About</a>
                <a href="#services" className=''>Services</a>
                <a href="#team" className=''>Team</a>
                <a href="#contact" className=''>Contact Us</a>
            </div>
        </nav>
    )
}