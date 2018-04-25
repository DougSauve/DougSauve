import React from 'react';

const BlogHeader = () => (
  <div>
  <div id = "Blog__Header__Title">Doug's Writing Post</div>
  <div id = "Blog__Header">
    <div id = "Blog__Header__Contents">
      <div id = "Blog__Header__Introduction">
        <img id = "Blog__Header__Picture" src = "./images/doug-small.png" />
        <div id = "Blog__Header__Introduction-text">
          Hi, I'm Doug. I'm a <b>React/Node </b>
          Full-Stack developer and student, and I enjoy both of those roles.
        </div>
      </div>
      <div id = "Blog__Header__Description">
        I write about <b>User Interface and Experience</b>,
        improving the <b>quality of everyday life</b>,
        and the occasional post about <b>Max the cat</b>.
      </div>
    </div>
  </div>
</div>
);

export { BlogHeader as default };
