import './Navbar.css'
// import React from 'react';
import { useRef, React } from 'react';
import logo from './assets/logo.png'; 
import {FaBars , FaTimes} from 'react-icons/fa'


export default function Navbar(){
    const navRef = useRef();
    const showNavBar = ()=>{
        navRef.current.classList.toggle('responsive_nav')
    }
    return(
        <nav className="navbar header w-full flex flex-wrap justify-between items-center fixed z-50 mt-0">
            <div className="navbar-container main-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="links mr-20 flex-1 flex flex-wrap items-center justify-evenly" ref={navRef}>
                <a href="#about" className=''>About</a>
                <a href="#services" className=''>Services</a>
                <a href="#team" className=''>Team</a>
                <a href="#contact" className=''>Contact Us</a>
                <button onClick={showNavBar} className='nav-btn nav-close-btn'>
                    <FaTimes />
                </button>
            </div>
            <button onClick={showNavBar} className='nav-btn'>
                <FaBars />
            </button>
        </nav>
    )
}