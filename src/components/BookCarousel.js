import React from "react";
import Arrow from './Arrow.js'
import $ from 'jquery';
import Background from '../images/fast-forward.png'
const imgUrls = ["../images/story1.png", '../images/story2.png', '../images/story3.png', '../images/story4.png'
]


class BookCarousel extends React.Component {

  constructor (props) {
    super(props);

    this.state = {

    };

  }

  crossfadeScript(numberOfPhotos){

    $(document).ready(function() {

      var counter = 1;

  $("#cf7-story_controls").on('click', 'div', function() {
    console.log("counter", counter);
    console.log("numPhotos", numberOfPhotos);
    $("#cf7-story img").removeClass("opaque");

    // var newImage = $(this).index();

    $("#cf7-story img").eq(counter).addClass("opaque");

    console.log("image", $("#cf7-story img").eq(counter));

    $("#cf7-story_controls div").removeClass("selected");
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

      <div id="cf7-story" className="shadow">

      <p id="cf7-story_controls" style={{justifyContent: 'center', overflow: 'visible'}}>
        <div className="pulse story" style={{backgroundImage: "url(" + Background + ")"}}>
        <span className="selected"> </span>
        </div>
      </p>


         <img className="opaque" src={require("../images/story1.png")} ></img>
         <img src={require("../images/story2.png")} ></img>
         <img src={require("../images/story3.png")} ></img>
         <img src={require("../images/story4.png")} ></img>


      </div>
    );
  }
}

export default BookCarousel;
