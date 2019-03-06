import React from "react";
import Arrow from './Arrow.js'
import $ from 'jquery';
import Background from '../images/fast-forward.png'

const nuvUrls = ["../images/NüV2.png", "../images/NüV3.png", '../images/NüV4.png', '../images/NüV5.png', '../images/NüV6.png', '../images/NüV7.png', '../images/NüV8.png', '../images/NüV9.png']

class NuVCarousel extends React.Component {

  constructor (props) {
    super(props);

    this.state = {

    };

  }

  crossfadeScript(numberOfPhotos){

    $(document).ready(function() {

      var counter = 1;

  $("#cf7_controls-nuv").on('click', 'div', function() {

    $("#cf7-nuv img").removeClass("opaque");

    $("#cf7-nuv img").eq(counter).addClass("opaque");

    $("#cf7_controls-nuv div").removeClass("selected");
    $(this).addClass("selected");

    if (counter === numberOfPhotos - 1){
      counter = 0;
    }

    else {

    counter++;

  }

  });
});
  }

  render () {

    this.crossfadeScript(nuvUrls.length);

    return (

      <div id="cf7-nuv" className="shadow">

      <p id="cf7_controls-nuv" style={{justifyContent: 'center', overflow: 'visible'}}>
        <div className="pulse nuv-pulse" style={{backgroundImage: "url(" + Background + ")"}}>
        <span className="selected"> </span>
        </div>
      </p>

         <img className="opaque" src={require("../images/NüV2.png")} ></img>
         <img src={require("../images/NüV3.png")} ></img>
         <img src={require("../images/NüV4.png")} ></img>
         <img src={require("../images/NüV5.png")} ></img>
         <img src={require("../images/NüV6.png")} ></img>
         <img src={require("../images/NüV7.png")} ></img>
         <img src={require("../images/NüV8.png")} ></img>
         <img src={require("../images/NüV9.png")} ></img>

      </div>
    );
  }
}

export default NuVCarousel;
