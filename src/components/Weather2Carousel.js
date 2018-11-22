import React from "react";
import Arrow from './Arrow.js'
import ImageSlide from './ImageSlide.js'
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

    this.setState({
      currentImageIndex: index
    });
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

      <Arrow
        direction="left"
        clickFunction={ this.previousSlide }
        glyph="&#9664;"
        project="weather2" />

         <img className="weather-screenshot" src={this.returnImage(this.state.currentImageIndex)} ></img>

       <Arrow
        direction="right"
        clickFunction={ this.nextSlide }
        glyph="&#9654;"
        project='weather2' />

      </div>
    );
  }
}

export default Weather2Carousel;
