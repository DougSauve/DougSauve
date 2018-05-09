import React from 'react';
import sanitize from '../../../utils/sanitize';

export default class Password extends React.Component {

  handleSubmitPassword = (e) => {
    e.preventDefault();

    const passwordElement = document.getElementById('dash__password__form').elements.password;
    const password = sanitize(passwordElement.value);

    if (password === "Roons") {
      document.getElementById('dash__password').style.display = "none";
      this.props.revealDash();
    } else {
      console.log(password);
    }

    passwordElement.value = "";
  }

  render () {
    return (
      <div
        id = "dash__password"
        className = "dash__frame__style dash__frame__positioning"
      >
        <p
          id = "dash__password__greeting"
        >
          Hey dude. What's the password?
        </p>

        <form
          id = "dash__password__form"
          method = "POST"
        >
          <input
            id = "dash__password__input"
            className = "dash__input"
            type = "text"
            name = "password"
            placeholder = "password"
            autoFocus
            autoComplete = "off"
          />

          <button
            className = "dash__button"
            onClick = {this.handleSubmitPassword}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
};
