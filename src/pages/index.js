import React from 'react';

import NavBar from '../components/NavBar';
import Slideshow from '../components/Slideshow';

const Index = () => (
  <div>
    <NavBar
      dests = {[['Home', '/'], ['My work', './projects'], ['Hire me', './hire.js'], ['Blog', './blog.js']]}
    />
    <Slideshow
      slides = {[
        ['./images/1.jpg', 'Have a look at what I can do.', 'See my work', './projects'],
        ['./images/2.jpg', 'Want my help with a project?', 'Get in touch', './hire'],
        ['./images/3.jpg', 'See what\'s new on my blog.', 'Go', './blog'],
    ]}
    />
  </div>
);

export { Index as default };


// 'Hi there. My name is Doug, and I build web apps.(about)',
// 'Take a look at what I can do. (wICD)',
// 'Come and see my blog.(blog)'
//Hi there. My name is Doug, and I build web apps.
