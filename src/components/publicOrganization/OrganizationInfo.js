import React, { Component } from 'react'
import { Link } from 'react-router';
import _ from 'lodash';
import request from 'superagent';
import loading from '../../assets/icon/Rolling.gif';
import OrganizationFigures from './OrganizationFigures';
import OrganizationDetail from './OrganizationDetail';
import ListRecruitment from '../recruitmentHolder/ListRecruitment';
class OrganizationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: {}
    }
  }
  
  render() {
   

    
    return (
      <div className='OrganizationInfo'>
         <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <OrganizationFigures />
            <OrganizationDetail />
            <h3> Jobs from Business NetWork </h3>
            <ListRecruitment />
        </div>
      </div>
    )
  }
}

export default OrganizationInfo
