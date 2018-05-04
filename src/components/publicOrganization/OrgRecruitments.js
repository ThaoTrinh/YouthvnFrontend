import React from 'react';
import moment from 'moment';
import loading from '../../assets/icon/Rolling.gif';
import { Link } from 'react-router';

class OrgRecruitments extends React.Component {
  renderLi(propRecruitments) {
    if (!propRecruitments || propRecruitments.length === 0) {
      return <div>Không có tin tuyển dụng nào</div>
    }
    return propRecruitments.map(elem => {
      return (
        <li key={elem._id}>
          <Link to={`/recruitments/${elem._id}`}>
            <span className="meta">
              {moment(elem.updatedAt).format('DD/MM/YYYY')}
            </span>
            {elem.title}
          </Link>
        </li>
      )
    })

  }
  render() {
    const { recruitments } = this.props;
    return (
      <div className="sidebar-links organization-recruitments" >
        <h5>
          <span className="fa-stack fa-lg" >
            <i className="fa fa-circle fa-stack-2x" ></i>
            <i className="fa fa-folder fa-stack-1x fa-inverse"></i>
          </span>
          Tin tuyển dụng
        </h5>
        <ul>
          {this.renderLi(recruitments)}
        </ul>
      </div>
    )
  }
}
export default OrgRecruitments
