import React from 'react';
import $ from 'jquery'




class Jobdetail extends React.Component {
    constructor(props) {
        super(props);
               
    }
  
    render() {
        return (
            <div className="job-details">
                    <h3>Job Description</h3>
                    <p>{this.props.jobDes}</p>
                    <h3>Required Knowledge, Skills, and Abilities</h3>
                    <ul>
                        <li>Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing CSS)</li>
                        <li>Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch is our preferred concepting)</li>
                        <li>Cross-browser and platform testing as standard practice</li>
                        <li>Experience using Invision a plus</li>
                        <li>Experience in video production a plus or, at a minimum, a willingness to learn</li>
                    </ul>
                    <h3>Education + Experience</h3>
                    <ul>
                        <li>Advanced degree or equivalent experience in graphic and web design</li>
                        <li>3 or more years of professional design experience</li>
                        <li>Direct response email experience</li>
                        <li>Ecommerce website design experience</li>
                        <li>Familiarity with mobile and web apps preferred</li>
                        <li>Excellent communication skills, most notably a demonstrated ability to solicit and address creative and design feedback</li>
                        <li>Must be able to work under pressure and meet deadlines while maintaining a positive attitude and providing exemplary customer service</li>
                        <li>Ability to work independently and to carry out assignments to completion within parameters of instructions given, prescribed routines, and standard accepted practices</li>
                    </ul>
            </div>
        );
    }
}
export default Jobdetail;