import React from 'react';
import { Link } from 'react-scroll';

const Header = (props) => (
  <header>
    <div id="mobile-menu-close">
      <span>Close</span> <i className="fa fa-times" aria-hidden="true" />
    </div>
    <ul id="menu" className="shadow">
      <li>
        <Link to="about" spy smooth duration={500}>
          About
        </Link>
      </li>
      <li>
        <Link to="experience" spy smooth duration={500}>
          Experience
        </Link>
      </li>
      <li>
        <Link to="education" spy smooth duration={500}>
          Education
        </Link>
      </li>
      <li>
        <Link to="projects" spy smooth duration={500}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="skills" spy smooth duration={500}>
          Skills
        </Link>
      </li>
      <li>
        <Link to="contact" spy smooth duration={500}>
          Contact
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
