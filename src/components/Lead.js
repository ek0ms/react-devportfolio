import React from 'react';

const Lead = (props) => (
  <div id="lead">
    <div id="lead-content">
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
      <a href="#" className="btn-rounded-white">
        Download Resume
      </a>
    </div>

    <div id="lead-overlay" />

    <div id="lead-down">
      <span>
        <i className="fa fa-chevron-down" aria-hidden="true" />
      </span>
    </div>
  </div>
);

export default Lead;
