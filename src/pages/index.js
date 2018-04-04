import React from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Slideshow from '../components/Slideshow';

const Index = () => (
  <div>
    <Header />
    <NavBar
      dests = {[['About', './about.js'], ['Blog', './blog.js'], ['What I can do', './projects']]}
    />
    <Slideshow
      slides = {[
        ['./images/about-entry.jpg', 'Hi there. My name is Doug, and I build web apps.'],
        ['./images/projects-entry.jpg', 'Have a look at what I can do.'],
        ['./images/blog-entry.jpg', 'Come and see my blog.'],
    ]}
    />
  </div>
);

export { Index as default };


// 'Hi there. My name is Doug, and I build web apps.(about)',
// 'Take a look at what I can do. (wICD)',
// 'Come and see my blog.(blog)'
