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
        <div id = "footer__contact__message">
          {'Have a question, or want my help with a project? '}
          <div
            id = "footer__email__button"
            onMouseOver = {this.showAddress}
            onMouseLeave = {this.hideAddress}
            onClick = {() => {window.location.href = "mailto:DougSauve4.200@gmail.com"}}
            >
              Email me
            </div>
            <div id = "footer__email__address">
              {'DougSauve4.200@gmail.com'}
            </div>
        </div>

        <div id = "footer__copyright">
           {'Created by Doug Sauve'} &#0169; {new Date().getFullYear()}
        </div>
        <div id = "footer__contact__icons">
          <img
            src = "./icons/GitHub-Mark-32px.png"
            // onClick = {sendTo()}
          />
          <img
            src = "./icons/In-2C-34px-R.png"
            // onClick = {sendTo()}
          />

        </div>
      </div>
    )
  }
}
