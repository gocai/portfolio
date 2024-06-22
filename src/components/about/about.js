import React from 'react';
import './about.css';
import diplomaIcon from '../../assets/diploma.png';
import teamworkIcon from '../../assets/teamwork.png';
import computerIcon from '../../assets/computer.png';

const About = () => {
  return (
    <section id="about">
      <span className="sectionTitle">
        <h2>About Me</h2>
      </span>
      <span className="sectionParagraph">
        I am an entry level web and game designer with a passion for creating websites, webapps, and video games! <br />
        I have intermediate knowledge in HTML, CSS, Javascript and Typescript, as well as C++ and C#.
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
            <img src={teamworkIcon} alt="" className="skillImg" />
            <div className="skillText">
                <h2>Personality</h2>
                <p>I thrive in both independent and team settings.</p>
            </div>
        </div>

        <div className="skillBar">
            <img src={computerIcon} alt="" className="skillImg" />
            <div className="skillText">
                <h2>bazinga</h2>
                <p>placeholder text</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;