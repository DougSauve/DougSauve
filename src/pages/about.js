import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AboutIntro from '../components/about/AboutIntro';
import orientation from '../../utils/getOrientation';

export default () => (
  <div className = "about__page">
    <NavBar
      dests = {[
        ['Home', '/'],
        ['About me', '/about'],
        ['My work', '/app'],
        ['Contact me', '/contact'],
        ['Blog', '/blog']
      ]}
    />

    <AboutIntro />

    <Footer showToTop = {true} />
    {(orientation() === 'mobile') && <div id = "About__Footer__Background" />}
  </div>
);

// About
//
//     Professional background
//         skills - swiss army knife
//           link to what I can do - web diagram
//         goals - archery target
//           link to blog / where I am now
    //    Work with me - handshake
    //       link to contact me
//           Personal (small blurb)
