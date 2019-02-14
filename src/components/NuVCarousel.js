import React from "react";
import Arrow from './Arrow.js'
import $ from 'jquery';
import Background from '../images/fast-forward.png'

const nuvUrls = ['../images/nuv09.png', "../images/nuv01.png", "../images/nuv02.png", '../images/nuv03.png', '../images/nuv04.png', '../images/nuv05.png', '../images/nuv06.png', '../images/nuv07.png', '../images/nuv08.png']

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

         <img className="opaque" src={require("../images/nuv09.png")} ></img>
         <img src={require("../images/nuv01.png")} ></img>
         <img src={require("../images/nuv02.png")} ></img>
         <img src={require("../images/nuv03.png")} ></img>
         <img src={require("../images/nuv04.png")} ></img>
         <img src={require("../images/nuv05.png")} ></img>
         <img src={require("../images/nuv06.png")} ></img>
         <img src={require("../images/nuv07.png")} ></img>
         <img src={require("../images/nuv08.png")} ></img>

      </div>
    );
  }
}

export default NuVCarousel;
