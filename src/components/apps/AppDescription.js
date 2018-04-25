import React from 'react';

export default class AppDescription extends React.Component {
  render () {
    return (
      <div className = "App__Description">
        <div className = "App__Description__Title">
          {this.props.title}
        </div>
        <div className = "App__Description__Content">
          {this.props.description}
        </div>
      </div>
    )
  }
}
