import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Contact = () => (
  <div>
    <NavBar
      dests = {[['Home', '/'], ['My work', '/app'], ['Contact me', '/contact'], ['Blog', '/blog']]}
      color = {'#112233'}
    />
    <Footer />
  </div>
);

export { Contact as default };
