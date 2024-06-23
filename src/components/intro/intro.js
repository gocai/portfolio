import "./intro.css";
import React from 'react'


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
                I'm a Web and Game Developer 
                looking for <br /> opportunities in the workplace.
            </p>
      </div>
      <img src="" alt="" className="backgroundImage" />
    </section>
    
  )
}

export default Intro