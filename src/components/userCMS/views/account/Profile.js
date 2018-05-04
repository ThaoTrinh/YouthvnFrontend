import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import _ from 'lodash';

import UserAvatar from 'react-user-avatar';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import ProjectCard from './ProjectCard';
import SkillCard from './SkillCard';
import PublicationCard from './PublicationCard';
import ActivityCard from './ActivityCard';
import AwardCard from './AwardCard';
import CourseCard from './CourseCard';
import LanguageCard from './LanguageCard';
import CertificateCard from './CertificateCard';
import MiddlemanCard from './MiddlemanCard';
import BasicInfoCard from './BasicInfoCard';

const $ = window.jQuery;

/* profile view */
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      user: this.props.user,
      cvCode: "",
      avatar: {}
    }
  }

  getCVCode() {
    const { user } = this.props;
    if (user.versions) {
      const elem = user.versions.find(function (item) {
        return item.recruitmentId == null;
      });
      this.setState({ cvCode: elem.cvCode });
    }
  }
  onDropAvatar(acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles[0]);
    const token = localStorage.getItem('token');
    if (acceptedFiles[0] && token) {
      request
      .post('/api/file/image/user/avatar')
      .set('x-access-token', token)
      .field('itemId', this.props.user._id)
      .attach('avatar', acceptedFiles[0])
      .end((err, res) => {
        if (err) console.log(err);
        else {
          this.setState({ avatar: acceptedFiles[0] });
        }
      })
    }
    
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.getCVCode();
  }

  render() {
    const { user, cvCode, avatar } = this.state;
    
    const basicInfo = {
      _id: user._id,
      email: user.email,
      lastname: user.lastname,
      firstname: user.firstname,
      phone: user.phone,
      address: user.address,
      website: user.website,
      gender: user.gender,
      birthdate: user.birthdate,
      experience: user.experience,
      positions: user.positions,
      jobField: user.jobField,
      educationLevel: user.educationLevel
    }
    var arr=[], _avatar = '';
    try {
      arr = user._avatar.url.split('/');  
      _avatar =  '/' + [arr[arr.length-2], arr[arr.length-1]].join('/');
    } catch (error) {}
    
    return (
      <div className="ui fluid card">
        <div className="content profile-header">
          {/* <div dangerouslySetInnerHTML={{__html: avatar}}></div> */}


          <Dropzone className="dropzone-profile-avatar"
            onDrop={this.onDropAvatar.bind(this)}
            multiple={false}
            accept="image/*"

          >
            {(!_.isEmpty(avatar))
              ?(<div>
                  <UserAvatar name={user.fullname} size="100" src={avatar.preview} />
                </div>
              )
              : (_avatar)
              ? (<div>
                  <UserAvatar name={user.fullname} size="100" src={_avatar}/>
                </div>
              )
              : (<div>
                  <UserAvatar name={user.fullname} size="100" />
                </div>
              )
            }
          </Dropzone>
          <h1>{user.fullname}</h1>
          <strong>{user.positions.join(', ')}</strong>
        </div>

        <BasicInfoCard detail={basicInfo} jobSearch={user.jobSearch} cvCode={cvCode} />
        <EducationCard detail={user._educations} cvCode={cvCode} />
        <ExperienceCard detail={user._experiences} cvCode={cvCode} />
        <ProjectCard detail={user._projects} cvCode={cvCode} />
        <SkillCard detail={user._skills} cvCode={cvCode} />
        <PublicationCard detail={user._publications} cvCode={cvCode} />
        <AwardCard detail={user._awards} cvCode={cvCode} />
        <ActivityCard detail={user._activities} cvCode={cvCode} />
        <LanguageCard detail={user._languages} cvCode={cvCode} />
        <CourseCard detail={user._courses} cvCode={cvCode} />
        <CertificateCard detail={user._certificates} cvCode={cvCode} />
        <MiddlemanCard detail={user._middlemans} cvCode={cvCode} />
      </div>
    )
  }
}

export default Profile
