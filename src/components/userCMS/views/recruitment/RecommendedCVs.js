import React, { Component } from 'react';
import ListItem from '../../../share/ListItem';
import _ from 'lodash';
import request from 'superagent';
import async from 'async';
import moment from 'moment';
import Spinner from 'react-spinkit';
class RecommendedCVs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruitment: {},
      cvs: []
    }
  }
  getRecruitment(id) {
    async.waterfall([
      (callback) => {
        const token = localStorage.getItem('token');
        if (token) {
          request
            .get(`/api/recruitment/${id}`)
            .set('x-access-token', token)
            .end((err, res) => {
              if (err) console.log(err);
              else {
                callback(null, res.body.result);
              }
            })
        }
      },
      (recruitment, callback) => {
        recruitment.requirement.field = [];
        async.each(recruitment.requirement.fieldName, (item, next) => {
          const token = localStorage.getItem('token');
          if (token) {
            request
              .get("/api/field/field3/" + item)
              .end((err, res) => {
                if (err) console.log(err);
                const field = res.body.result;
                recruitment.requirement.field.push(field);
                next();
              })
          }
        }, (err) => {
          if (err) console.log(err);

          callback(null, recruitment);
        })
      }
    ], (err, result) => {
      if (err) console.log(err);
      console.log(result);
      this.setState({ recruitment: result });
    }
    )
  }
  getRecommededCVs(id) {
    const token = localStorage.getItem('token');
    if (token) {
      request
        .get(`/api/recruitment/recommend-user/${this.props.params.id}`)
        .set('x-access-token', token)
        .end((err, res) => {
          if (err) console.log(err);
          else {
            this.setState({ cvs: res.body.recommededUsers });
          }
        })
    }
  }
  dataList = (arr) => {
    const result = arr.map((item) => {
      return (
        <a className="ui label" key={item}>
          {item}
        </a>
      )
    });
    return result;
  }
  renderRecruitment(propRecruitment) {
    if (_.isEmpty(propRecruitment)) {
      return (
        <div className="row">
          <div className="col-sm-12 spinner-container">
            <Spinner name="three-bounce" color="#14b1bb" className="spinner-center" />
          </div>
        </div>
      )
    }
    const { requirement } = propRecruitment;
    const field = requirement.field.map(elem => elem.viName);
    return (
      <section id="header">
        <h2>Đề xuất hồ sơ cho {propRecruitment.title}</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Chuyên ngành</th>
                    <th>Vị trí</th>
                    <th>Số lượng</th>
                    <th>Loại công việc</th>
                    <th>Bằng cấp</th>
                    <th>Giới tính</th>
                    <th>Ngôn ngữ</th>
                    <th>Kỹ năng</th>
                    <th>Lương (triệu)</th>
                    <th>Kinh nghiệm (năm)</th>
                  </tr>
                </thead>
                <tbody>
                  <td>{this.dataList(field)}</td>
                  <td>{this.dataList(requirement.positions)}</td>
                  <td>{requirement.quantity}</td>
                  <td>{this.dataList(requirement.jobType)}</td>
                  <td>{requirement.atLeastDegree}</td>
                  <td>{requirement.gender}</td>
                  <td>{this.dataList(requirement.languages)}</td>
                  <td>{this.dataList(requirement.skills)}</td>
                  <td>{`${requirement.minSalary} - ${requirement.maxSalary}`}</td>
                  <td>{requirement.minExperience}</td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    )
  }
  renderCVs(propCVs) {
    try {
      if (_.isEmpty(propCVs)) {
        return (
          <div className="row">
            <div className="col-sm-12 spinner-container">
              <Spinner name="three-bounce" color="#14b1bb" className="spinner-center" />
            </div>
          </div>
        )
      }
      const cvs = propCVs.map(
        elem => {
          const languages = elem._languages.map(lang => lang.language_name);
          const skills = _.flattenDeep(elem._skills.map(skill => skill.skill_name));
          const relevantStr = (elem.similarity)? `${Math.round(elem.similarity*100)}% phù hợp`: '';
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
            sub1={(elem.fieldName)? elem.fieldName.viName: ''}
            sub2={(elem.fieldName)? elem.fieldName.engName: ''}
            sub3={relevantStr}
            sub5={(elem.jobSearch.isOn) ? 'Đang tìm việc' : ''}
            col1_footer={`Cập nhật ${moment(new Date(elem.updatedDate), "YYYYMMDD").fromNow()}`}
            col2_topleft={`${elem.address.streetNo} ${elem.address.ward} ${elem.address.district} ${elem.address.province}`}
            col2_topright=""
            col2_btmleft={elem.positions} // array
            col2_btmright=""
            col2_footer={languages} // array
            col3_top={`Có ${elem.experience} năm kinh nghiệm`}
            tags={skills} //array
          />)
        }
      )
      return (
        <section className="recommendation">
          <h2>Hồ sơ phù hợp</h2>
          <div className="row">
            <div className="col-sm-10">
              <div className="list-item">
                {cvs}
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
  componentWillMount() {
    this.getRecruitment(this.props.params.id);
    this.getRecommededCVs(this.props.params.id);
  }

  render() {
    const { recruitment, cvs } = this.state;
    return (
      <div className="container-fluid">
        {this.renderRecruitment(recruitment)}
        {this.renderCVs(cvs)}
      </div>
    )
  }
}

export default RecommendedCVs