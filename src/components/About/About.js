import React from "react";
import profilePic from '../../assets/images/profilepic.jpeg';

function About() {
  return (
    <section className="my-5">
      <h2 className="about">Aspiring Full Stack Developer</h2>
      <img className="my-2" src={profilePic} alt="Makayla Wilson"/>
      <div className="my-2">
        <p> 
          I am Makayla. I am a new developer studying FullStack development. I'm an ambitious young adult participating in the University of Minnesota Coding Bootcamp. I am also a hardworking individual with 5+ years of customer service experience. Proven to be adept in independent and collaborative environments.
        </p>
      </div>
    </section>
  );
}

export default About;