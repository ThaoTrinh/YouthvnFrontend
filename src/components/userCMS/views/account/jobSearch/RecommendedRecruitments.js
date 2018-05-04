import React, { Component } from 'react'
import { Link } from 'react-router';
import ListItem from '../../../../share/ListItem';
import _ from 'lodash';
import moment from 'moment';
import Spinner from 'react-spinkit';
import request from 'superagent';
import swal from 'sweetalert2';
class RecommendedRecruitments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruitments: []
    }
  }
  getRecruitments(id) {
    const token = localStorage.getItem('token');
    if (token) {
      request
      .get(`/api/user/recommend-recruitment/${id}`)
      .set('x-access-token', token)
      .end((err, res) => {
        if (err) console.log(err);
        else {
          this.setState({recruitments: res.body.recommededRecruitments});
        }
      })
    }
  }
  
  componentWillMount () {
    try {
      this.getRecruitments(this.props.user._id);  
    } catch (error) {
      console.log(error);
      swal({
        title: 'Có lỗi xảy ra. Vui lòng thử lại sau.',
        text: '',
        type: 'error',
        timer: 1500
      }).then((result) => {
        if (result.dismiss === 'timer') {
            return;
        }
      })
    }
    
  }
  
  renderRecruitments(propRecruitments) {
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
        elem => {
          const relevantStr = (elem.similarity)? `${Math.round(elem.similarity*100)}% liên quan`: '';          
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
      )
      return (
        <section className="recommendation">
          <h2>Tin tuyển dụng phù hợp</h2>
          <div className="row">
            <div className="col-sm-10">
              <div className="list-item">
                {recruitments}
              </div>
            </div>
          </div>
        </section>
      )
    } catch (error) {
      console.log(error);
      return <div>404 Not Found.</div>
    } 
  }
  render () {
    moment.locale('vi');
    const { recruitments } = this.state;
    return (
      <div className="container-fluid">
        {this.renderRecruitments(recruitments)}
      </div>
    )
  }
}

export default RecommendedRecruitments