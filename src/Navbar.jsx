import './Navbar.css'
import React from 'react';
import logo from './assets/logo.png'; 


export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-container main-logo">
                <img src={logo} alt="Logo" />
            </div>
        </nav>
    )
}