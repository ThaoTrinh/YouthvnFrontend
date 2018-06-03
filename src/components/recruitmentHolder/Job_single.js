import React from 'react';
import $ from 'jquery'
import CompanyName from'./CompanyName'

/*import '../assets/oldcss/css/style.css';
import '../assets/oldcss/css/responsive.css';
import '../assets/oldcss/css/animate.min.css';
import '../assets/oldcss/css/bootstrap-grid.css';
import '../assets/oldcss/css/icons.css';
import '../assets/oldcss/css/colors/colors.css';*/


class Job_single extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heart_color: '#B8B8B8',

            companyName:'Company',

            companyAddress:"Nguyễn Đình Chiểu, Đa Kao, quận 1, thành phố Hồ Chí Minh",

            link:"jobhunt.com",
                            
            phoneNumber:"0123456789",
                            
            email:"jobhunt@mail.com",
                            
            jobDes:"Company is a 2016 Iowa City-born start-up that develops consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.\n\nSed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien",
                            
            roles:"UX/UI Designer, Web Designer, Graphic Designer",
                            
            monthlySalary:"$3000 - $5000",
                            
            postDate:"July 29, 2017",
                            
            endDate:"August 29, 2017",
                            
            companyAvatar:"http://placehold.it/124x124",
                            
            FullTime:"True",
                            
            mapPosition:"Ho Chi Minh City, Viet Nam",
                            
            amount:3,
                            
            gender:"Not required",
                            
            exp:"2 years and above",
                            
            certi:"College degree",
                            
            major:["Computer Science", "IT geeks", "Marketing", "Mad guys", "Artist"],
                            
            age:"From 23 to 30 years old",
                            
            language:["English", "French", "Chinese", "Japanese"],
                            
            skill:["10 fingers typing", "Leadership"]

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
                <a className="skill-job">{elem}</a>
            );
        }
        else return "Not required"
    }
    getProfileLink = (profile_link) => {
        return (
            <a href={this.state.profileLink} className="profile">User profiles</a>
        );
    }
    render() {
        const majors = this.renderMajor(this.state.major);
        const languages = this.renderLanguage(this.state.language);
        const skills = this.renderSkill(this.state.skill);
        const profileLink = this.getProfileLink(this.state.profileLink);
        return (
            <div>
                <CompanyName companyName={this.props.companyName} companyImage={this.props.companyImage} />
                <section>
                    <div className="job-single-block">
                        <div className="job-single-container">
                            <div className="row no-gape">
                                <div className="col-lg-8 column">
                                    <div className="job-single-sec">
                                        <div className="job-single-head2">
                                            <div className="job-title2">
                                                <h3>Senior Web Designer 
                                                <i className="fa fa-heart" style={{ color: this.state.heart_color }} onClick={this.heart_toggle}></i>
                                                <span className="job-is-single ft">{this.state.FullTime ? 'Full time' : 'Part time'}</span>
                                                </h3>
                                                                                       
                                                <a href="#" title="" className="applyjob-btn hidden-xs hidden-sm"><i className="fa fa-paper-plane"></i>Apply for job</a>
                                            </div>
                                            <ul className="tags-jobs-single">
                                                <li><i className="fa fa-life-ring"></i> Major: {majors}</li>
                                                <li><i className="fa fa-map-marker"></i> {this.state.mapPosition}</li>
                                                <li><i className="fa fa-money"></i> Monthly Salary : <span>{this.state.monthlySalary}</span></li>
                                                <li><i className="fa fa-users"></i> Amount: {this.state.amount}</li>
                                                <li><i className="fa fa-certificate"></i> Certificate: {this.state.certi}</li>
                                                <li><i className="fa fa-clock-o"></i> Experience: {this.state.exp}</li>
                                                <li><i className="fa fa-calendar-check-o"></i> Age: {this.state.age}</li>                                                
                                                <li><i className="fa fa-transgender-alt"></i> Gender: {this.state.gender}</li>
                                                <li><i className="fa fa-language"></i> Language: {languages}</li>
                                                <li><i className="fa fa-tasks"></i> Skills: {skills}</li>
                                                <li><i className="fa fa-calendar-o"></i> Post Date: {this.state.postDate}</li>
                                                <li><i className="fa fa-calendar-o"></i> End Date: {this.state.endDate}</li>
                                                <li><i className="fa fa-user"></i> Profile: {profileLink}</li>
                                            </ul>
                                            <span><strong>Roles</strong> : {this.state.roles}</span>
                                        </div>
                                        <div className="job-details">
                                            <h3>Job Description</h3>
                                            <p>{this.state.jobDes}</p>
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
                                            <ul >
                                                <li><i className="fa fa-money"></i><h3>Offerd Salary</h3><span>£15,000 - £20,000</span></li>
                                                <li><i className="fa fa-mars-double"></i><h3>Gender</h3><span>Female</span></li>
                                                <li><i className="fa fa-thumb-tack"></i><h3>Career Level</h3><span>Executive</span></li>
                                                <li><i className="fa fa-puzzle-piece"></i><h3>Industry</h3><span>Management</span></li>
                                                <li><i className="fa fa-shield"></i><h3>Experience</h3><span>2 Years</span></li>
                                                <li><i className="fa fa-line-chart "></i><h3>Qualification</h3><span>Bachelor Degree</span></li>
                                            </ul>
                                        </div>
                                        <div className="share-bar">
                                            <span>Share</span><a href="#" title="" className="share-fb"><i className="fa fa-facebook"></i></a><a href="#" title="" className="share-twitter"><i className="fa fa-twitter"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4  column">
                                    <div className="job-single-head style2">
                                        <div className="job-thumb"> <img src={this.state.companyAvatar} alt="" /> </div>
                                        <div className="job-head-info">
                                            <h4>{this.state.companyName}</h4>
                                            <span><p>{this.state.companyAddress}</p></span>
                                            <p><i className="fa fa-unlink"></i>{this.state.link}</p>
                                            <p><i className="fa fa-phone"></i>{this.state.phoneNumber}</p>
                                            <p><i className="fa fa-envelope-o"></i>{this.state.email}</p>
                                        </div>
                                        <a href="#" title="" className="viewall-jobs">View all Jobs</a>
                                        <a href="#" title="" className="viewall-jobs hidden-lg hidden-md"> <i className="fa fa-paper-plane"></i> Apply for job</a>
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