import React from 'react';

export default class About extends React.Component{
  render(){
    return(
      <ul className="cand-extralink">
				 			<li><a href="#education" title="">Education</a></li>
				 			<li><a href="#experience" title="">Experience</a></li>
              <li><a href="#degree" title="">Degree</a></li>
				 			<li><a href="#skills" title="">Skills</a></li>
              <li><a href="#awards" title="">Awards</a></li>
               <li><a href="#project" title="">Project</a></li>
				 			<li><a href="#activities" title="">Activities</a></li>
				 			<li><a href="#language" title="">Language</a></li>
              <li><a href="#course" title="">Course</a></li>
              <li><a href="#publication" title="">Publication</a></li>
              <li><a href="#recommendator" title="">Recommendator</a></li>
              <li><a href="#portfolio" title="">Portfolio</a></li>
			</ul>
    );
  }
}