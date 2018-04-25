import React from 'react';

import AppEntry from './AppEntry';
import Footer from '../Footer';

export default class ProjectList extends React.Component {

  render () {
    return (

      <div className = "app__list__container">

{/* this will be: for each entry in the database collection, create an appEntry and its matching description in the appDash. */}
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
        <Footer />
    </div>
    );
  }
}
