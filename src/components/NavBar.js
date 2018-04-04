/* eslint-disable */

import React from 'react';

class NavBar extends React.Component {

  sendTo(destination) {
    window.location.href = destination;
  };

  render() {
    return (
      <div>
        {
          /* eslint-disable */
          //want to get this.props.dests and turn each one into a button/link.
          //implicitly returning the changed array...
          this.props.dests.map((dest) => {
            return <button
              key = {dest[0]}
              onClick = {this.sendTo.bind(this, dest[1])}
            >
              {dest[0]}
            </button>
          })
        }
      </div>
    );
  }
}

export { NavBar as default };
