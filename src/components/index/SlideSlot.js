import React from 'react';

export default class SlideSlot extends React.Component {

  state = {
    fadeIn: undefined,
    shouldUpdate: undefined
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.slide === nextProps.slide) {
      this.setState(() => ({ shouldUpdate: false }));
    }
    else {
      this.setState(() => ({ shouldUpdate: true }));
    }
  }
  shouldComponentUpdate() {
    return this.state.shouldUpdate;
  }
  componentWillUpdate() {
    clearInterval(this.state.fadeIn);
    document.getElementById(this.props.slotName).style.opacity = 0;
  }
  componentDidUpdate() {
    const slot =  document.getElementById(this.props.slotName);

    let c = 1;
    this.setState(() => ({
      fadeIn: setInterval(() => {
        if (c <= 20) {
          slot.style.opacity = c / 20;
          c++;
        } else {clearInterval(this.state.fadeIn)};
      }, 50)
    }));
  }

  render() {
    return (
      <div id = {this.props.slotName}>
        <div id = "shouter">HI MOM</div>
        {this.props.slide}
      </div>
    )
  }
};
