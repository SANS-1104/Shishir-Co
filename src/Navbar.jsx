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
            <img src={logo} alt="Logo" className='logo'/>
            <nav ref={navRef}>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#team">Team</a>
                <a href="#contact">Contact</a>
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