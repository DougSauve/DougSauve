import React from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ProjectList from '../components/ProjectList';

const Projects = () => (
  <div>
    <NavBar
      dests = {[['Home', '/'], ['My work', '/projects'], ['Hire me', '/hire.js'], ['Blog', '/blog.js']]}
      color = {'#112233'}
    />
    <Header content = {'Here are some of my projects.'} />
    <ProjectList />
  </div>
);

export { Projects as default};
