import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter, Route} from 'react-router-dom';

import Index from './pages/index';
import Apps from './pages/apps';
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
console.log('PATHNAME: ', window.location.pathname);

if (window.location.pathname === '/') {
  ReactDOM.render(<Index />, document.getElementById('app'));
}
if (window.location.pathname === '/app') {
  ReactDOM.render(<Apps />, document.getElementById('app'));
}
else {
  console.log('404');
}
