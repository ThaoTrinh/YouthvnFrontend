import React, { Component } from 'react'
import ListItem from '../share/ListItem';
import _ from 'lodash';
import moment from 'moment';
import Spinner from 'react-spinkit';
const FULL_SIZE = 10;
const SHOW_SIZE = 5;
class SimUserCVs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  renderCVs(propCVs, pageSize = SHOW_SIZE) {
    try {
      if (_.isEmpty(propCVs)) {
        return (
          <div className="row">
            <div className="col-sm-12 spinner-container">
              <Spinner name="three-bounce" color="#14b1bb" className="spinner-center"/>
            </div>
          </div>
        )
      }
      const cvs = propCVs.map(
        (elem, index) => {
          if (index < pageSize) {
            const relevantStr = (elem.similarity)? `${Math.round(elem.similarity*100)}% liên quan`: 'Được đề xuất cho bạn';
            const languages = elem._languages.map(lang => lang.language_name);
            const skills = _.flattenDeep(elem._skills.map(skill => skill.skill_name));
            var arr=[], avatar = '';
            try {
              arr = elem._avatar.url.split('/');  
              avatar =  '/' + [arr[arr.length-2], arr[arr.length-1]].join('/');
            } catch (error) {}
            return (<ListItem
              key={elem._id} 
              linkTo={`/cvs/${elem._id}`}
              imageUrl={avatar}
              name={`${elem.lastname} ${elem.firstname}`}
              sub1={(elem.fieldName)? elem.fieldName.viName: ""}
              sub2={(elem.fieldName)? elem.fieldName.engName: ""} // jobField
              col1_footer={`Cập nhật ${moment(new Date(elem.updatedDate), "YYYYMMDD").fromNow()}`}
              sub5={(elem.jobSearch.isOn)? 'Đang tìm việc': ''}
              sub3={relevantStr}
              col2_topleft={`${elem.address.streetNo} ${elem.address.ward} ${elem.address.district} ${elem.address.province}`}
              col2_topright=""
              col2_btmleft={elem.positions} // array
              col2_btmright=""
              col2_footer={languages} // array
              col3_top={`Có ${elem.experience} năm kinh nghiệm`}
              tags={skills} //array
            />)
          }
          else return null;
        }
      ).filter(elem => elem !== null);
      return (
        <div className="list-item">
          {cvs}
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
    moment.locale('vi');
    const { cvs, title } = this.props;
    const { show } = this.state;
    return (
      <div style={{marginBottom: 10}}>
        <div className="col-sm-5">
          <h2>{title}</h2>
          {this.renderCVs(cvs, (show)? FULL_SIZE: SHOW_SIZE)}
          {this.renderExpanseBtn(cvs, show)}
        </div>
      </div>
    )
  }
}

export default SimUserCVs