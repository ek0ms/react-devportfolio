import React from 'react';
import { Link } from 'react-scroll';
import resume from '../etc/jeffreyZhen18ForWeb.pdf';

const Lead = (props) => (
  <div id="lead">
    <div id="lead-content">
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
      <a href={resume} target="_blank" className="btn-rounded-white">
        Download Resume
      </a>
    </div>

    <div id="lead-overlay" />

    <div id="lead-down">
      <Link to="about" spy smooth duration={500}>
        <span>
          <i className="fa fa-chevron-down" aria-hidden="true" />
        </span>
      </Link>
    </div>
  </div>
);

export default Lead;
