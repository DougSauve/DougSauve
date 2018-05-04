import React from 'react';

export default (props) => (
  <div className = "footer">

    {(props.showToTop) && <div className = "back-to-top"><a href = "#nav-bar">Back to top</a></div>}

    <div id = "footer__copyright">
       {'Created by Doug Sauve'} &#0169; {new Date().getFullYear()}
    </div>
  </div>
)
