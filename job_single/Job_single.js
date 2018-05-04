import React from 'react';
import $ from 'jquery';
import './css/icons.css';
import './css/animate.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/bootstrap-grid.css';
import './css/colors/colors.css';
import './css/job_single.css';

class Job_single extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heart_color: '#B8B8B8',
        }
    }
    heart_toggle = () => {
        if (this.state.heart_color === '#B8B8B8') {
            this.setState({ heart_color: '#fb236a' });
        }
        else this.setState({ heart_color: '#B8B8B8' });
    }
    renderMajor = (major) => {
        return major.map(elem => 
            <a className="majors">{elem}</a>
        );
    }
    renderLanguage = (language) => {
        return language.map(elem => 
            <a className="language">{elem}</a>
        );
    }
    renderSkill = (skill) => {
        if(skill.length > 0) {
            return skill.map(elem =>
                <a className="skill">{elem}</a>
            );
        }
        else return "Not required"
    }
    getProfileLink = (profile_link) => {
        return (
            <a href={this.props.profileLink} className="profile">User profiles</a>
        );
    }
    render() {
        const majors = this.renderMajor(this.props.major);
        const languages = this.renderLanguage(this.props.language);
        const skills = this.renderSkill(this.props.skill);
        const profileLink = this.getProfileLink(this.props.profileLink);
        return (
            <div>
                <section className="overlape">
                    <div className="block no-padding">
                        <div data-velocity="-.1"
                            style={{ background: 'url(' + this.props.companyImage + ') repeat scroll 50% 422.28px transparent' }}
                            className="parallax scrolly-invisible no-parallax"></div>
                        <div className="container fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner-header">
                                        <h3>{this.props.companyName}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 column">
                                    <div className="job-single-sec">
                                        <div className="job-single-head2">
                                            <div className="job-title2">
                                                <h3>Senior Web Designer</h3>
                                                <span className="job-is ft">{this.props.FullTime ? 'Full time' : 'Part time'}</span>                                        
                                                <i className="la la-heart" style={{ color: this.state.heart_color }} onClick={this.heart_toggle}></i>
                                                <a href="#" title="" className="applyjob-btn"><i className="la la-paper-plane"></i>Apply for job</a>
                                            </div>
                                            <ul className="tags-jobs">
                                                <li style={{width: '100%'}}><i className="la la-life-ring"></i> Major: {majors}</li>
                                                <li><i className="la la-map-marker"></i> {this.props.mapPosition}</li>
                                                <li><i className="la la-money"></i> Monthly Salary : <span>{this.props.monthlySalary}</span></li>
                                                <li><i className="la la-users"></i> Amount: {this.props.amount}</li>
                                                <li><i className="la la-certificate"></i> Certificate: {this.props.certi}</li>
                                                <li><i className="la la-clock-o"></i> Experience: {this.props.exp}</li>
                                                <li><i className="la la-calendar-check-o"></i> Age: {this.props.age}</li>                                                
                                                <li><i className="la la-transgender-alt"></i> Gender: {this.props.gender}</li>
                                                <li style={{width: '100%'}}><i className="la la-language"></i> Language: {languages}</li>
                                                <li style={{width: '100%'}}><i className="la la-tasks"></i> Skills: {skills}</li>
                                                <li><i className="la la-calendar-o"></i> Post Date: {this.props.postDate}</li>
                                                <li><i className="la la-calendar-o"></i> End Date: {this.props.endDate}</li>
                                                <li style={{width: '100%'}}><i className="la la-user"></i> Profile: {profileLink}</li>
                                            </ul>
                                            <span><strong>Roles</strong> : {this.props.roles}</span>
                                        </div>
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
                                        <div className="job-overview">
                                            <h3>Job Overview</h3>
                                            <ul>
                                                <li><i className="la la-money"></i><h3>Offerd Salary</h3><span>£15,000 - £20,000</span></li>
                                                <li><i className="la la-mars-double"></i><h3>Gender</h3><span>Female</span></li>
                                                <li><i className="la la-thumb-tack"></i><h3>Career Level</h3><span>Executive</span></li>
                                                <li><i className="la la-puzzle-piece"></i><h3>Industry</h3><span>Management</span></li>
                                                <li><i className="la la-shield"></i><h3>Experience</h3><span>2 Years</span></li>
                                                <li><i className="la la-line-chart "></i><h3>Qualification</h3><span>Bachelor Degree</span></li>
                                            </ul>
                                        </div>
                                        <div className="share-bar">
                                            <span>Share</span><a href="#" title="" className="share-fb"><i className="fa fa-facebook"></i></a><a href="#" title="" className="share-twitter"><i className="fa fa-twitter"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 column">
                                    <div className="job-single-head style2">
                                        <div className="job-thumb"> <img src={this.props.companyAvatar} alt="" /> </div>
                                        <div className="job-head-info">
                                            <h4>{this.props.companyName}</h4>
                                            <span><p>{this.props.companyAddress}</p></span>
                                            <p><i className="la la-unlink"></i>{this.props.link}</p>
                                            <p><i className="la la-phone"></i>{this.props.phoneNumber}</p>
                                            <p><i className="la la-envelope-o"></i>{this.props.email}</p>
                                        </div>
                                        <a href="#" title="" className="viewall-jobs">View all Jobs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Job_single;