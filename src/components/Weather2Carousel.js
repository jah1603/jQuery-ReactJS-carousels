import React from "react";
import Arrow from './Arrow.js'
import ImageSlide from './ImageSlide.js'
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
      currentImageIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {

    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    // this.slideAnimationScript();

    this.setState({
      currentImageIndex: index
    });
  }

  slideAnimationScript(){

  $(document).ready(function() {

    function disableSlide(){

      $("img.screenshot").removeClass("slide-in");

      setTimeout(reactivateSlide(), 200)

    }

    function reactivateSlide(){

      console.log("slide");

      $("img.screenshot").addClass("slide-in");

    }

    $("td").on('click', 'div', function() {

      setTimeout(disableSlide(), 200)

  })

})

}


  returnImage(index){
    switch(index) {
    case 0: return require("../images/w2walk1.png");
    case 1: return require("../images/w2walk2.png");
    case 2: return require("../images/w2wed1.png");
    case 3: return require("../images/w2wed3.png");
    case 4: return require("../images/w2golf1.png");
    case 5: return require("../images/w2golf2.png");
    case 6: return require("../images/w2golf3.png");

  }
  }

  render () {


    return (
      <div className="carousel">

      <table>
      <tr style={{ justifyContent: 'center'}}>

      <td style={{justifyContent: 'center', top: '50%', width: '10%', height: 1}}>
      <Arrow
        direction="left"
        clickFunction={ this.previousSlide }
        glyph="&#9664;"
        project='weather2'
        />

      </td>

      <td style={{width: '100%', height: '100%', justifyContent: 'center'}}>
         <img className="screenshot" src={this.returnImage(this.state.currentImageIndex)} ></img>
      </td>

      <td style={{width: '10%'}}>

       <Arrow
        direction="right"
        clickFunction={ this.nextSlide }
        glyph="&#9654;"
        project='weather2'
        />

        </td>

        </tr>
        </table>

      </div>
    );
  }
}

export default Weather2Carousel;
