import "./intro.css";
import React from 'react'
import {Link} from 'react-scroll';
import hireicon from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
            <span className="hello">Hello! </span>
            <span className="introText">I'm 
             <span className="introName"> Gordon Cai,</span> 
            </span>
             a Web and Game Developer
            <p className="introParagraph">
                I'm an entry level Web and Game Developer 
                looking for <br /> opportunities in the workplace.
            </p>
            <Link><button className="hireMeButton"><img src={hireicon} alt="Hire Me" className="hireMeImg"/>Hire Me</button></Link>
      </div>
      <img src="" alt="" className="backgroundImage" />
    </section>
    
  )
}

export default Intro