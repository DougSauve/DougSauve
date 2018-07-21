import React from 'react';

import './_SkillsMap.scss';

export default () => (
  <div id = "skillsMap">
  <div id = "skillsMap__background" />
  <div id = "skillsMap__divider">
    <span>Client-Side (Front End)</span>
    <div />
    <span>Server-Side (Back End)</span>
  </div>

    <div id = "skillsMap__Ubuntu__border">
      <span>Ubuntu</span>
      <p className = "skillsMap__description">Operating System</p>

      <div id = "skillsMap__Webpack__border">
        <span>Webpack</span>
        <p className = "skillsMap__description">Bundler</p>

        <div id = "skillsMap__HTML5">
          HTML5
          <p className = "skillsMap__description">Markup Language</p>
        </div>

        <div id = "skillsMap__CSS3">
          CSS3
          <p className = "skillsMap__description">Style Sheet Language</p>
        </div>

        <div id = "skillsMap__SASS">
          SASS
          <p className = "skillsMap__description">CSS Preprocessor</p>
        </div>

        <div id = "skillsMap__JavaScript__border">
          <span>JavaScript</span>
          <p className = "skillsMap__description">Programming Language</p>

          <div id = "skillsMap__React">
            React
            <p className = "skillsMap__description">View Library</p>
          </div>

          <div id = "skillsMap__Redux">
            Redux
            <p className = "skillsMap__description">State Management Library</p>
          </div>

          <div id = "skillsMap__Express">
            Express
            <p className = "skillsMap__description">Web Application Framework</p>
          </div>

          <div id = "skillsMap__Node">
            Node
            <p className = "skillsMap__description">Run-Time Environment</p>
          </div>

        </div>
      </div>
      <div id = "skillsMap__MongoDB">
        MongoDB
        <p className = "skillsMap__description--mongodb">Database</p>
      </div>
    </div>
  </div>
);
