import React from 'react';
import './about.css';
import diplomaIcon from '../../assets/diploma.png';
import computerIcon from '../../assets/computer.png';
import gamepadIcon from '../../assets/gamepad.png';

const About = () => {
  return (
    <section id="about">
      <span className="sectionTitle">
        <h2>About Me</h2>
      </span>
      <span className="sectionParagraph">
        I am a web and game designer with a passion for creating websites, webapps, and video games! <br />
        I have proficiency in HTML, CSS, Javascript and Typescript, as well as C++ and C#.
      </span>
      <div className="skillBars">

        <div className="skillBar">
            <img src={diplomaIcon} alt="" className="skillImg" />
            <div className="skillText">
                <h2>Education</h2>
                <p>I graduated with honors from UCSC with a B.S. in Computer Science Game Design!</p>
            </div>
        </div>

        <div className="skillBar">
            <img src={gamepadIcon} alt="" className="skillImg" />
            <div className="skillText">
                <h2>Game Design and Development</h2>
                <p>I have worked on web based games using JS,TS, and C++. I have also worked on several games using Unity and C++. </p>
            </div>
        </div>

        <div className="skillBar">
            <img src={computerIcon} alt="" className="skillImg" />
            <div className="skillText">
                <h2>Web Development</h2>
                <p>As a web developer, I focus on making user friendly websites and webapps. <br />
                My focus is in front end development using HTML, CSS, JS and TS, and back-end frameworks such as React, Angular, and Node.js.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;