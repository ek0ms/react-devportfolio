import React from 'react';
import profilePic from '../images/profilepic.jpg';

const About = (props) => (
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2 className="heading">About Me</h2>
          <div className="profile-image">
            <img src={profilePic} alt="profile-pic" height="125" width="125" />
          </div>
        </div>
        <div className="col-md-8">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
