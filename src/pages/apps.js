import React from 'react';

import NavBar from '../components/NavBar';

import AppDash from '../components/apps/AppDash';
import AppDashTitleMobile from '../components/apps/AppDashTitleMobile';
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
      color = {'#334455'}
    />
    <AppDashTitleMobile />
    <AppDash
      appList = {appList}
    />
    <AppGallery
      appList = {appList}
    />
  </div>
);

export { Apps as default};
