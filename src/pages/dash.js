import React from 'react';

import Password from '../components/dash/Password';
import Dashboard from '../components/dash/Dashboard';

export default class Dash extends React.Component {

  state = {
    dashMounted: false
  }

  revealDash = () => {
    this.setState(() => ({ dashMounted: true }));
  }

  render() {
    return (
      <div id = "dash">
        <div id = "dash__background"></div>

        <Password revealDash = {this.revealDash} />
        {this.state.dashMounted === true && <Dashboard />}

        <div
          id = "dash__posts"
          className = "dash__frame__style"
        ></div>

      </div>
    )
  }
}
