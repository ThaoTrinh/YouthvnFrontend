import React, { Component } from 'react'
import { Link } from 'react-router';
class OrganizationContent extends Component {
  renderTags(propTags) {
    if (!propTags || propTags.length === 0) return null;
    return propTags.map((elem) => {
      return (
        <li key={elem}>
          <Link to="/">{elem}</Link>
        </li>
      )
    })
  }
  render() {
    const { banner, description, strongPoints, vision, mission, tags, phone, email, location,
    fieldNames} = this.props;
    return (
      <article>
        <p>
          <img src={banner} alt="img" width="100%" />
        </p>
        <div className="recruitment-data" style={{color: '#14b1bb'}}>
          <span className="location">
            <i className="fa fa-map-marker"></i>
            Địa chỉ: {`${location.streetNumber} ${location.ward} ${location.district} ${location.province}`}
          </span>
          <span className="fields">
            <i className="fa fa-folder"></i>
            Lĩnh vực: {fieldNames.map(elem => <span className="ui teal label" key={elem.code}>{elem.viName}</span>)}
          </span>
          <span className="phone">
            <i className="fa fa-phone"></i>
            Điện thoại: {phone}
          </span>
          <span className="email">
            <i className="fa fa-envelope"></i>
            Email: {email}
          </span>
        </div>
        <p className="org-description">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </p>
        <blockquote className="org-strongPoints">
          <div dangerouslySetInnerHTML={{ __html: strongPoints }} />
        </blockquote>
        <div className="org-vision" style={{ color: 'black', lineHeight: 2 }} >
          <h3>Tầm nhìn</h3>
          <div dangerouslySetInnerHTML={{ __html: vision }} />
        </div>
        <div className="org-mission" style={{ color: 'black', lineHeight: 2 }}>
          <h3>Sứ mệnh</h3>
          <div dangerouslySetInnerHTML={{ __html: mission }} />
        </div>
        <ul className="org-share">
          <li>
            <h5>Chia sẻ</h5>
          </li>
          <li>
            <a href=""><i className="fa fa-2x fa-facebook-square"></i></a>
          </li>
          <li>
            <a href=""><i className="fa fa-2x fa-twitter-square"></i>
            </a>
          </li>
          <li>
            <a href=""><i className="fa fa-2x fa-linkedin-square"></i>
            </a>
          </li>
        </ul>
        <ul className="org-tags">
          <li>
            <i className="fa fa-tag"></i>
          </li>
          {this.renderTags(tags)}
        </ul>
      </article>

    )
  }
}

export default OrganizationContent