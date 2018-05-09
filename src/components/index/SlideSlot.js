import React from 'react';

export default class SlideSlot extends React.Component {

  state = {
    fadeIn: undefined,
    shouldUpdate: false
  }

  componentDidMount() {
    console.log('slideslot mounted');
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.slide === nextProps.slide) {
      this.setState(() => ({ shouldUpdate: false }));
    }
    else {
      console.log(`shouldUpdate: ${this.state.shouldUpdate}`);
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
        {this.props.slide}
      </div>
    )
  }
};
