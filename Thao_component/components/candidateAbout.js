import React from 'react';
import Introduce from './introduce.js';
import Education from './education.js';
import Experience from './experience.js';
import Portfolio from './portfolio.js';
import ListSkill from './listSkill.js';
import Awards from './awards.js';
import Course from './course.js';
import JobOverview from './jobOverview.js';
import Contact from './contact.js';
import Project from './project.js'
import Activities from './activities.js'
import Publication from './publication.js'
import Language from './language.js'
import Degree from './degree.js'
import Recommendator from './recommendator.js'

export default class Information extends React.Component {
  render() { return (
    <div className="cand-details-sec">
      <div className="row">
        <div className="col-lg-8 column">
          <div className="cand-details" id="about">
            <h2>Candidates About</h2>
            <Introduce/>
            <Education/>
            <Project/>
            <Experience/>
            <Portfolio/>
            <ListSkill/>
            <Awards/>
            <Language/>
            <Activities/>
            <Publication/>
            <Degree/>
            <Course/>
            <Recommendator/>
          </div>
        </div>
        <div className="col-lg-4 column">
					<div className="job-overview">
            <JobOverview/>
            <Contact/>
          </div>
        </div>
      </div>
    </div>
  );
  }
}