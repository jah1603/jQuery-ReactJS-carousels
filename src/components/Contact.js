import React from "react";

const Contact = () => (
  <div className="contact">
    <h1 className="headline">Get in touch</h1>
    <p className="email">Feel free to contact me on <a href= "tel:+447810321157">07810321157</a> or at <a href="mailto:hendersonjamesalexander@gmail.com?Subject=Hey%20Gregor!" target="_top"> hendersonjamesalexander@gmail.com</a></p>
    <p>You can also find me on GitHub!</p>
    <div className="social-media">
        <a href="https://www.github.com/jah1603" alt="GitHub" target="_blank">
          <img src={require('../images/github.png')} height="80" width="80" alt="GitHub"/>
        </a>

      </div>
  </div>
);

export default Contact;
