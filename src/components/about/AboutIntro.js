import React from 'react';

import SkillsMapModal from './SkillsMapModal';

export default class AboutIntro extends React.Component {

  scrollTop;

  showSkillsMap = () => {
    document.getElementById('skillsMap__modal').style.display = "block";
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    document.addEventListener('scroll', this.freezePage);
  }
  hideSkillsMap = () => {
    document.getElementById('skillsMap__modal').style.display = "none";
    document.removeEventListener('scroll', this.freezePage);
  }
  freezePage = () => {
    document.documentElement.scrollTop = this.scrollTop;
    document.body.scrollTop = this.scrollTop;
  };

  render () {
    return (
      <div className = "about__intro down__middle__flex">
        <div className = "NavBar-stripe"></div>
        <img
          className = "about__page__background"
          src = "./images/AboutHeader.jpg"
        />
        {/* translucient reading frame */}
        <div className = "about__pane">
          {/* greeting */}
          <div className = "about__item__text center">
            <p className = "drop heading">I really love making apps.</p>
            <p className = "sub-heading drop align-left">It gives me a constant challenge, and I'm growing all the time.</p>

            <br />
            <div className = "horizontal-line"></div>
            <br />

            <p className = "regular-text align-left">
              I create <b>web apps</b>, start to finish. I like doing everything involved - I enjoy making things look good and work seamlessly, and I also enjoy the complex behind-the-scenes logic that makes everything function. I am probably happiest when I am solving a problem. This is why I decided to become a <b>full-stack developer</b> instead of choosing to be more specialized.</p>
          </div>

          {/* Skills */}
          <div className = "about__item__text">
            <p className = "heading center">
              What technologies do I use?
            </p>
            <p className = "regular-text align-left">
              You can find a current map of my skills
              <span
                id = "skillsMap__link"
                onClick = {this.showSkillsMap}
              >
                 {'here '}
              </span>
              and a copy of my progress log in plain text
              <span
                id = "skillsMap__link"
                onClick = {() => {window.location.pathname = '/progresslog.txt'}}
              >
                 {'here '}
              </span>
              (last updated July 2018). <br />
              I work primarily with the <b>MERN stack</b> (MongoDB, ExpressJS, ReactJS, NodeJS). MongoDB is database software, and Express, React and Node are JavaScript frameworks, so most of my work is done in JavaScript.<br />
              I am also fond of CSS, the quirky language that powers the web's visual styles, and SASS, an awesome CSS extension which enables me to write simpler and more versatile CSS code.<br />
              I have used a handful of other technologies as well, such as PHP, Java, and SQL. JavaScript is my main workshop for now, and it contains enough tools I haven't explored yet to keep me busy for a very long time!<br />
            </p>
          </div>

          {/* As a developer */}
          <div className = "about__item__text">
            <p className = "heading center">
              What is important to me as a developer?
              {/* Learning, writing clean code, believing in myself*/}
            </p>
            <p className = "regular-text align-left">
              The biggest thing is definitely <b>constant learning</b>. Learning every day is essential in software development, and I think that is part of why I enjoy it so much. I believe that constant growth keeps you healthy and I love that I will always have tons of new things to learn in software development.<br />

              <b>Writing clean code</b> is really important too. In high school, I used to write my code as cryptically as possible. The little kid in me figured that since it was code, it needed to be secret code. My teacher, who had to try and figure out what I as doing, would have fired me if he could. But since then I've had to work with my own code a lot, and I learned pretty quickly that life gets far easier if I write my code as clearly as I can. I've now become a firm believer in writing code as legibly as possible.<br />

              A soft skill that has been super important for me is <b>not giving up</b>. I am a largely self-taught developer, which has meant motivating myself from the very start. I've had to believe in myself enough to keep going even when everything was so vast and confusing that I knew I would never get it figured out. But every day I could just learn something small, and one day I realized that I did have a lot of things figured out. I've come to believe that I can do anything I want to -the only thing I have to do is never give up.<br />
            </p>
          </div>

          {/* Learn Next */}
          <div className = "about__item__text">
            <p className = "heading center">
              What do I want to learn next?
            </p>
            <p className = "regular-text align-left">
              I am always most interested in learning technologies that will make me a more effective developer - either by expanding my capabilities, or by allowing me to do something more efficiently. I like to stay as current as possible without getting into untested technology. Generally this means staying up-to-date in the web development community and taking my lead from industry giants like Google and Facebook.<br />
              Some of the things that I am most excited to learn about now are <b>Progressive Web Applications (PWAs)</b>, <b>React Native</b>, and expanding my knowledge of <b>Jest</b>. PWAs will allow me to create websites that can be used as apps on mobile devices, and React Native will let me create true mobile apps. Most people use their phones more than their computers, and if I am going to build technology that can make a difference in people's lives, I want it to be accessible to as many people as possible. Jest is different - it is a framework for writing tests, which allow me to be sure that my code does what I think it does.<br />

            </p>
          </div>

          {/* Other Goals */}
          <div className = "about__item__text">
            <p className = "heading center">
              What are my other goals?
            </p>
            <p className = "regular-text align-left">
              <b>I want to create software that can improve the lives of people suffering from mental illnesses - especially teenagers.</b> Many people around me, including myself, suffer from some form of mental illness, and I want so much to help, but most often I'm not in a position where I feel that I can reach out on a personal level. I believe I can help people more effectively - and far more of them - through technology.<br />
              One goal I have in this area is to create an app that can connect people who need someone to talk to with people who are willing to listen.
            </p>
          </div>

          {/* Other interests and skills - swordfighting, games, ping pong:  very wide range of experience - speak french and spanish, teaching degree, skilled with plants, owned own business, working residential construction  */}
          <div className = "about__item__text">
            <p className = "heading center">
              What other skills and interests do I have alongside software development?
            </p>
            <p className = "regular-text align-left">
              I enjoyed studying computer science in high school, but I decided to pursue a career as an elementary school teacher after my senior year. I learned a lot of valuable skills from it but soon learned that it wasn't going to provide me with the kind of stimulation I need. A while later I rediscovered my passion for software development and my matching skill set, and by then I had gained a large amount of experience and an eclectic range of skills. I speak <span className = "red-shadowed">French</span> and <span className = "orange-shadowed">Spanish</span>; I have <span className = "blue-shadowed">taught in three countries</span>; I am well-versed in <span className = "green-shadowed">plant lore</span>; I co-own a <span className = "purple-shadowed">small business</span>; I have worked in
              <span className = "brown-shadowed"> residential construction</span>; and I am a skilled <span className = "silver-shadowed">sword fighter</span>. Though I have felt in the past like a large chunk of my life was spent wandering around without a solid direction, I am beginning to see the value in being able to apply such a wide range of life experience to my work.<br />
              When I am not coding, learning or reading, I love inventing games, playing ping pong, spending time with my wife and our puppy, and duelling anyone who will stand in front of me with a sword in their hand.
            </p>
          </div>
        </div>
        <SkillsMapModal hideSkillsMap = {this.hideSkillsMap} />
      </div>
    );
  }
}
