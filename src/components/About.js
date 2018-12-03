import React from "react";
// import pdf from '../files/cv.pdf';
import { Link } from "react-router-dom";


const About = () => (
  <div className="about">
    <h1 className="headline">About</h1>
    <div className="about-paragraph">
      <p><strong>I am passionate about software development and fascinated by the web. I love confronting a programming challenge head on and turning it into an opportunity for growth and learning.</strong> <br/><br/>
      I recently finished <a href="https://codeclan.com/">CodeClan's</a> software development course in Edinburgh. During the 4-month course I gained hundreds of hours of practical programming experience and took part in 3 full-stack projects. <br/><br/>
      I finished the course in September 2018 brimming with passion for the industry, equally so for front and back end and how they interact. I am constantly learning and pushing myself to deepen my knowledge, throwing myself into tough personal software projects for pure pleasure.<br/><br/>
      Before CodeClan I did a five-year MEng degree in Naval Architecture, graduating with Merit. Analytical thinking lies at the heart of what I do, and this - coupled with my great communication skills - is hugely beneficial when up against a new programming challenge in a team. While I'm not programming I enjoy travelling, playing piano and guitar, playing squash, learning foreign languages and reading.</p>
    </div>
    <div className="about-photo">
      <img className="profile" src={require('../images/me1.jpg')} alt="James Henderson" />
    </div>
  </div>
);
export default About;
