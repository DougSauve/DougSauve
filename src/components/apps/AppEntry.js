import React from 'react';

export default class AppEntry extends React.Component {
  sendTo(destination) {
    window.location.pathname = destination;
  };

  render () {
    return (
      <div className = "apps__entry" onClick = {this.sendTo.bind(this, this.props.href)}>
        <div className = "apps__entry__title">{this.props.title}</div>
        <img className = "apps__entry__image" src = {this.props.image} alt = {this.props.imageAlt} />
      </div>
    );
  }
}
