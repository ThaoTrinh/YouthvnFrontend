import React from 'react';

import ItemCVTitle from './ItemCVTitle';
import { EducationElement, ExperienceElement, ProjectElement, ActivityElement, AwardElement, CourseElement, LanguageElement, SkillElement, PublicationElement, BasicInfoElement, CertificateElement, MiddlemanElement } from './ItemCVElement';
import { ITEM_TYPE } from '../../commons/constants';

const $ = window.jQuery;

export default class ItemCVCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublic: true,
      detail: []
    }
  }

  componentWillMount() {
    try {
      this.setState({
        detail: this.props.detail
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { detail, title, type } = this.props;
    const isHidden = (!detail || detail.length == 0) ? true : false;
    return (
      <div className={(isHidden) ? "hide content" : "content"}>
        <ItemCVTitle title={title} />

        {(!$.isEmptyObject(detail)) ?
          detail.map(u =>
            (type === ITEM_TYPE.ACTIVITY) ? <ActivityElement key={u._id} item={u} />
              : (type === ITEM_TYPE.AWARD) ? <AwardElement key={u._id} item={u} />
                : (type === ITEM_TYPE.BASICINFO) ? <BasicInfoElement key={u._id} item={u} />
                  : (type === ITEM_TYPE.CERTIFICATE) ? <CertificateElement key={u._id} item={u} />
                    : (type === ITEM_TYPE.COURSE) ? <CourseElement key={u._id} item={u} />
                      : (type === ITEM_TYPE.EDUCATION) ? <EducationElement key={u._id} item={u} />
                        : (type === ITEM_TYPE.EXPERIENCE) ? <ExperienceElement key={u._id} item={u} />
                          : (type === ITEM_TYPE.LANGUAGE) ? <LanguageElement key={u._id} item={u} />
                            : (type === ITEM_TYPE.MIDDLEMAN) ? <MiddlemanElement key={u._id} item={u} />
                              : (type === ITEM_TYPE.PROJECT) ? <ProjectElement key={u._id} item={u} />
                                : (type === ITEM_TYPE.PUBLICATION) ? <PublicationElement key={u._id} item={u} />
                                  : <SkillElement key={u._id} item={u} />
          )
          : null}
      </div>
    )
  }
}