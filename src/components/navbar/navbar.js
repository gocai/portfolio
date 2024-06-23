import React from 'react'
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactme from "../../assets/contactme.png";
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass = 'active' to = 'intro' spy = {true} smooth = {true} offset = {-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass = 'active' to = 'about' spy = {true} smooth = {true} offset = {-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass = 'active' to = 'works' spy = {true} smooth = {true} offset = {-5} duration={500} className="desktopMenuListItem">Portfolio</Link>
        </div>
        <button className="contactMeButton">
            <img src={contactme} alt="" className="contactMeIcon" />
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar