import React from 'react';

export default class Slideshow extends React.Component {
  state = {
    count: 0,
    slide: this.props.slides[0][0],
    caption: this.props.slides[0][1]
  };

  changeSlide = () => {
    const maxCount = this.props.slides.length;
    let count = this.state.count;

    if (count < maxCount) count++;
    if (count === maxCount) count = 0;

    const slide = this.props.slides[count][0];
    const caption = this.props.slides[count][1];

    this.setState(() => ({
      count,
      slide,
      caption
    }));
  }
  renderSlideshow = () => {
    //setInterval(this.changeSlide(), 5000);
    this.changeSlide();
  }
  render() {
    return (
      <div>
        <div id = "screen">
          {/*<p>count is {this.state.count}</p>*/}
          <img src = {this.state.slide}></img>
          <p>{this.state.caption}</p>
        </div>
        <button onClick = {this.changeSlide}>
          Change
        </button>
      </div>
    );
  }
}
