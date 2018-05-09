import React from 'react';

export default class SlideSlot extends React.Component {

  fadeIn = undefined;
  shouldUpdate = false;

  componentWillReceiveProps(nextProps) {
    if (this.props.slide === nextProps.slide) {
      this.shouldUpdate = false;
    }
    else {
      this.shouldUpdate = true;
    }
  }
  shouldComponentUpdate() {
    return this.shouldUpdate;
  }
  componentWillUpdate() {
    clearInterval(this.fadeIn);
    document.getElementById(this.props.slotName).style.opacity = 0;
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

  render() {
    return (
      <div id = {this.props.slotName}>
        <div>Slideslot mounted</div>
        {this.props.slide}
      </div>
    )
  }
};
