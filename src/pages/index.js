import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import IndexHeader from '../components/index/IndexHeader'
import Slideshow from '../components/index/Slideshow';

const Index = () => (
  <div>
    <IndexHeader content = {'Hi, I\'m Doug. I create web apps.'} />
    <NavBar
      dests = {[
        ['Home', '/'],
        ['About me', '/about'],
        ['My work', '/app'],
        ['Contact', '/contact'],
        ['Blog', '/blog']
      ]}
    />
    <Slideshow
      slides = {[
        [
          [
            './images/1.jpg', './images/1-mobile.jpg'],
            'Curious about what I can do?',
            'Check out my work',
            './app'
          ], [
            './images/2.jpg',
            'Want my help with a project?',
            'Get in touch',
            './contact'
          ], [
            './images/3.jpg',
            'See what\'s new on my blog.',
            'Go',
            './blog'
          ],
        ]}
      />

      <Footer />
  </div>
);

export { Index as default };
