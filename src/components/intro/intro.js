import React from 'react'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <div><section className="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Gordon</span><br />Front End Developer</span>
            <p className="introPara">I am an entry level Front End Developer with a passion</p>
            <Link><button className="btn">Hire Me</button></Link>
        </div>
        <img src="" alt="" className="bg" />
    </section>

    </div>
  )
}

export default Intro