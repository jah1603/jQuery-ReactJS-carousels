import React from "react";
import Arrow from './Arrow.js'
import $ from 'jquery';
import Background from '../images/fast-forward.png'
const imgUrls = ["../images/w2wweb1.png", '../images/w2wweb2.png',
  '../images/w2wweb3.png', '../images/w2wweb4.png'
]


class W2WCarousel extends React.Component {

  constructor (props) {
    super(props);

    this.state = {

    };

  }

  crossfadeScript(numberOfPhotos){

    $(document).ready(function() {

      var counter = 1;

  $("#cf7-weather2_controls").on('click', 'div', function() {

    $("#cf7-weather2 img").removeClass("opaque");

    $("#cf7-weather2 img").eq(counter).addClass("opaque");

    $("#cf7-weather2_controls div").removeClass("selected");
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

    this.crossfadeScript(imgUrls.length);

    return (

      <div id="cf7-weather2" className="shadow">

      <p id="cf7-weather2_controls" style={{justifyContent: 'center', overflow: 'visible'}}>
        <div className="pulse w2w" style={{backgroundImage: "url(" + Background + ")"}}>
        <span className="selected"> </span>
        </div>
      </p>


         <img className="opaque" src={require("../images/w2wweb1.png")} ></img>
         <img src={require("../images/w2wweb2.png")} ></img>
         <img src={require("../images/w2wweb3.png")} ></img>
         <img src={require("../images/w2wweb4.png")} ></img>


      </div>
    );
  }
}

export default W2WCarousel;
