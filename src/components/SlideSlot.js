import React from 'react';
/*eslint-disable*/
export default class SlideSlot extends React.Component {

  fadeIn;
  shouldUpdate;

  shouldComponentUpdate() {
    return this.shouldUpdate;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.slide === nextProps.slide) {
      this.shouldUpdate = false;
    }
    else {
      this.shouldUpdate = true;
    }
  }
  componentDidUpdate() {
    const slot =  document.getElementById(this.props.slotName);

    let c = 1;
    this.fadeIn = setInterval(() => {
      if (c <= 20) {
        slot.style.opacity = c / 20;
        c++;
      } else {clearInterval(this.fadeIn)};
    }, 50);

  }
  componentWillUpdate() {
    clearInterval(this.fadeIn);

    document.getElementById(this.props.slotName).style.opacity = 0;
  }

  render() {
    return (
      <div id = {this.props.slotName}>
        {this.props.slide}
      </div>
    )
  }
};