import React from "react";
import profilePic from '../../assets/images/profilepic.jpeg';

function About() {
  return (
    <div>
      <p className="">Aspiring Full Stack Developer</p>
      <img className="" src={profilePic} alt="Makayla Wilson"/>
      <p className="">
        I am Makayla. I am a new developer studying FullStack development. 
      </p>
      <p className=""> 
            I'm an ambitious young adult participating in the University of Minnesota Coding Bootcamp. 
            I am also a hardworking individual with 5+ years of customer service experience. 
            Proven to be adept in independent and collaborative environments.
      </p>
    </div>
  );
}

export default About;