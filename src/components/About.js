import React from "react";
// import pdf from '../files/cv.pdf';
import { Link } from "react-router-dom";


const About = () => (
  <div className="about">
    <h1 className="headline">About me</h1>
    <div className="about-paragraph">
      <p><strong>I am passionate about software development obsessed with the web. I love confronting a challenege head on and turning it into an opportunity for growth and learning.</strong>. <br/><br/>
      I recently graduated from <a href="https://codeclan.com/">CodeClan's</a> software development course in Edinburgh. Throughout the 16 week ct we woulund 8ree full-stack projects (you can check those out <a href="/projects" >here</a>). <br/><br/>
      I finished the course in September 2018 brimming with passion for the industry, equally so for front and back-end and their intersection. I am constantly learning and pushing myself to deepen my knowledge.<br/><br/>
      Before CodeClan I completed a Master of Engineering degree in Naval Architecture, graduating with Merit. The analytical thinking techniques that I learned in my degree remain hugely beneficial when up against a new programming challenge. While I'm not programming I enjoy travelling, playing piano and guitar, learning foreign languages and reading.</p>
    </div>
    <div className="about-photo">
      <img className="profile" src={require('../images/me1.jpg')} alt="James Henderson" />
    </div>
  </div>
);
export default About;
