import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

class Navbar extends React.Component {

  constructor(props){
    super(props);
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
            <NavLink to="/contact" onClick={this.revertClass} activeStyle={{ color: "white" }}><img className="navbar-icon" src={require("../images/contact2.png")} alt="home icon" width="40" height="40"></img></NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={this.revertClass} activeStyle={{ color: "white"}}><img className="navbar-icon" src={require("../images/folder2.png")} alt="home icon" width="40" height="40"></img></NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={this.revertClass} activeStyle={{ color: "white"}}><img className="navbar-icon" src={require("../images/user2.png")} alt="home icon" width="40" height="40"></img></NavLink>
          </li>
          <li>
            <NavLink exact to="/" onClick={this.revertClass} activeStyle={{ color: "white"}}><img className="navbar-icon" src={require("../images/home2.png")} alt="home icon" width="40" height="40"></img></NavLink>
          </li>
          <li className="website-title" id="title">
            <NavLink to="/" onClick={this.revertClass} activeStyle={{ color: "white", fontWeight: 'normal'}}>James A. Henderson</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
