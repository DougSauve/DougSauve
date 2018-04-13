import React from 'react';

export default class Slide extends React.Component {
  sendTo = (destination) => {
    window.location.href = this.props.buttonHref;
  }

  render() {
    return (
      <div className = "slide">

        <img className = "slide__image" src = {this.props.slide}></img>
        <div className = "slide__caption"
          onMouseEnter = {() => {
            this.props.pausingSlideshow();
          }}
          onMouseLeave = {() => {
            this.props.unpausingSlideshow();
            setTimeout(this.props.changeSlide, 0);
          }}
          >
          <p>{this.props.caption}</p>
            <br />
          <button
            className = "slide__caption__button"
            onClick = {this.sendTo.bind(this, this.props.buttonHref)}
          >
            {this.props.buttonText}
          </button>

          {/* slide chooser */}
          <div className = "chooser">
            {
              this.props.slidesLength.map((index) => {
                return (
                  <div
                    key = {index}
                    className = "chooser__button"
                    onClick = {this.props.goToSlide.bind(this, index)}
                    >
                      o
                  </div>
                  );
                })
              }
          </div>

        </div>
      </div>
    );
  }
}
