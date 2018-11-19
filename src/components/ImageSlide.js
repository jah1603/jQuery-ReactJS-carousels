import React from "react";

const ImageSlide = ({ url }) => {


  return (
    <img className="screenshot" src={require("" + url)} ></img>
  );
}

export default ImageSlide;
