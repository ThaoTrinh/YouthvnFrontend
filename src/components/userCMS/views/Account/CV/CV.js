import React, { Component } from 'react';
import Introduce from './introduce.js';
import Education from './education.js';
import Experience from './experience.js';
import Portfolio from './portfolio.js';
import ListSkill from './listSkill.js';
import Awards from './awards.js';
import Course from './course.js';
import Project from './project.js'
import Activities from './activities.js'
import Publication from './publication.js'
import Language from './language.js'
import Degree from './degree.js'
import Recommendator from './recommendator.js'


class CV extends Component {
    constructor(props) {
      super(props);
     
    }
    
    render() {
      
  
      return (
        <div className="CV">
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
      );
    }
  }
  
  export default CV;