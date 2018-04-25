import React from 'react';

export default class EmailMe extends React.Component {
  referTo (destination) {
    console.log('opening');
    window.open(destination);
  }

  render () {
    return (
      <div id = "emailMe">
        <img src = "./images/contact-background.jpg" />
        <div id = "emailMe__contact">
          <div id = "emailMe__contact__message">{'Have a question, or want my help with a project? '}
          </div>

          <div
            id = "emailMe__contact__button"
            onClick = {() => {window.location.href = "mailto:DougSauve4.200@gmail.com"}}
          >
            Email me
          </div>

          {/* social buttons */}
          <div id = "emailMe__social-message">
            Find me on
          </div>

          <div id = "emailMe__social-icons">
            <img
              src = "./icons/GitHub-Mark-32px.png"
              onClick = {this.referTo.bind(this, 'https://github.com/DougSauve')}
            />
            <img
              src = "./icons/In-2C-34px-R.png"
              onClick = {this.referTo.bind(this, 'https://www.linkedin.com/in/doug-sauve-48327a15a/')}
            />
          </div>
        </div>

      </div>
    )
  }
}
