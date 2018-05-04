import React from 'react';
import Skill from './skill.js';

export default class Information extends React.Component {
  render() { return (
    <div className="progress-sec" id="skills" >
      <div className="row">
        <div className="col-md-11 col-sm-11 col-xs-10">
          <h2>Professional Skills</h2>
        </div>
        <div className="col-md-1 col-sm-1 col-xs-2">
          <i className="fa fa-plus pull-right"></i>
        </div>
      </div>
      <Skill/>
      <Skill/>
    </div>
  );
  }
}