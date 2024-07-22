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
        <header>
            <a href="/"><img src={logo} alt="Logo" className='logo'/></a>
            <nav ref={navRef}>
                <a href="/whoWe">Who We Are</a>
                <a href="/team" className="mr-2" >Our Team</a>
                <a href="/gst" className="mr-2">GST</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact Us</a>
                <button onClick={showNavBar} className='nav-btn nav-close-btn'>
                    <FaTimes />
                </button>
            </nav>
            <button onClick={showNavBar} className='nav-btn'>
                <FaBars />
            </button>
        </header>
    )
}