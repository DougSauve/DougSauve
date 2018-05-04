import React from 'react';

export default class AboutIntro extends React.Component {
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
            <p className = "drop heading">I love what I do.</p>
            <p className = "sub-heading drop align-left">It gives me a purpose and a constant challenge, and I'm growing all the time.</p>

            <br />
            <div className = "horizontal-line"></div>
            <br />

            <p className = "regular-text align-left">
              I create <b>complete apps and websites.</b> I enjoy the design aspect of software development because making things look good and work seamlessly is very rewarding to me. But I also enjoy the complex behind-the-scenes logic that makes everything function - I am probably happiest when I am problem solving. This is why I decided to become a <b>full-stack developer</b> instead of choosing one area or the other.</p>
          </div>

          {/* Skills */}
          <div className = "about__item__text">
            <p className = "heading center">
              What technologies do I use?
            </p>
            <p className = "regular-text align-left">
              You can find a current road map of my skills <b>Here</b>.
              I work primarily with the <b>MERN stack</b> (MongoDB, ExpressJS, ReactJS, NodeJS). MongoDB is a database, and Express, React and Node are JavaScript frameworks, so most of my work is done in JavaScript.<br />
              I am also quite fond of CSS, the quirky language that powers the web's visual styles, and SCSS, a CSS extension which enables me to write simpler and more versatile CSS code.<br />
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

              I've found <b>debugging</b> to be fundamental as well. There's nothing elegant about it - it's just a case of figuring out how to fix your mistakes until you start to recognize them and get faster at it. It's probably the most frustrating part of being a developer, and it's definitely where I've learned the most. Overcoming what frustrates you makes you grow. I've never made a bug that I didn't fix, just because I refuse to give up. It really helps me to remember that the computer is just doing what I told it to do. If there's an error, it's just because I didn't tell it to do what I thought I did.<br />

              Another skill that I've found essential is <b>figuring out what needs to be done and doing it</b>. I am a largely self-taught developer; that meant sailing my own ship from the very start. It's very empowering to set yourself a big task, and then work at it until the day you look back and realize you've accomplished it, and nobody else did it for you - even though it looked impossible when you started. Then you start to realize you can do anything you want to. The only thing you have to do is never give up.<br />

              The last thing to mention is <b>learning</b>. I've heard that a generation of technology in software development is roughly 2.5 years. By then, pretty much everything I use today will be unrecognizeable. So if I decided to stop learning now, in 2.5 years or less my skills would be obsolete. This is envigorating to me - I have gotten bored at every job I've ever had, except this one. There is always something new to learn and I can always keep growing.
            </p>
          </div>

          {/* Learn Next */}
          <div className = "about__item__text">
            <p className = "heading center">
              What do I want to learn next?
            </p>
            <p className = "regular-text align-left">
              I am always most interested in learning technologies that will make me a more effective developer - either by expanding my capabilities, or by allowing me to do something more efficiently. I like to stay as current as possible without getting into untested technology. Generally this means staying up-to-date in the web development community and taking my lead from industry giants like Google and Facebook.<br />
              Right now the technology that I am most excited to learn about is <b>Progressive Web Applications (PWAs)</b>. PWAs will allow me to create websites that can be used as apps on mobile devices. Most people use their phones more than their computers, and if I am going to build technology that can make a difference in people's lives, I want it to be accessible to as many people as possible.<br />

            </p>
          </div>

          {/* Other Goals */}
          <div className = "about__item__text">
            <p className = "heading center">
              What are my other goals?
            </p>
            <p className = "regular-text align-left">
              <b>I want to create software that can improve the lives of people suffering from mental illnesses - especially teenagers.</b> Many people around me, including myself, suffer from mental illness, and I want so much to help, but most often I'm not in a position feel I can reach out on a personal level. But perhaps I can help people more effectively - and far more of them - through technology.<br />
              My first goal is to create an app that can connect people who need someone to talk to with people who are willing to listen.
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
              When I am not cheerfully wrestling with CSS, creating React components or setting up database APIs, I love inventing games of any kind, playing ping pong, spending time with my wife and our puppy, and duelling anyone who will stand in front of me with a sword in their hand.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
