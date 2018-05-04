import React from 'react';
import { Element } from 'react-scroll';
import ExperienceBlock from './ExperienceBlock';

const ExperienceTimeline = (props) => {
  const renderExperiences = () =>
    props.experience.map((exp) => <ExperienceBlock {...exp} key={exp.description} />);

  return (
    <Element name="experience">
      <div id="experience" className="background-alt">
        <h2 className="heading">Experience</h2>
        <div id="experience-timeline">{renderExperiences()}</div>
      </div>
    </Element>
  );
};

export default ExperienceTimeline;
