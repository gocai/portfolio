import React from 'react'
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactme from "../../assets/contactme.png";
import pdf from '../../assets/Resume.pdf';

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
        <Link to='contactpage' spy={true} smooth={true} offset={-200} duration={500} className="desktopMenuListItem">
        <button className="contactMeButton">
        <img src={contactme} alt="Contact Me Icon" className="contactMeIcon" />
        Contact Me
        </button>
        </Link>
        <button className="portfolioDownloadButton">
          <a href={pdf} target="_blank" rel="noreferrer">Portfolio<br />Download</a> 
        </button>
    </nav>
  )
}

export default Navbar