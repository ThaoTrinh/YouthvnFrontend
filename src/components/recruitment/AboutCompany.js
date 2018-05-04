import React, { Component } from 'react'
import {Link} from 'react-router';
import UserAvatar from 'react-user-avatar';
class AboutCompany extends Component {
  renderImage(propOrganization) {
    if (!propOrganization.id || !propOrganization.id._banner) {
      return (
        <Link to="/">
          <img 
          src="https//placehold.it/200x200" 
          alt="embedded" width="100%" 
          className="recruitment-img-responsive"/>
        </Link>
      )
    }
    let arr = [], banner = '';
    try {
      arr = propOrganization.id._banner.url.split('/');
      banner =  '/' + [arr[arr.length-2], arr[arr.length-1]].join('/');  
    } catch (error) {}
    
    return (
      <Link to={`/organizations/${propOrganization.id._id}`}>
        <img 
          src={banner} 
          alt="embedded" width="100%" height="200px" 
          className="recruitment-img-responsive"/>
      </Link>
    )
  }
  renderTitle(propOrganization) {
    if (!propOrganization.id || !propOrganization.id._logo) {
      return <h3>{propOrganization.name}</h3>
    }
    let arr = [], logo = '';
    try {
      arr = propOrganization.id._logo.url.split('/');
      logo =  '/' + [arr[arr.length-2], arr[arr.length-1]].join('/');  
    } catch (error) {}
    return (
      <div style={{marginTop: 17}}>
          <Link to={`/organizations/${propOrganization.id._id}`}>
            <UserAvatar size="48" name="EX" src={logo} />
          </Link>
          <Link to={`/organizations/${propOrganization.id._id}`}>
          <span style={{fontWeight: 'bold', fontSize: 18, marginLeft: 10, position: 'absolute', marginTop: 15}}>{propOrganization.id.name}</span>
          </Link>
          
          
      </div> 
    )
      
  }
  renderAddress(propOrganization) {
    if (!propOrganization.id) {
      return (
        <div className="recruitment-data">
          <span className="city">
            <i className="fa fa-map-marker"></i>
            {`${propOrganization.streetNumber} ${propOrganization.ward} ${propOrganization.district} ${propOrganization.province}`}
          </span>
          <span className="job-type">
            <i className="fa fa-clock-o"></i>
            Quốc gia: Việt Nam
          </span>
        </div>
      )
    }
    return (
      <div className="recruitment-data">
        <span className="city">
          <i className="fa fa-map-marker"></i>
          {`${propOrganization.id.location.streetNumber} ${propOrganization.id.location.ward} ${propOrganization.id.location.district} ${propOrganization.id.location.province}`}
        </span>
        <span className="job-type">
          <i className="fa fa-clock-o"></i>
          Quốc gia: Việt Nam
        </span>
      </div>
    )
  }
  renderDescription(propOrganization) {
    if (!propOrganization.id) {
      return (
        <div className="recruitment-company-content">
          {propOrganization.description}
        </div>
      )
    }
    return (
      <div className="recruitment-company-content">
        {propOrganization.id.description}
      </div>
    )
  }
  renderLink(propOrganization) {
    if (!propOrganization.id) {
      return null;
    }
    return (
      <Link to={`/organizations/${propOrganization.id._id}`}>Xem chi tiết</Link>
    )
  }
  render () {
    const {organization} = this.props;
    
    return (
      <div className="col-sm-3">
        <h2>Về công ty chúng tôi</h2>
        {this.renderImage(organization)}
        {this.renderTitle(organization)}
        {this.renderAddress(organization)}
        {this.renderDescription(organization)}
        {this.renderLink(organization)}
      </div>
    )
  }
}

export default AboutCompany