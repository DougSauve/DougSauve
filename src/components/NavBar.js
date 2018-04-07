/* eslint-disable */

import React from 'react';

//import NavBar-Selected from './NavBar-Selected';

class NavBar extends React.Component {

  sendTo(destination) {
    window.location.href = destination;
  };

  showCurrentLocation(buttonDestination) {
    if (buttonDestination[1] === window.location.pathname) {
      return (
        <div className = "current-location">
          {buttonDestination[0]}
        </div>
      );
    }
  }

  componentDidMount() {

    const buttons = document.getElementsByClassName('nav-bar')[0].childNodes;

    const color = this.props.color;

    if (this.props.color) {
      buttons.forEach((button) => {
        button.style.color = color;
        button.style.borderLeftColor = color;
        button.style.boxShadow = "1px 0 4px " + color;
        button.onmouseenter = () => {
          button.style.color = "purple";
        };
        button.onmouseleave = () => {
          button.style.color = color;
        };
      });
    }
  }

  render() {
    return (
      <div className = "nav-bar">

        {
          /* eslint-disable */
          this.props.dests.map((dest) => {
            return <div
              className = "button"
              key = {dest[1]}
              onClick = {this.sendTo.bind(this, dest[1])}
            >
              {dest[0]}
              <div>{this.showCurrentLocation(dest)}</div>
            </div>
          })
        }
      </div>
    );
  }
}

export { NavBar as default };
