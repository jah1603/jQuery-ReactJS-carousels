import React, { Component } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </React.Fragment>
      </Router>
    );
  }


}

export default Main;
