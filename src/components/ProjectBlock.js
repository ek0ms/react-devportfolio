import React from 'react';

const ProjectBlock = (props) => {
  const img = props;

  return (
    <div className="project shadow-large">
      <div className="project-image">
        <img src={require(`../images/${props.img}`)} alt="project" height="300" width="300" />
      </div>
      <div className="project-info">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <a href={props.demoLink} target="_blank">
          View Demo
        </a>{' '}
        &middot;{' '}
        <a href={props.repoLink} target="_blank">
          Visit Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectBlock;
