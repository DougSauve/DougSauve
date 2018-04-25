import React from 'react';

import NavBar from '../components/NavBar';

import AppDash from '../components/apps/AppDash';
import AppGallery from '../components/apps/AppGallery';
import appList from '../components/apps/appList';

const Apps = () => (
  <div id = "apps-page">
    <NavBar
      dests = {[
        ['Home', '/'],
        ['About me', '/about'],
        ['My work', '/app'],
        ['Contact', '/contact'],
        ['Blog', '/blog']]}
      color = {'#112233'}
    />
    <AppDash
      appList = {appList}
    />
    <AppGallery
      appList = {appList}
    />
  </div>
);

export { Apps as default};
