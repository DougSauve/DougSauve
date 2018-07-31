import React from 'react';

const image1 = <img className = "slide__image" src = './images/1.jpg'></img>
const image1m = <img className = "slide__image" src = './images/1-mobile.jpg'></img>
const image2 = <img className = "slide__image" src = './images/2.jpg'></img>
const image3 = <img className = "slide__image" src = './images/3.jpg'></img>

class CreateSlides {
  constructor() {
    this.slides = [
      [
        [image1, image1m],
        'Curious about what I can do?',
        'Check out my work',
        './app'
      ], [
        image2,
        'Want my help with a project?',
        'Get in touch',
        './contact'
      ], [
        image3,
        'See what\'s new on my blog.',
        'Go',
        './blog'
      ]
    ];

    this.getSlides = () => {
      return this.slides;
    };
  };
};



export default CreateSlides;
