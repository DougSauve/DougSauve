import React from 'react';

export default class Footer extends React.Component {
  showAddress() {
    setTimeout (() => {
      document.getElementById('footer__email__address').style.display = 'inline';
    }, 200);
  }
  hideAddress() {
    setTimeout (() => {
      document.getElementById('footer__email__address').style.display = 'none';
    }, 400);
  }

  render () {
    return (
      <div className = "footer">
        <div id = "footer__copyright">
           {'Created by Doug Sauve'} &#0169; {new Date().getFullYear()}
        </div>
      </div>
    )
  }
}
