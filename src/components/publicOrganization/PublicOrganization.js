import React, { Component } from 'react'
import { Link } from 'react-router';

import _ from 'lodash';
import request from 'superagent';
import loading from '../../assets/icon/Rolling.gif';
import OrganizationInfo from './OrganizationInfo';
import CompanyName from '../recruitment/CompanyName';
import CompanyInfoCard from '../recruitment/CompanyInfoCard';
class PublicOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyAvatar:"http://placehold.it/124x124",
      companyName:'Company',
      companyAddress:"Nguyễn Đình Chiểu, Đa Kao, quận 1, thành phố Hồ Chí Minh",
      link:"jobhunt.com",
      phoneNumber:"0123456789",
      email:"jobhunt@mail.com",
    }
  }
  
  render() {
    const { companyAvatar,companyName,companyAddress,link,phoneNumber,email } = this.state;

    
    return (
      <div className='PublicOrganization'>
        <CompanyName companyName={'Company ABC'} />
        <div className="container body">
            <OrganizationInfo />
            <CompanyInfoCard 
              companyName={companyName}
              companyAvatar={companyAvatar} 
              companyAddress={companyAddress}
              phoneNumber={phoneNumber}
              email={email}
              link={link}
            />
            
         
          
        </div>
        
      </div>
    )
  }
}

export default PublicOrganization
