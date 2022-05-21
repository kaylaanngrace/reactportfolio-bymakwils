
import React from "react";
import profilePic from '../../assets/images/';

function About() {
  return (
    <div>
      <p className="">Aspiring Full Stack Developer</p>
      <hr />
      <img className="" src={profilePic} alt="Makayla Wilson"/>
      <p className="">
        I am Makayla. I am a new developer studying FullStack development. 
      </p>
      <p className=""> 
            I'm an ambitious developer participating in the University of Minnesota Coding Bootcamp. 
            I am a hardworking individual with 5+ years of customer service experience. 
            Proven to be adept in independent and collaborative environments.
      </p>
    </div>
  );
}

export default About;
