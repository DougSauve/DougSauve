import React from 'react';

class NavBar extends React.Component {
  sendTo(destination) {
    window.location.href = destination;
  };

  showCurrentLocation(buttonDestination) {
    if (buttonDestination[1] === window.location.pathname) {
      return (
        <div className = "current-location">
          {buttonDestination[0]}
        </div>
      );
    }
  }

  componentDidMount() {

    const buttons = document.getElementById('nav-bar').childNodes;

    const color = this.props.color;

    if (this.props.color) {
      buttons.forEach((button) => {
        button.style.color = color;
        button.style.borderLeftColor = color;
        button.style.boxShadow = "1px 0 4px " + color;
        button.onmouseenter = () => {
          button.style.color = "purple";
        };
        button.onmouseleave = () => {
          button.style.color = color;
        };
      });
    }
  }

  toggleDisplayMobileMenu() {

    const menu = document.getElementsByClassName('nav-mobile-menu')[0];
    const button = document.getElementsByClassName('nav-mobile-menu-icon')[0];
    if (menu.style.display !== "block") {
      button.style.color = "#112233";
      button.style.background = "#faf7fa";
      menu.style.display = "block";
    } else {
      button.style.color = "#faf7fa";
      button.style.background = "transparent";
      menu.style.display = "none";
    }
  }

  chooseNavBarStyle() {
    { if (window.innerWidth <= 450) {
        //for mobile
        return <div className = "nav-mobile-menu-icon"
          onClick = {this.toggleDisplayMobileMenu}
        >
          &#9776;
          <div className = "nav-mobile-menu">
            {
              this.props.dests.map((dest) => {
                return <div
                  className = "button"
                  key = {dest[1]}
                  onClick = {this.sendTo.bind(this, dest[1])}
                >
                  {dest[0]}
                  <div>{this.showCurrentLocation(dest)}</div>
                </div>
              })
            }
          </div>
        </div>;
      }else{
        // for desktop
        return this.props.dests.map((dest) => {
          return <div
            className = "button"
            key = {dest[1]}
            onClick = {this.sendTo.bind(this, dest[1])}
          >
            {dest[0]}
            <div>{this.showCurrentLocation(dest)}</div>
          </div>
        })
      }
    }
  }

  render() {
    return (
      <div id = "nav-bar">
        {this.chooseNavBarStyle()}
      </div>
    );
  }
}

export { NavBar as default };
