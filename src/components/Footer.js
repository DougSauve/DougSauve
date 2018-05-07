import React from 'react';

export default (props) => (
  <div className = "footer">

    {(props.showToTop) && <div
      className = "back-to-top"
      onClick = {() => {window.location.href = "#nav-bar"}}
    >
      Back to top
    </div>}

    <div id = "footer__copyright">
       {'Created by Doug Sauve'} &#0169; {new Date().getFullYear()}
       <span
         className = "footer__email__link"
         onClick = {() => {window.location.href = "mailto:DougSauve4.200@gmail.com"}}
        >
          DougSauve4.200@gmail.com
        </span>
    </div>
  </div>
)
