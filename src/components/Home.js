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
  <div className='welcome-parent'>
  <div className="welcome-header" style={ sectionStyle }>
    <div className="welcome-message">
      <h1 className='welcome-title'>I'm James</h1>
      <h3 >I'm <span style={{color: 'steelgrey', fontWeight: 900, textShadow: '0 0 3px #000'}}>passionate</span> about finding creative solutions to digital problems</h3>
      <Link to='/portfolio'>
        <button className="button draw-border" type="button">Browse my portfolio</button>
      </Link>
    </div>
  </div>
  </div>
);

export default Home;
