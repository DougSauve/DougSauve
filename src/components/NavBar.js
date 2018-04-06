/* eslint-disable */

import React from 'react';

class NavBar extends React.Component {

  sendTo(destination) {
    window.location.href = destination;
  };

  render() {
    return (
      <div className = "nav-bar">
        <h1>Hi, I'm Doug. I create web apps.</h1>
        {
          /* eslint-disable */
          this.props.dests.map((dest) => {
            return <div
              className = "button"
              key = {dest[0]}
              onClick = {this.sendTo.bind(this, dest[1])}
            >
              {dest[0]}
            </div>
          })
        }
      </div>
    );
  }
}

export { NavBar as default };
