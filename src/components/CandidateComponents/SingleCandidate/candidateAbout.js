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


export default class Information extends React.Component {
  render() { return (
    <div className="cand-details-sec">
      <div className="row">
        <div className="col-lg-8 column">
          <div className="cand-details" id="about">
            
          <h2>Candidates About</h2>
           
            <Introduce
              name="Introduce"
              groupName="Introduce"
            />
            <Education
              name="Education"
              groupName="Education"
            />

            <Experience
              name="Experience"
              groupName="Experience"
            />

             <Degree
              name="Degree"
              groupName="Degree"
            />

            <ListSkill
              name="Skill"
              groupName="Skill"
            />

            <Awards
              name="Awards"
              groupName="Awards"
            />

            <Project
              name="Project"
              groupName="Project"
            />
            
            <Activities
              name="Activities"
              groupName="Activities"
            />
             
            <Language
              name="Language"
              groupName="Language"
            />

            <Publication
              name="Publication"
              groupName="Publication"
              />

            <Recommendator
              name="Recommendator"
              groupName="Recommendator"
            />
            
            <Portfolio
              name="Portfolio"
              groupName="Portfolio"
            />
           
           <h2 style={{paddingLeft:30}}>Related candidates</h2>
              <Sliders/>
        
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