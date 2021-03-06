import React from 'react';

export default class Slide extends React.Component {

  sendTo = (destination) => {
    window.location.href = this.props.buttonHref;
  }

  chooseImage = () => {
    if (window.innerWidth <= 450) {
      return this.props.mobileImage;
    } else {
      return this.props.desktopImage;
    }
  }

  render() {
    return (
      <div className = "slide">
        {this.chooseImage()}

        <div className = "slide__box"
          onMouseEnter = {() => {
            this.props.pausingSlideshow();
          }}
          onMouseLeave = {() => {
            this.props.unpausingSlideshow();
            setTimeout(this.props.changeSlide, 0);
          }}
        >
          {/* caption */}
          <p className = "slide__box__caption">
            {this.props.caption}
          </p>

          <br />
          {/* button */}
          <div
            className = "slide__box__button"
            onClick = {this.sendTo.bind(this, this.props.buttonHref)}
          >
            <span>
              {this.props.buttonText}
            </span>
          </div>

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
