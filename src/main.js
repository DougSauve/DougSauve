import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './redux/store';
const store = createStore();

import Index from './pages/index';
import About from './pages/about';
import Apps from './pages/apps';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Maintenance from './pages/maintenance';
import NotFound from './pages/notFound';
import Dash from './pages/dash';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

// import SkillsMap from '../skillsMap/skillsMap';

//console.log('PATHNAME: ', window.location.pathname);

const app = document.getElementById('app');

//break this out into its own component, wrap it in Provider
const Router = () => {
    switch (window.location.pathname) {
      case '/': return <Index />;
      case '/about': return <About />;
      case '/app': return <Apps />;
      case '/blog': return <Blog />;
      case '/contact': return <Contact />;
      case '/dash': return <Dash />;

      default:
      return <NotFound />;
  };
};

const WrappedApp = () => (
  <Provider store = {store} >
    <Router />
  </Provider>
);
// ReactDOM.render(<SkillsMap />, app);
ReactDOM.render(<WrappedApp />, app);
