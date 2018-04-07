import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter, Route} from 'react-router-dom';

import Index from './pages/index';
import Projects from './pages/projects';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// const routes = (
//   <BrowserRouter>
//     <div>
//       <Route path = "/" component = {<Index />} />
//     </div>
//   </BrowserRouter>
// )
//
switch(window.location.pathname){
  case '/':
  ReactDOM.render(<Index />, document.getElementById('app'));
  break;
  case '/projects':
  ReactDOM.render(<Projects />, document.getElementById('app'));
  break;
}
