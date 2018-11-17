import React from "react";
// import pdf from '../files/cv.pdf';
import { Link } from "react-router-dom";


const About = () => (
  <div className="about">
    <h1 className="headline">About me</h1>
    <div className="about-paragraph">
      <p><strong>I am passionate about software development and all things web. I love being able to turn complex problems into great looking user interfaces</strong>. <br/><br/>
      I recently graduated from <a href="https://codeclan.com/">CodeClan's</a> software development course in Edinburgh. Throughout the 16 week course I developed strong programming skills with a particular focus on web development. Every week I came into class excited about the new content we would be learning, whether it be Ruby, Java, or JavaScript. The course involved around 800 hours of class time and personal study, daily pair programming labs and three full-stack projects (you can check those out <a href="/projects" >here</a>). <br/><br/>
      I finished the course in September 2018 with a new found passion for software development, particularly using front-end technologies to create dynamic, modern looking UIs. The power of JavaScript still amazes me in its ability to craft incredible websites. I am eager to learn more and continue to seek out new challenges and opportunities.<br/><br/>
      Before CodeClan I completed a Master of Engineering degree in Naval Architecture, graduating with Merit. The analytical thinking techniques that I learned in my degree remain hugely beneficial when up against a new programming challenge. While I'm not programming I enjoy travelling, playing piano and guitar, learning foreign languages and reading.</p>
    </div>
    <div className="about-photo">
      <img className="profile" src={require('../images/profile.jpg')} alt="James Henderson" />
    </div>
  </div>
);
export default About;
