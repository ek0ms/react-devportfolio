import React from 'react';
import { Element } from 'react-scroll';

const Education = (props) => (
  <Element name="education">
    <div id="education">
      <h2 className="heading">Education</h2>
      <div className="education-block">
        <h3>{props.school}</h3>
        <span className="education-date">{props.graduation}</span>
        <h4>{props.degree}</h4>
        <p>
          Home of Sam the Minuteman!
          <br />
          {props.description}
        </p>
      </div>
    </div>
  </Element>
);

export default Education;
