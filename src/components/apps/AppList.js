import React from 'react';

import AppEntry from './AppEntry';

export default class ProjectList extends React.Component {

  render () {
    return (

      <div className = "app__list__container">

        <AppEntry
          title = "The Fishing Game"
          image = "/images/FishingGame.png"
          imageAlt = "A screenshot of Doug Sauve's Fishing Game."
          href = "/projects/FishingGame/app.html"
        />
        <AppEntry
          title = "The Fishing Game"
          image = "/images/FishingGame.png"
          imageAlt = "A screenshot of Doug Sauve's Fishing Game."
          href = "/projects/FishingGame/app.html"
        />
    </div>
    );
  }
}
