import React from "react";
import Arrow from './Arrow.js'
import $ from 'jquery';
import Background from '../images/fast-forward.png'

const reachUrls = ["../images/reach1.png", '../images/reach7.png', '../images/reach8.png', '../images/reach9.png', '../images/reach10.png', '../images/reach11.png', '../images/reach12.png', '../images/reach13.png', '../images/reach14.png', '../images/reach15.png', '../images/reach16.png', '../images/reach17.png', '../images/reach3.png', '../images/reach18.png', '../images/reach19.png']


class ReachCarousel extends React.Component {

  constructor (props) {
    super(props);

    this.state = {

    };

  }

  crossfadeScript(numberOfPhotos){

    $(document).ready(function() {

      var counter = 1;

  $("#cf7_controls").on('click', 'div', function() {
    // console.log("counter", counter);
    // console.log("numPhotos", numberOfPhotos);
    $("#cf7 img").removeClass("opaque");

    // var newImage = $(this).index();

    $("#cf7 img").eq(counter).addClass("opaque");

    // console.log("image", $("#cf7 img").eq(counter));

    $("#cf7_controls div").removeClass("selected");
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

    this.crossfadeScript(reachUrls.length);

    return (

      <div id="cf7">

      <p id="cf7_controls" style={{justifyContent: 'center', overflow: 'visible'}}>
        <div className="pulse reach-pulse" style={{backgroundImage: "url(" + Background + ")"}}>
        <span className="selected"> </span>
        </div>
      </p>


         <img className="opaque" src={require("../images/reach1.png")} ></img>
         <img src={require("../images/reach7.png")} ></img>
         <img src={require("../images/reach8.png")} ></img>
         <img src={require("../images/reach9.png")} ></img>
         <img src={require("../images/reach10.png")} ></img>
         <img src={require("../images/reach11.png")} ></img>
         <img src={require("../images/reach12.png")} ></img>
         <img src={require("../images/reach13.png")} ></img>
         <img src={require("../images/reach14.png")} ></img>
         <img src={require("../images/reach15.png")} ></img>
         <img src={require("../images/reach16.png")} ></img>
         <img src={require("../images/reach17.png")} ></img>
         <img src={require("../images/reach3.png")} ></img>
         <img src={require("../images/reach18.png")} ></img>
         <img src={require("../images/reach19.png")} ></img>

      </div>
    );
  }
}

export default ReachCarousel;
