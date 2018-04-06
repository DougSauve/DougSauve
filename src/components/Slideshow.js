import React from 'react';

export default class Slideshow extends React.Component {
  state = {
    count: 0,
    slide: this.props.slides[0][0],
    caption: this.props.slides[0][1],
    buttonText: this.props.slides[0][2],
    buttonHref: this.props.slides[0][3]
  };

  componentDidMount() {
    setInterval(this.changeSlide, 7500);
  }

  sendTo = (destination) => {
    window.location.href = this.state.buttonHref;
  }

  changeSlide = () => {
    const maxCount = this.props.slides.length;
    let count = this.state.count;

    if (count < maxCount) count++;
    if (count === maxCount) count = 0;

    const slide = this.props.slides[count][0];
    const caption = this.props.slides[count][1];
    const buttonText = this.props.slides[count][2];
    const buttonHref = this.props.slides[count][3];

    this.setState(() => ({
      count,
      slide,
      caption,
      buttonText,
      buttonHref
    }));
  }
  renderSlideshow = () => {
    setInterval(this.changeSlide(), 5000);
    this.changeSlide();
  }
  render() {
    return (
      <div>
        <div className = "slideshow">
          <img src = {this.state.slide}></img>
          <div className = "caption">
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

//slow transitions, pause the slideshow when someone is hovering over caption.
