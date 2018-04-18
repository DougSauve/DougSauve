import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import BlogList from '../components/blog/BlogList';
import BlogHeader from '../components/blog/BlogHeader';

const Blog = () => (
  <div>
    <NavBar
      dests = {[['Home', '/'], ['My work', '/app'], ['Contact me', '/contact'], ['Blog', '/blog']]}
      color = {'#112233'}
    />
    <BlogHeader />
    <BlogList />

    <Footer />
  </div>
);

export { Blog as default };
