import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    this.changeNavClass = this.changeNavClass.bind(this);
    this.revertClass = this.revertClass.bind(this);
  }

  changeNavClass() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className = "responsive";
    } else {
      x.className = "navbar";
    }
  }

  revertClass() {
    var x = document.getElementById("myTopnav");
    if (x.className === "responsive") {
      x.className = "navbar";
    }
  }

  render() {
    return(
      <div className="navbar-header">
        <ul className="navbar" id="myTopnav">
          <li>
            <a href="javascript:void(0);" class="icon" onClick={this.changeNavClass}>
              <FaBars />
            </a>
          </li>
          <li>
            <NavLink to="/contact" onClick={this.revertClass} activeStyle={{ color: "white" }}><img className="navbar-icon" src={require("../images/contact.png")} alt="home icon" width="40" height="40"></img></NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={this.revertClass} activeStyle={{ color: "white"}}><img className="navbar-icon" src={require("../images/profiles.png")} alt="home icon" width="40" height="40"></img></NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={this.revertClass} activeStyle={{ color: "white"}}><img className="navbar-icon" src={require("../images/man.png")} alt="home icon" width="40" height="40"></img></NavLink>
          </li>
          <li>
            <NavLink exact to="/" onClick={this.revertClass} activeStyle={{ color: "white"}}><img className="navbar-icon" src={require("../images/home.png")} alt="home icon" width="40" height="40"></img></NavLink>
          </li>
          <li className="website-title" id="title">
            <NavLink to="/" onClick={this.revertClass} activeStyle={{ color: "black", fontWeight: 'normal'}}>James A. Henderson</NavLink>
          </li>
        </ul>
      </div>
    )
  }

}

export default Navbar;
