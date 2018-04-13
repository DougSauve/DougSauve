import React from 'react';

import Header from '../components/Header'
import NavBar from '../components/NavBar';
import Slideshow from '../components/Slideshow';

const Index = () => (
  <div>
    <Header content= {'Hi, I\'m Doug. I create web apps.'} />
    <NavBar
      dests = {[['Home', '/'], ['My work', '/app'], ['Contact me', '/contact'], ['Blog', '/blog']]}
    />
    <Slideshow
      slides = {[
        ['./images/1.jpg', 'Curious what I can do?', 'Check out my work', './app'],
        ['./images/2.jpg', 'Want my help with a project?', 'Get in touch', './contact'],
        [['./images/3.jpg', './images/3-mobile.jpg'], 'See what\'s new on my blog.', 'Go', './blog'],
    ]}
    />
  </div>
);

export { Index as default };
