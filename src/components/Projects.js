import React from 'react';
import ProjectBlock from './ProjectBlock';

const Projects = (props) => {
  const renderProjects = () =>
    props.projects.map((project) => <ProjectBlock {...project} key={project.name} />);

  return (
    <div id="projects" className="background-alt">
      <h2 className="heading">Projects</h2>
      <div className="container">
        <div className="row">{renderProjects()}</div>
      </div>
    </div>
  );
};

export default Projects;
