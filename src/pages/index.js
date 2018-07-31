import React from 'react';

import createSlides from '../components/index/createSlides';
const CreateSlides = new createSlides();

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import IndexHeader from '../components/index/IndexHeader'
import Slideshow from '../components/index/Slideshow';

class Index extends React.Component{

  state = {
    slides: null,
  };

  componentWillMount() {
    this.loadSlides();
  };

  loadSlides = async () => {
    const slides = await CreateSlides.getSlides();

    this.setState(() => ({ slides }));
  };

  render() {
    return (
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
        {this.state.slides &&
          <Slideshow
            slides = {this.state.slides}
          />
        }

        <Footer />
      </div>
    );
  };
};

export { Index as default };
