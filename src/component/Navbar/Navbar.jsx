import React from 'react';
import "./Navbar.css"
import LogoImg from "../../assets/images/w-logo-33581.png"
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <>
    <nav>
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={LogoImg} alt="William Logo image"/>
            </div>
            <div className="menu-icon">
                {click ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    </nav>
    </>
  )
}
