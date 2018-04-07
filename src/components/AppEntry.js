import React from 'react';
/*eslint-disable*/
export default class AppEntry extends React.Component {
  sendTo(destination) {
    window.location.pathname = destination;
  };

  render () {
    return (


      <div className = "projects">
        <div className = "project" onClick = {this.sendTo.bind(this, this.props.href)}>
          <div className = "projects__title">{this.props.title}</div>
          <img src = {this.props.image} alt = {this.props.imageAlt} />
        </div>
      </div>
    );
  }
}
