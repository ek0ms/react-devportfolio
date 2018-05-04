import React from 'react';

const Header = (props) => (
  <header>
    <div id="mobile-menu-close">
      <span>Close</span> <i className="fa fa-times" aria-hidden="true" />
    </div>
    <ul id="menu" className="shadow">
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#education">Education</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </header>
);

export default Header;
