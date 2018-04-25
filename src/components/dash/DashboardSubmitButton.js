import React from 'react';

export default (props) => (
  <button
    className = "dash__button dash__form__width"
    onClick = {props.handleSubmitPost}
  >
    Submit
  </button>
);
