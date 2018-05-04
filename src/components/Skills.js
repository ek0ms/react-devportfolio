import React from 'react';

const Skills = (props) => {
  const renderSkills = () => props.skills.map((skill) => <li key={skill}>{skill}</li>);
  return (
    <div id="skills">
      <h2 className="heading">Skills</h2>
      <ul>{renderSkills()}</ul>
    </div>
  );
};

export default Skills;
