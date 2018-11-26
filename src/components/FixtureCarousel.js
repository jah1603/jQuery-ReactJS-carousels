import React from "react";
import Arrow from './Arrow.js'
import $ from 'jquery';
import Background from '../images/fast-forward.png'
const imgUrls = ["../images/fixturepal1.png", '../images/fixturepal2.png', '../images/fixturepal3.png', '../images/fixturepal4.png']


class FixtureCarousel extends React.Component {

  constructor (props) {
    super(props);

    this.state = {

    };

  }

  crossfadeScript(numberOfPhotos){

    $(document).ready(function() {

      var counter = 1;

  $("#cf7-fixture-pal_controls").on('click', 'div', function() {
    console.log("counter", counter);
    console.log("numPhotos", numberOfPhotos);
    $("#cf7-fixture-pal img").removeClass("opaque");

    // var newImage = $(this).index();

    $("#cf7-fixture-pal img").eq(counter).addClass("opaque");

    console.log("image", $("#cf7-fixture-pal img").eq(counter));

    $("#cf7-fixture-pal_controls div").removeClass("selected");
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

      <div id="cf7-fixture-pal" className="shadow">

      <p id="cf7-fixture-pal_controls" style={{justifyContent: 'center', overflow: 'visible'}}>
        <div className="pulse" style={{borderRadius: 35, marginTop: '5%', padding: '2%', marginLeft: '28%', height: 8, width: 8, backgroundImage: "url(" + Background + ")"}}>
        <span className="selected"> </span>
        </div>
      </p>


         <img className="opaque" src={require("../images/fixturepal1.png")} ></img>
         <img src={require("../images/fixturepal2.png")} ></img>
         <img src={require("../images/fixturepal3.png")} ></img>
         <img src={require("../images/fixturepal4.png")} ></img>


      </div>
    );
  }
}

export default FixtureCarousel;
