import React from "react";
import Background from '../images/Unapool.jpg';
import { Link } from "react-router-dom";

var sectionStyle = {
  backgroundImage: "url(" + Background + ")",
  maxWidth: "100%",
  height: "auto",
  backgroundSize: 'cover'
};

const Home = () => (
  <div className="welcome-header" style={ sectionStyle }>
    <div className="welcome-message">
      <h1>Hi, I'm James</h1>
      <h3>I'm a software developer based in Edinburgh</h3>
      <Link to='/projects'>
        <button className="button" type="button">View my work</button>
      </Link>
    </div>
  </div>
);

export default Home;
