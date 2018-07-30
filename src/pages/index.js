import React from 'react';

import createSlides from '../components/index/createSlides';

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
      slides = {createSlides}
    />

    <Footer />
  </div>
);

export { Index as default };
