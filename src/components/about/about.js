import React from 'react';
import './about.css';
import diplomaIcon from '../../assets/diploma.png';
import teamworkIcon from '../../assets/teamwork.png';
import computerIcon from '../../assets/computer.png';

const About = () => {
  return (
    <section id="about">
      <span className="sectionTitle">
        About Me
      </span>
      <span className="sectionParagraph">
        I am a cheesemaker who make some good cheese
      </span>
      <div className="skillBars">

        <div className="skillBar">
            <img src={diplomaIcon} alt="" className="skillImg" />
            <div className="skillText">
                <h2>Education</h2>
                <p>I have a B.S. in Computer Science Game Design from UCSC</p>
            </div>
        </div>

        <div className="skillBar">
            <img src={teamworkIcon} alt="" className="skillImg" />
            <div className="skillText">
                <h2></h2>
                <p></p>
            </div>
        </div>

        <div className="skillBar">
            <img src={computerIcon} alt="" className="skillImg" />
            <div className="skillText">
                <h2></h2>
                <p></p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;