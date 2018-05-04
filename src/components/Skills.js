import React from 'react';
import { Element } from 'react-scroll';

const Skills = (props) => {
  const renderSkills = () => props.skills.map((skill) => <li key={skill}>{skill}</li>);

  return (
    <Element name="skills">
      <div id="skills">
        <h2 className="heading">Skills</h2>
        <ul>{renderSkills()}</ul>
      </div>
    </Element>
  );
};

export default Skills;
