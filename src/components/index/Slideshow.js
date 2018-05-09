import React from 'react';

import SlideSlot from './SlideSlot';
import Slide from './Slide';

export default class Slideshow extends React.Component {

  //variables
  pauseSlideshow = false;
  slideshowInstanceIsRunning = false;
  count = 0;
  slides = [];

  state = {
    slide1: undefined,
    slide2: undefined,
  };


  changeSlide = () => {
    if (this.slideshowInstanceIsRunning !== true) {
      this.slideshowInstanceIsRunning = true;

      setTimeout(() => {
        if (this.pauseSlideshow === false) {

          const maxCount = this.slides.length;

          if (this.count < maxCount) this.count++;
          if (this.count === maxCount) this.count = 0;

          this.setState(() => ({
            slide2: this.state.slide1
          }));
          setTimeout(() => {
            this.setState(() => ({
              slide1: this.slides[this.count]
            }));
          }, 2000);


          setTimeout(this.changeSlide, 0);
        }
        this.slideshowInstanceIsRunning = false;
      }, 5000);
    }
  }
  pausingSlideshow = () => {
    this.pauseSlideshow = true;
  }
  unpausingSlideshow = () => {
    this.pauseSlideshow = false;
  }
  goToSlide = (count) => {
    //set page background to this image
    document.getElementsByClassName('slideshow__background')[0].style.backgroundImage = `url(${this.props.slides[this.count][0]})`;
    this.setState(() => ({
      slide1: this.slides[count],
      slide2: this.slides[count]
    }));
    this.count = count;
  }

  componentDidMount() {
    document.getElementsByClassName('slideshow__background')[0].style.backgroundImage = `url(${this.props.slides[0][0]})`;
    // create the array of slides:
    this.props.slides.map((slide, index) => {

      // check if there is a mobile image to display
      let desktopImage;
      let mobileImage;
      if (typeof this.props.slides[index][0] === 'object') {
        desktopImage = this.props.slides[index][0][0];
        mobileImage = this.props.slides[index][0][1];
      } else {
        desktopImage = this.props.slides[index][0];
        mobileImage = this.props.slides[index][0];
      }
      this.slides.push (
        <Slide
          desktopImage = {desktopImage}
          mobileImage = {mobileImage}
          caption = {this.props.slides[index][1]}
          buttonText = {this.props.slides[index][2]}
          buttonHref = {this.props.slides[index][3]}
          slidesLength = {this.props.slides.map((slide, index) => index)}
          changeSlide = {this.changeSlide}
          pausingSlideshow = {this.pausingSlideshow}
          unpausingSlideshow = {this.unpausingSlideshow}
          goToSlide = {this.goToSlide}
        />
      )
    });

    this.setState(() => ({
      slide1: this.slides[0],
      slide2: this.slides[0]
    }));

    setTimeout(this.changeSlide(), 0);
  }
  render() {
    return (
      <div className = "slideshow">
        {/* this is only needed so the first image doesn't appear to fade in. */}
        <div className = "slideshow__background" />
        <SlideSlot
          slide = {this.state.slide2}
          slotName = "slot2"
        />
        <SlideSlot
          slide = {this.state.slide1}
          slotName = "slot1"
        />
      </div>
    );
  }
}
