import React from 'react';
import ReactDOM from 'react-dom';

import Index from './pages/index';
import Apps from './pages/apps';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Maintenance from './pages/maintenance';
import NotFound from './pages/notFound';
import Dash from './pages/dash.js'

import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('PATHNAME: ', window.location.pathname);

const app = document.getElementById('app');

switch (window.location.pathname) {
  case '/': ReactDOM.render(<Index />, app);
  break;
  case '/app': ReactDOM.render(<Apps />, app);
  break;
  case '/blog': ReactDOM.render(<Blog />, app);
  break;
  case '/contact': ReactDOM.render(<Contact />, app);
  break;
  case '/dash': ReactDOM.render(<Dash />, app);
  break;

  default:
  ReactDOM.render(<NotFound />, app);
};
