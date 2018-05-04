import React, { Component } from 'react'
import {Link} from 'react-router';
import moment from 'moment';
class JobDescription extends Component {
  render () {
    const { recruitment } = this.props;
    const content = recruitment.content;
    const benefit = recruitment.benefit;

    return (
      <div className="col-sm-5">
        <h2>Mô tả công việc</h2>
        <div className="recruitment-data">
          <span className="city">
            <i className="fa fa-map-marker"></i>
            Nơi làm việc: {`${recruitment.location.streetNumber} ${recruitment.location.ward} ${recruitment.location.district} ${recruitment.location.province}`}
          </span>
          <span className="job-type">
            <i className="fa fa-clock-o"></i>
            Loại công việc: {recruitment.requirement.jobType.map(elem => <span className="ui green label" key={elem}>{elem}</span>)}
          </span>
          <span className="salary" style={{color: 'red'}}>
            <i className="fa fa-dollar"></i>
            Lương: {recruitment.requirement.minSalary} - {recruitment.requirement.maxSalary} triệu
          </span>
          <span className="slot">
            <i className="fa fa-group"></i>
            Số lượng: {recruitment.requirement.quantity}
          </span>
          <span className="receive-CV-time">
            <i className="fa fa-clock-o"></i>
            Thời gian nhận hồ sơ: {moment(recruitment.startDate).format('HH giờ DD/MM/YYYY')} đến {moment(recruitment.endDate).format('HH giờ DD/MM/YYYY ')} 
          </span>
        </div>
        <div className="recruitment-content">
          <h3>Mô tả công việc</h3>
          <div dangerouslySetInnerHTML={{__html: content}} />
        </div>
        <div className="recruitment-benefit">
          <h3>Quyền lợi</h3>
          <div dangerouslySetInnerHTML={{__html: benefit}} />
        </div>
      </div>
    )
  }
}

export default JobDescription