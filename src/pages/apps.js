import React from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import AppList from '../components/AppList';

const Apps = () => (
  <div>
    <NavBar
      dests = {[['Home', '/'], ['My work', '/apps'], ['Hire me', '/hire.js'], ['Blog', '/blog.js']]}
      color = {'#112233'}
    />
    <Header content = {'Here are some of my projects.'} />
    <AppList />
  </div>
);

export { Apps as default};
//have ProjectsList set props for each project. I'll need a ref to the image, a title, and a link to where it goes.
