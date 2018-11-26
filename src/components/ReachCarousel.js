import React from "react";
import Arrow from './Arrow.js'
import $ from 'jquery';
import Background from '../images/fast-forward.png'

const reachUrls = ["../images/reach1.png", '../images/reach2.png', '../images/reach3.png', '../images/reach4.png', '../images/reach5.png', '../images/reach6.png' ]


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

      <div id="cf7" className="shadow">

      <p id="cf7_controls" style={{justifyContent: 'center', overflow: 'visible'}}>
        <div className="pulse" style={{borderRadius: 35, marginTop: '2.5%', padding: '2%', marginLeft: '28%', height: 8, width: 8, backgroundImage: "url(" + Background + ")"}}>
        <span className="selected"> </span>
        </div>
      </p>


         <img className="opaque" src={require("../images/reach1.png")} ></img>
         <img src={require("../images/reach2.png")} ></img>
         <img src={require("../images/reach3.png")} ></img>
         <img src={require("../images/reach4.png")} ></img>
         <img src={require("../images/reach5.png")} ></img>
         <img src={require("../images/reach6.png")} ></img>

      </div>
    );
  }
}

export default ReachCarousel;
