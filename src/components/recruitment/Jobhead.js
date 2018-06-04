import React from 'react';
import $ from 'jquery'



class Jobhead extends React.Component {
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
                <a className="skill-job">{elem}</a>
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
        <div className="job-single-head2">
            <div className="job-title2">
                <h3>Senior Web Designer 
                <i className="fa fa-heart" style={{ color: this.state.heart_color }} onClick={this.heart_toggle}></i>
                <span className="job-is-single ft">{this.props.FullTime ? 'Full time' : 'Part time'}</span>
                </h3>
                                                       
                <a href="#" title="" className="applyjob-btn hidden-xs hidden-sm"><i className="fa fa-paper-plane"></i>Apply for job</a>
            </div>
            <ul className="tags-jobs-single">
                <li><i className="fa fa-life-ring"></i> Major: {majors}</li>
                <li><i className="fa fa-map-marker"></i> {this.props.mapPosition}</li>
                <li><i className="fa fa-money"></i> Monthly Salary : <span>{this.props.monthlySalary}</span></li>
                <li><i className="fa fa-users"></i> Amount: {this.props.amount}</li>
                <li><i className="fa fa-certificate"></i> Certificate: {this.props.certi}</li>
                <li><i className="fa fa-clock-o"></i> Experience: {this.props.exp}</li>
                <li><i className="fa fa-calendar-check-o"></i> Age: {this.props.age}</li>                                                
                <li><i className="fa fa-transgender-alt"></i> Gender: {this.props.gender}</li>
                <li><i className="fa fa-language"></i> Language: {languages}</li>
                <li><i className="fa fa-tasks"></i> Skills: {skills}</li>
                <li><i className="fa fa-calendar-o"></i> Post Date: {this.props.postDate}</li>
                <li><i className="fa fa-calendar-o"></i> End Date: {this.props.endDate}</li>
                <li><i className="fa fa-user"></i> Profile: {profileLink}</li>
            </ul>
            <span><strong>Roles</strong> : {this.props.roles}</span>
        </div>
        );
    }
}
export default Jobhead;