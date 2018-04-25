import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import AppDash from '../components/apps/AppDash';
import AppList from '../components/apps/AppList';

const Apps = () => (
  <div id = "apps-page">
    <NavBar
      dests = {[['Home', '/'], ['About me', '/about'], ['My work', '/app'], ['Contact', '/contact'], ['Blog', '/blog']]}
      color = {'#112233'}
    />
    <AppDash />
    <AppList />
    <Footer />
  </div>
);

export { Apps as default};
