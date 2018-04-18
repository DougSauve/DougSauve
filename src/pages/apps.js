import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import AppList from '../components/apps/AppList';

const Apps = () => (
  <div>
    <NavBar
      dests = {[['Home', '/'], ['My work', '/app'], ['Contact', '/contact'], ['Blog', '/blog']]}
      color = {'#112233'}
    />
    <AppList />
    <Footer />
  </div>
);

export { Apps as default};
//have ProjectsList set props for each project. I'll need a ref to the image, a title, and a link to where it goes.
