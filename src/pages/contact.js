import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import EmailMe from '../components/contact/EmailMe';

const Contact = () => (
  <div id = "contact__page">
    <NavBar
      dests = {[
        ['Home', '/'],
      ['About me', '/about'],
      ['My work', '/app'],
      ['Contact me', '/contact'],
      ['Blog', '/blog']
    ]}
      color = "#334455"
    />
    <EmailMe />
    <Footer />
  </div>
);

export { Contact as default };
