import React from "react";
import Arrow from './Arrow.js'
import ImageSlide from './ImageSlide.js'
import Background from '../images/fast-forward.png'
import $ from 'jquery';

const imgUrls = ["../images/w2walk1.png", '../images/w2walk2.png',
  '../images/w2wed1.png',
 '../images/w2wed3.png', '../images/w2golf1.png', '../images/w2golf2.png',
 '../images/w2golf3.png'
]


class Weather2Carousel extends React.Component {

  constructor (props) {
    super(props);

    this.state = {

    };

  }

  crossfadeScript(numberOfPhotos){

    $(document).ready(function() {

      var counter = 1;

  $("#cf7-weather2_controls").on('click', 'div', function() {
    console.log("counter", counter);
    console.log("numPhotos", numberOfPhotos);
    $("#cf7-weather2 img").removeClass("opaque");

    // var newImage = $(this).index();

    $("#cf7-weather2 img").eq(counter).addClass("opaque");

    console.log("image", $("#cf7-weather2 img").eq(counter));

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
        <div className="pulse" style={{borderRadius: 35, marginTop: '0%', padding: '2%', marginLeft: '28%', height: 8, width: 8, backgroundImage: "url(" + Background + ")"}}>
        <span className="selected"> </span>
        </div>
      </p>


         <img className="opaque" src={require("../images/w2walk1.png")} ></img>
         <img src={require('../images/w2walk2.png')} ></img>
         <img src={require('../images/w2wed1.png')} ></img>
         <img src={require('../images/w2wed3.png')} ></img>
         <img src={require('../images/w2golf1.png')} ></img>
         <img src={require('../images/w2golf2.png')} ></img>
         <img src={require('../images/w2golf3.png')} ></img>

      </div>
    );
  }
}

export default Weather2Carousel;
