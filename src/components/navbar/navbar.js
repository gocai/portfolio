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
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">Clients</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
        </div>
        <button className="contactMeButton">
            <img src={contactme} alt="" className="contactMeIcon" />
        </button>
    </nav>
  )
}

export default Navbar