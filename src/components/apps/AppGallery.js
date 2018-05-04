import React from 'react';

import AppEntry from './AppEntry';
import Footer from '../Footer';

export default class AppGallery extends React.Component {

  render () {
    return (
      <div className = "app__gallery">
        {
          this.props.appList.map((entry) => {
          return <AppEntry
            key = {entry.title}
            image = {entry.image}
            imageAlt = {entry.imageAlt}
            href = {entry.href}
          />
        })
      }

      <Footer />
    </div>
    );
  }
}
