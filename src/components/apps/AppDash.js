import React from 'react';

import AppDescription from './AppDescription';
import AppDashTitle from './AppDashTitle';

export default class AppDash extends React.Component {

  state = {
    title: this.props.appList[0].title,
    description: this.props.appList[0].description,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setDescriptionByPosition);
  }

  //put them all in state, and change it based on the browserheight.
  setDescriptionByPosition = () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const viewHeight = window.innerHeight;
    const entryHeight = viewHeight * .625;
    const position = Math.floor( scrollTop / entryHeight + .5 );

    this.setState(() => ({
      title: this.props.appList[position].title,
     description: this.props.appList[position].description
    }));
  }

  render() {
    return (
      <div
        id = "apps__dash"
        //fires setDescriptionByPosition on scroll - added dynamically
      >
        <AppDashTitle />
        <AppDescription
          title = {this.state.title}
          description = {this.state.description}
        />
      </div>
    );
  }
}
