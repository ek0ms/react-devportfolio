import React from 'react';

const ExperienceBlock = (props) => {
  const date = `${props.start} - ${props.end}`;
  return (
    <div className="vtimeline-point">
      <div className="vtimeline-icon">
        <i className="fas fa-map-marker-alt" />
      </div>
      <div className="vtimeline-block">
        <span className="vtimeline-date">{date}</span>
      </div>
      <div data-date={date} className="vtimeline-content">
        <h3>{props.company}</h3>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ExperienceBlock;
