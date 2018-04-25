import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import EmailMe from '../components/contact/EmailMe';

const Contact = () => (
  <div>
    <NavBar
      dests = {[['Home', '/'], ['About me', '/about'], ['My work', '/app'], ['Contact me', '/contact'], ['Blog', '/blog']]}
      color = "#112233"
    />
    <EmailMe />
    <Footer />
  </div>
);

export { Contact as default };
