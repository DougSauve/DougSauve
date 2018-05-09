import React from 'react';

// import orientation from '../../utils/getOrientation';

export default (props) => (
  <div className = "footer">

    <div id = "footer__copyright">
       {'Created by Doug Sauve'} &#0169; {new Date().getFullYear()}

       {(window.innerHeight > window.innerWidth) && <br />}

       <span
         className = "footer__email__link"
         onClick = {() => {window.location.href = "mailto:DougSauve4.200@gmail.com"}}
        >DougSauve4.200@gmail.com</span>
    </div>

    {(props.showToTop) && <div
      className = "back-to-top"
      onClick = {() => {window.location.href = "#nav-bar"}}
      >
        Back to top
      </div>}
  </div>
)
