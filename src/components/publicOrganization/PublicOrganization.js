import React, { Component } from 'react'
import { Link } from 'react-router';
import OrganizationHeader from './OrganizationHeader';
import OrganizationContent from './OrganizationContent';
import Employees from './Employees';
import Events from './Events';
import OrgRecruitments from './OrgRecruitments';
import _ from 'lodash';
import request from 'superagent';
import loading from '../../assets/icon/Rolling.gif';

class PublicOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: {}
    }
  }
  getOne(id) {
    request
      .get(`/api/organization/${id}`)
      .end((err, res) => {
        if (err) {
          console.log(err);
        }
        else {
          const { organization } = res.body;
          this.setState({ organization });
        }
      })
  }
  countView(id) {
    request
      .post('/api/organization/view')
      .send({ id })
      .end((err, res) => {
        if (err) {
          console.log(err);
        }
      })
  }
  componentWillMount() {
    this.getOne(this.props.params.id);
    this.countView(this.props.params.id);
  }

  render() {
    const { organization } = this.state;

    if (_.isEmpty(organization)) {
      return (
        <div className="loading-icon">
          <img src={loading} />
        </div>
      )
    }

    var arr = [], arr2 = [], logo = '', banner = '';
    try {
      arr = organization._logo.url.split('/');
      logo = '/' + [arr[arr.length - 2], arr[arr.length - 1]].join('/');
      arr2 = organization._banner.url.split('/');
      banner = '/' + [arr2[arr2.length - 2], arr2[arr2.length - 1]].join('/');
    } catch (error) { };

    return (
      <div className="container">
        <div className="push"></div>
        <OrganizationHeader 
          name={organization.name}
          logo={logo}
          slogan={organization.slogan}
        />
        <div className="row" style={{padding: '80px 0'}}>
          <div className="col-sm-8 organization-content" style={{ color: '#888', lineHeight: 1.71 }}>
            <OrganizationContent 
              banner={banner}
              description={organization.description}
              strongPoints={organization.strongPoints}
              vision={organization.vision}
              mission={organization.mission}
              tags={organization.tags}
              phone={organization.phone}
              email={organization.email}
              location={organization.location}
              fieldNames={organization.fieldNames}
            />
          </div>
          <div className="col-sm-4 organization-sidebar" style={{ lineHeight: 1.71 }}>
            <OrgRecruitments 
              recruitments={organization._recruitments.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())}
            />
            <Employees 
              employees={organization._employees}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PublicOrganization
