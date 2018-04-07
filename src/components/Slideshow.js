import React from 'react';

export default class Slideshow extends React.Component {
  state = {
    count: 0,
    slide: this.props.slides[0][0],
    caption: this.props.slides[0][1],
    buttonText: this.props.slides[0][2],
    buttonHref: this.props.slides[0][3],
    pauseSlideshow: false,
    slideshowInstanceIsRunning: false
  };

  componentDidMount() {
    this.changeSlide();
  }
  sendTo = (destination) => {
    window.location.href = this.state.buttonHref;
  }

  changeSlide = () => {
    if (this.state.slideshowInstanceIsRunning !== true) {
      this.setState(() => ({ slideshowInstanceIsRunning: true }));
      setTimeout(() => {
        if (this.state.pauseSlideshow !== true) {

          const maxCount = this.props.slides.length;
          let count = this.state.count;

          if (count < maxCount) count++;
          if (count === maxCount) count = 0;

          const slide = this.props.slides[count][0];
          const caption = this.props.slides[count][1];
          const buttonText = this.props.slides[count][2];
          const buttonHref = this.props.slides[count][3];

          //actual changes here. Set left/right. start left: if showing left, set right to the new one, then in .2 seconds fade left out to transparent. If showing right, set left to new, then in .2 seconds fade right out to transparent.
          this.setState(() => ({
            count,
            slide,
            caption,
            buttonText,
            buttonHref,
          }));

          setTimeout(this.changeSlide, 0);
        }
        this.setState(() => ({ slideshowInstanceIsRunning: false }));
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <div className = "slideshow">
          <img src = {this.state.slide}></img>
          <div className = "caption"
            onMouseEnter = {() => {
              this.setState(() => ({ pauseSlideshow: true }));
            }}
            onMouseLeave = {() => {
              this.setState(() => ({ pauseSlideshow: false }));
              setTimeout(this.changeSlide, 0);
            }}
            >
            <p>{this.state.caption}</p>
              <br />
            <button
              className = "caption__button"
              onClick = {this.sendTo.bind(this, this.state.buttonHref)}
            >
              {this.state.buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//Still need:
//crossfading
