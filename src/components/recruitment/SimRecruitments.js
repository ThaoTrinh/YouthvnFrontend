import React, { Component } from 'react'
import ListItem from '../share/ListItem';
import _ from 'lodash';
import moment from 'moment';
import Spinner from 'react-spinkit';
const FULL_SIZE = 10;
const SHOW_SIZE = 5;
class SimRecruitments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  renderRecruitments(propRecruitments, pageSize = SHOW_SIZE) {
    try {
      if (_.isEmpty(propRecruitments)) {
        return (
          <div className="row">
            <div className="col-sm-12 spinner-container">
              <Spinner name="three-bounce" color="#14b1bb" className="spinner-center"/>
            </div>
          </div>
        )
      }
      const recruitments = propRecruitments.map(
        (elem, index) => {
          if (index < pageSize) {
            const relevantStr = (elem.similarity)? `${Math.round(elem.similarity*100)}% liên quan`: 'Được đề xuất cho bạn';
            return (<ListItem
              key={elem._id} 
              linkTo={`/recruitments/${elem._id}`}
              name={elem.title}
              sub1="Ebay Inc."
              col1_footer={`Cập nhật ${moment(new Date(elem.updatedDate), "YYYYMMDD").fromNow()}`}
              sub2="Slogan company"
              sub3={relevantStr}
              col2_topleft={`${elem.location.streetNumber} ${elem.location.ward} ${elem.location.district} ${elem.location.province}`}
              col2_topright=""
              col2_btmleft={elem.requirement.jobType}
              col2_btmright=""
              col2_footer={elem.requirement.positions}
              col3_top={`Lương: ${elem.requirement.minSalary} - ${elem.requirement.maxSalary} triệu`}
              tags={elem.requirement.skills}
            />)
          }
          else return null;
        }
      ).filter(elem => elem !== null);
      return (
        <div className="list-item">
          {recruitments}
        </div>
      )
    } catch (error) {
      console.log(error);
      return <div>404 Not Found.</div>
    }
  }
  renderExpanseBtn(propRecruitments, show) {
    if (_.isEmpty(propRecruitments)) {
      return null;
    }
    return (
      <div className="row">
        <div className="col-sm-12">
          <button 
            className="btn btn-primary" 
            style={{backgroundColor: '#14b1bb', borderColor: '#14b1bb', color: 'black!important'}}
            onClick={(e) => this.handleClick(show)}>
            {(show)
            ? <span>Rút gọn <i className="fa fa-arrow-up"></i></span>
            : <span>Xem thêm <i className="fa fa-arrow-down"></i></span>
            }
          </button>
        </div>
      </div>
    )
  }
  handleClick(show) {
    this.setState({show: !show});
  }
  render () {
    const { recruitments, title } = this.props;
    const {show} = this.state;
    return (
      <div className="row" style={{marginBottom: 10}}>
        <div className="col-md-8">
          <h2>{title}</h2>
          {this.renderRecruitments(recruitments, (show)? FULL_SIZE: SHOW_SIZE)}
          {this.renderExpanseBtn(recruitments, show)}
        </div>
      </div>
    )
  }
}

export default SimRecruitments