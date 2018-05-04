import React, { Component } from 'react'
import _ from 'lodash';
import UserAvatar from 'react-user-avatar';
import PublicExperienceCard from '../publicCV/PublicExperienceCard';
import PublicEducationCard from '../publicCV/PublicEducationCard';
import PublicProjectCard from '../publicCV/PublicProjectCard';
import PublicSkillCard from '../publicCV/PublicSkillCard';
import PublicPublicationCard from '../publicCV/PublicPublicationCard';
import PublicActivityCard from '../publicCV/PublicActivityCard';
import PublicAwardCard from '../publicCV/PublicAwardCard';
import PublicCourseCard from '../publicCV/PublicCourseCard';
import PublicLanguageCard from '../publicCV/PublicLanguageCard';
import PublicBasicInfoCard from '../publicCV/PublicBasicInfoCard';

class UserCV extends Component {
    mapCVInfoBaseOnCVCode = (arr = []) => {
        if (this.props.cvCode) {
            const cvCode = this.props.cvCode;
            // console.log(cvCode);
            // console.log(arr);
            return arr.map((item) => {
                if (_.isArray(item.isPublic)) {
                    const isPublic = item.isPublic.find((elem) => {
                        return elem.cvCode === cvCode;
                    })
                    item.isPublic = isPublic.isPublic;
                }
                return item;
            })
        }
        else {
            return arr.map((item) => {
                if (_.isArray(item.isPublic)) {
                    const isPublic = item.isPublic.find((elem) => {
                        return elem.recruitmentId == null;
                    })
                    item.isPublic = isPublic.isPublic;
                }
                return item;
            })
        }
    }

    render() {
        const { user, basicInfo, avatar } = this.props;
        return (
            <div className="ui fluid card">
                <div className="content profile-header">
                    <UserAvatar name={`${user.lastname} ${user.firstname}`} size="100" src={avatar} />
                    <h1>{`${user.lastname} ${user.firstname}`}</h1>
                    <strong>{(user.positions) ? user.positions.join(', ') : ""}</strong>
                </div>

                <PublicBasicInfoCard detail={basicInfo} />
                <PublicEducationCard detail={this.mapCVInfoBaseOnCVCode(user._educations)} />
                <PublicExperienceCard detail={this.mapCVInfoBaseOnCVCode(user._experiences)} />
                <PublicProjectCard detail={this.mapCVInfoBaseOnCVCode(user._projects)} />
                <PublicSkillCard detail={this.mapCVInfoBaseOnCVCode(user._skills)} />
                <PublicPublicationCard detail={this.mapCVInfoBaseOnCVCode(user._publications)} />
                <PublicAwardCard detail={this.mapCVInfoBaseOnCVCode(user._awards)} />
                <PublicActivityCard detail={this.mapCVInfoBaseOnCVCode(user._activities)} />
                <PublicLanguageCard detail={this.mapCVInfoBaseOnCVCode(user._languages)} />
                <PublicCourseCard detail={this.mapCVInfoBaseOnCVCode(user._courses)} />
            </div>
        )
    }
}

export default UserCV