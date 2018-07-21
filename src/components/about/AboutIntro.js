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
              I create <b>web apps</b>, start to finish. I like doing everything involved - I enjoy the design aspect of software development because making things look good and work seamlessly is very rewarding to me, and I also enjoy the complex behind-the-scenes logic that makes everything function. I am probably happiest when I am solving a problem. This is why I decided to become a <b>full-stack developer</b> instead of choosing to be more specialized.</p>
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
                 Here
              </span>
              (last updated July 2018).
              I work primarily with the <b>MERN stack</b> (MongoDB, ExpressJS, ReactJS, NodeJS). MongoDB is database software, and Express, React and Node are JavaScript frameworks, so most of my work is done in JavaScript.<br />
              I am also fond of CSS, the quirky language that powers the web's visual styles, and SASS, an awesome CSS extension which enables me to write simpler and more versatile CSS code.<br />
              I have used a handful of other technologies as well, such as PHP, Java, and SQL, but JavaScript is my main workshop for now, and it contains enough tools I haven't explored yet to keep me busy for a very long time!<br />
            </p>
          </div>

          {/* As a developer */}
          <div className = "about__item__text">
            <p className = "heading center">
              What is important to me as a developer?
            </p>
            <p className = "regular-text align-left">
              <b>Clarity</b> is huge. In high school, I used to write my code as cryptically as possible. The little kid in me figured that since it was code, it needed to be secret code. My teacher, who had to try and figure out what I as doing, would have fired me if he could. I've learned since then that it is always in my best interest to write my code as clearly as I can, mostly from having to go back and deal with it myself. When it's easy to read it becomes so much easier to maintain and saves me hours of needless work.<br />

              Another skill that I've found essential is <b>figuring out what needs to be done and doing it</b>. I am a largely self-taught developer, whih has meant sailing my own ship from the very start. It's very empowering to set yourself a big task, and then work at it until the day you look back and realize you've accomplished it, and nobody else did it for you - even though it looked impossible when you started. Then you start to realize you can do anything you want to. The only thing you have to do is never give up.<br />

              The last and most important thing to mention is <b>learning</b>. I love to learn, and this is definitely the right industry for that. I've heard that a generation of technology in software development is roughly 2.5 years - so if I decide to stop learning now, in 2.5 years or less my skills will be obsolete. This is invigorating to me - I have gotten bored at every job I've ever had, and I love that in software development there is always something new to learn.
            </p>
          </div>

          {/* Learn Next */}
          <div className = "about__item__text">
            <p className = "heading center">
              What do I want to learn next?
            </p>
            <p className = "regular-text align-left">
              I am always most interested in learning technologies that will make me a more effective developer - either by expanding my capabilities, or by allowing me to do something more efficiently. I like to stay as current as possible without getting into untested technology. Generally this means staying up-to-date in the web development community and taking my lead from industry giants like Google and Facebook.<br />
              Some of the things that I am most excited to learn about now are <b>Progressive Web Applications (PWAs)</b>, <b>React Native</b>, and expanding my knowledge of Jest. PWAs will allow me to create websites that can be used as apps on mobile devices, and React Native will let me create true mobile apps. Most people use their phones more than their computers, and if I am going to build technology that can make a difference in people's lives, I want it to be accessible to as many people as possible. Jest is different - it is a framework for writing tests, which allow me to be more confident that my code does what I think it does.<br />

            </p>
          </div>

          {/* Other Goals */}
          <div className = "about__item__text">
            <p className = "heading center">
              What are my other goals?
            </p>
            <p className = "regular-text align-left">
              <b>I want to create software that can improve the lives of people suffering from mental illnesses - especially teenagers.</b> Many people around me, including myself, suffer from mental illness, and I want so much to help, but most often I'm not in a position where I feel that I can reach out on a personal level. But perhaps I can help people more effectively - and far more of them - through technology.<br />
              My first goal in this area is to create an app that can connect people who need someone to talk to with people who are willing to listen.
            </p>
          </div>

          {/* Other interests and skills - swordfighting, games, ping pong:  very wide range of experience - speak french and spanish, teaching degree, skilled with plants, owned own business, working residential construction  */}
          <div className = "about__item__text">
            <p className = "heading center">
              What other skills and interests do I have alongside software development?
            </p>
            <p className = "regular-text align-left">
              I enjoyed studying computer science in high school, but I decided to pursue a career as an elementary school teacher after my senior year. I learned a lot of valuable skills from it but soon learned that it wasn't going to provide me with the kind of stimulation I need. It took me a decade to rediscover my passion for software development and my matching skill set. In that decade I gained a large amount of experience and an eclectic range of skills. I speak <span className = "red-shadowed">French</span> and <span className = "orange-shadowed">Spanish</span>; I have <span className = "blue-shadowed">taught in three countries</span>; I am well-versed in <span className = "green-shadowed">plant lore</span>; I co-own a <span className = "purple-shadowed">small business</span>; I have worked in
              <span className = "brown-shadowed"> residential construction</span>; and I am a skilled <span className = "silver-shadowed">sword fighter</span>. Though I sometimes feel like a large chunk of my life was spent wandering without a solid direction, I am beginning to see the value in being able to apply such a wide range of life experience to my work.<br />
              When I am not writing responsive CSS styles, creating Redux stores or setting up client-side routing, I love inventing games of any kind, playing ping pong, spending time with my wife and our puppy, and duelling anyone who will stand in front of me with a sword in their hand.
            </p>
          </div>
        </div>
        <SkillsMapModal hideSkillsMap = {this.hideSkillsMap} />
      </div>
    );
  }
}
