import React from "react";

const Contact = () => (
  <div className="contact">
    <h1>Contact me</h1>
    <p className="email">To have a conversation, contact me at <a href= "tel:+447810321157">07810321157</a> or <a href="mailto:hendersonjamesalexander@gmail.com?Subject=Hey%20Gregor!" target="_top"> hendersonjamesalexander@gmail.com</a></p>
    <p>or find me on:</p>
    <div className="social-media">
        <a href="https://www.linkedin.com/in/jamesahenderson1603/" alt="LinkedIn" target="_blank">
          <img src={require('../images/linkedin.png')} height="80" width="80" alt="LinkedIn"/>
        </a>
        <a href="https://www.github.com/jah1603" alt="GitHub" target="_blank">
          <img src={require('../images/github.png')} height="80" width="80" alt="GitHub"/>
        </a>

      </div>
  </div>
);

export default Contact;
