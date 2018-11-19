import React from "react";
import Arrow from './Arrow.js'
import ImageSlide from './ImageSlide.js'
const imgUrls = ["../images/reach1.png", '../images/reach2.png', '../images/reach3.png', '../images/reach4.png']


class Carousel extends React.Component {

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
    case 0: return require("../images/reach1.png");
    case 1: return require("../images/reach2.png");
    case 2: return require("../images/reach3.png");
    case 3: return require("../images/reach4.png");

  }
  }

  render () {
    return (
      <div className="carousel">

      <Arrow
        direction="left"
        clickFunction={ this.previousSlide }
        glyph="&#9664;" />

         <img className="screenshot" src={this.returnImage(this.state.currentImageIndex)} ></img>

       <Arrow
        direction="right"
        clickFunction={ this.nextSlide }
        glyph="&#9654;" />

      </div>
    );
  }
}

export default Carousel;
