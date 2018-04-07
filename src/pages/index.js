import React from 'react';

import Header from '../components/Header'
import NavBar from '../components/NavBar';
import Slideshow from '../components/Slideshow';

const Index = () => (
  <div>
    <Header content= {'Hi, I\'m Doug. I create web apps.'} />
    <NavBar
      dests = {[['Home', '/'], ['My work', '/apps'], ['Hire me', '/hire.js'], ['Blog', '/blog.js']]}
    />
    <Slideshow
      slides = {[
        ['./images/1.jpg', 'Come and have a look at what I can do.', 'See my work', './apps'],
        ['./images/2.jpg', 'See what\'s new on my blog.', 'Go', './blog'],
        ['./images/3.jpg', 'Want my help with a project?', 'Get in touch', './hire'],
    ]}
    />
  </div>
);

export { Index as default };


// 'Hi there. My name is Doug, and I build web apps.(about)',
// 'Take a look at what I can do. (wICD)',
// 'Come and see my blog.(blog)'
//Hi there. My name is Doug, and I build web apps.
