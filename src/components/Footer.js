import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Footer = (props) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-5 copyright">
          <p>Copyright &copy; {props.copyright}</p>
        </div>
        <div className="col-sm-2 top">
          <span id="to-top" onClick={() => scroll.scrollToTop()}>
            <i className="fa fa-chevron-up" aria-hidden="true" />
          </span>
        </div>
        <div className="col-sm-5 social">
          <ul>
            <li>
              <a href={props.github} target="_blank">
                <i className="fab fa-github" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={props.linkedin} target="_blank">
                <i className="fab fa-linkedin-in" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
