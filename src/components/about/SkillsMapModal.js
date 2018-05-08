import React from 'react';

export default (props) => (
  <div
    id = "skillsMap__modal"
    onClick = {props.hideSkillsMap}
  >
    <div id = "skillsMap__description">
      Bigger names represent greater skills.
    </div>
    <img
      id = "skillsMap__image"
      src = "./images/skillsMap.png"
    />

    <div
      id = "skillsMap__close__button"
      onClick = {props.hideSkillsMap}
    >
      Close
    </div>
  </div>
)
