import React from 'react';

export default class AppEntry extends React.Component {
  sendTo(destination) {

    if (destination.includes('http')) {
      window.location.href = destination;
    } else {
      window.location.pathname = destination;
    };
  };

  render () {
    return (
      <div
        className = "apps__entry"
        onClick = {this.sendTo.bind(this, this.props.href)}
      >
        <img
          className = "apps__entry__image"
          src = {this.props.image}
          alt = {this.props.imageAlt}
        />
      </div>
    );
  }
}

// 162.255.119.158
