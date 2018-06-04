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
import ListItem from './ListItem.js'
import Sliders from './sliderItem.js'
import RelatedCandidate from './relatedCandidate.js'

export default class Information extends React.Component {
  render() { return (
    <div className="cand-details-sec">
      <div className="row">
        <div className="col-lg-7 column">
          <div className="cand-details" id="about">
            
          <h2>Candidates About</h2>
           
            <Introduce
              name="Introduce"
              groupName="Introduce"
            />

            <Experience
              name="Experience"
              groupName="Experience"
            />

            <Project
              name="Project"
              groupName="Project"
            />

            <ListSkill
              name="Skill"
              groupName="Skill"
            />

             <Language
              name="Language"
              groupName="Language"
            />

            <Education
              name="Education"
              groupName="Education"
            />

             <Degree
              name="Degree"
              groupName="Degree"
            />

            <Awards
              name="Awards"
              groupName="Awards"
            />

            
            
            <Activities
              name="Activities"
              groupName="Activities"
            />
             
             <Portfolio
              name="Portfolio"
              groupName="Portfolio"
            />

            <Publication
              name="Publication"
              groupName="Publication"
              />

            <Recommendator
              name="Recommendator"
              groupName="Recommendator"
            />
             
           
          </div>
        </div>
        <div className="col-lg-5 column">
        <div className="col-lg-10 column">
          <div className="job-overview">
            <JobOverview/>
            <Contact/>
          </div>    
          </div>
        <div className="col-lg-15 column">
        <h2 style={{marginLeft:15}}>Related Candidates</h2>
          <RelatedCandidate/>
        </div>
        </div>
        
        
      </div>
    </div>
    
  );
  }
}