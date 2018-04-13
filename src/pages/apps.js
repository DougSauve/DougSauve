import React from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import AppList from '../components/AppList';

const Apps = () => (
  <div>
    <Header content = {'Here are some of my projects.'} />
    <NavBar
      dests = {[['Home', '/'], ['My work', '/app'], ['Hire me', '/hire'], ['Blog', '/blog']]}
      color = {'#112233'}
    />
    <AppList />
  </div>
);

export { Apps as default};
//have ProjectsList set props for each project. I'll need a ref to the image, a title, and a link to where it goes.
