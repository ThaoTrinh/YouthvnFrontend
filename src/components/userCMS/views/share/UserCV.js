import React, { Component } from 'react'

import PublicExperienceCard from './PublicExperienceCard';
import PublicEducationCard from './PublicEducationCard';
import PublicProjectCard from './PublicProjectCard';
import PublicSkillCard from './PublicSkillCard';
import PublicPublicationCard from './PublicPublicationCard';
import PublicActivityCard from './PublicActivityCard';
import PublicAwardCard from './PublicAwardCard';
import PublicCourseCard from './PublicCourseCard';
import PublicLanguageCard from './PublicLanguageCard';
import PublicBasicInfoCard from './PublicBasicInfoCard';

class UserCV extends Component {
  render () {
    const {user, basicInfo, avatar} = this.props;
    return (
      <div className="ui fluid card">
        <div className="content profile-header">
          <div dangerouslySetInnerHTML={{ __html: avatar }}></div>
          <h2>{user.fullname}</h2>
          <strong>{(user.positions)? user.positions.join(', ') : ""}</strong>
        </div>

        <PublicBasicInfoCard detail={basicInfo} />
        <PublicEducationCard detail={user._educations} />
        <PublicExperienceCard detail={user._experiences} />
        <PublicProjectCard detail={user._projects} />
        <PublicSkillCard detail={user._skills} />
        <PublicPublicationCard detail={user._publications} />
        <PublicAwardCard detail={user._awards} />
        <PublicActivityCard detail={user._activities} />
        <PublicLanguageCard detail={user._languages} />
        <PublicCourseCard detail={user._courses} />
      </div>
    )
  }
}

export default UserCV