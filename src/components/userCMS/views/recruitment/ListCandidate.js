import React, { Component } from 'react';
import { Link } from 'react-router';
import ListItem from '../../../share/ListItem';
import _ from 'lodash';
import request from 'superagent';
import async from 'async';
import moment from 'moment';
import Spinner from 'react-spinkit';
import DataTable from '../share/DataTable';
import matchSorter from 'match-sorter'
import { NOT_APPLIED, NOT_INVITED, INVITATION_STATUS, STATUS } from '../../../../commons/constants';


moment.locale('vi');

class ListCandidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruitment: {},
      // cvs: []
    }
  }
  getRecruitment(id) {
    async.waterfall([
      (callback) => {
        const token = localStorage.getItem('token');
        if (token) {
          request
            .get(`/api/recruitment/recruitment-userCMS/${id}`)
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
      this.setState({ recruitment: result });
    }
    )
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
 
  getAge = (birthdate) => {
    var then = new Date(birthdate).getTime();
    var now = Date.now();
    var age = Math.floor((now - then) / (365 * 86400000));
    return age;
  }
  cancelInvitation(e, candidateId) {
    const token = localStorage.getItem('token');
    const confirm = window.confirm('Bạn có muốn hủy lời mời?');
    if (!confirm || !token) return;
    const data = {
      candidateId,
      recruitmentId: this.props.params.id
    }
    request
    .delete('/api/recruitment/interested-candidates/invitation')
    .set('x-access-token', token)
    .send(data)
    .end((err, res) => {
      if (err) console.log(err);
      else {
        window.location.reload();
      }
    })
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
        {/* <div className="row">
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
                  <tr>
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="table-responsive col-sm-12">
            <h1>{propRecruitment.title}</h1>
            <table className="table">
              <tbody>
                <tr>
                  <td>Chuyên ngành</td>
                  <td>
                    <div className="ui brown labels">

                      {this.dataList(field)}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Vị trí</td>
                  <td>
                    <div className="ui brown labels">

                      {this.dataList(requirement.positions)}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Số lượng</td>
                  <td>{requirement.quantity} người</td>
                </tr>
                <tr>
                  <td>Bằng cấp</td>
                  {(requirement.atLeastDegree === "Không yêu cầu") ?
                    <td>{requirement.atLeastDegree}</td>
                    : <td>{requirement.atLeastDegree} trở lên</td>}
                </tr>
                <tr>
                  <td>Kinh nghiệm</td>
                  <td>{requirement.minExperience} năm trở lên</td>
                </tr>
                <tr >
                  <td>Tuổi</td>
                  <td>{requirement.minAge} đến {requirement.maxAge} tuổi</td>

                </tr>
                <tr>
                  <td>Ngôn ngữ</td>
                  <td >
                    <div className="ui purple labels">

                      {this.dataList(requirement.languages, 1)}
                    </div>
                  </td>

                </tr>
                <tr>
                  <td>Kỹ năng</td>
                  <td>
                    <div className="ui labels">
                      {this.dataList(requirement.skills, 2)}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Giới tính</td>
                  <td>{requirement.gender}</td>
                </tr>
                {/* <tr>
                  <td>Hồ sơ</td>
                  <td>
                    <div className="ui orange labels">
 

                      {this.dataList(applications, 4)}
                    </div>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        <hr/>
      </section>
 
    )
  }
  renderCandidates(propCandidates, interestedCandidates) {
    try {
      if (_.isEmpty(propCandidates) && _.isEmpty(interestedCandidates)) {
        return (
          <div className="row">
            <div className="col-sm-12 spinner-container">
              <Spinner name="three-bounce" color="#14b1bb" className="spinner-center" />
            </div>
          </div>
        )
      }
      interestedCandidates.forEach((o) =>{
        Object.keys(o).forEach((k) => {
            if (k === 'isAccepted') {
                o.invitationStatus = o[k];
                delete o[k];
            }
            if (k === 'candidateId') {
              o.userId = o[k];
              delete o[k];
            }
        });
      });
      const diff1 = _.differenceBy(interestedCandidates, propCandidates, 'userId._id').map(elem => {
        return {
          ...elem,
          isAccepted: NOT_APPLIED
        }
      });
      
      const diff2 = _.differenceBy(propCandidates, interestedCandidates, 'userId._id').map(elem => {
        return {
          ...elem,
          invitationStatus: NOT_INVITED
        }
      });
      const common = propCandidates.map(elem => {
        const intersect = interestedCandidates.find(item => item.userId._id === elem.userId._id);
        if (intersect) {
          return {
            ...elem,
            invitationStatus: intersect.invitationStatus
          }
        }
        return null
      }).filter(elem => elem !== null)
      const final = _.concat(diff1, diff2, common).sort((a,b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime());
      const candidates = final.map(elem => {
        const cv = elem.userId;
        const status = STATUS[elem.isAccepted];
        const invitationStatus = INVITATION_STATUS[elem.invitationStatus]
        return {
          fullname: `${cv.lastname} ${cv.firstname}`,
          gender: cv.gender,
          YOB:  moment(cv.birthdate).format('DD/MM/YYYY'),
          address: `${cv.address.streetNo} ${cv.address.ward} ${cv.address.district} ${cv.address.province}`,
          degree: cv.educationLevel,
          positions: cv.positions.join(","),
          experience: cv.experience,
          url: elem.CVUrl,
          status,
          invitationStatus,
          updatedDate: moment(elem.updatedDate).format("DD/MM/YYYY HH:mm"),
          id: cv._id
        }
      });
      
      const columns = [{
        Header: 'Họ và tên',
        accessor: 'fullname',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["fullname"] }),
        filterAll: true
      }, {
        Header: 'Giới tính',
        accessor: 'gender',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["gender"] }),
        filterAll: true
      }, {
        Header: 'Năm sinh',
        accessor: 'YOB',
        style: {textAlign: "center"},
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["YOB"] }),
        filterAll: true
      }, {
        Header: 'Địa chỉ',
        accessor: 'address',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["address"] }),
        filterAll: true
      }, /* {
        Header: 'Bằng cấp',
        accessor: 'degree',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["degree"] }),
        filterAll: true
      } ,*/ /* {
        Header: 'Vị trí',
        accessor: 'positions',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["positions"] }),
        filterAll: true
      }, */ /* {
        Header: 'Kinh nghiệm',
        accessor: 'experience',
        style: {textAlign: "center"},
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["experience"] }),
        filterAll: true
      } ,*/ {
        Header: 'Hồ sơ',
        accessor: 'url',
        Cell: props => (props.original.status !== NOT_APPLIED )? <Link to={props.value}>Chi tiết</Link>: null,
        style: {textAlign: "center"},
        maxWidth: 80,
        minWidth: 80,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["url"] }),
        filterAll: true
      }, {
        Header: 'Ngày nộp',
        accessor: 'updatedDate',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["updatedDate"] }),
        filterAll: true
      }, {
        Header: 'Trạng thái duyệt CV',
        accessor: 'status',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["status"] }),
        filterAll: true
      }, {
        Header: 'Lời mời ứng tuyển',
        accessor: 'invitationStatus',
        Cell: props => <div>
          <span>{props.value}</span> <br/>
          {(props.value === INVITATION_STATUS.unknown)? <Link onClick={(e) => this.cancelInvitation(e, props.original.id)}>Hủy bỏ lời mời</Link>: null}
        </div>,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["invitationStatus"] }),
        filterAll: true
      }];
      return (
        <section className="list-candidate">
          <h2>Danh sách ứng tuyển viên</h2>
          <DataTable data={candidates} columns={columns} />
        </section>
      )
    } catch (error) {
      console.log(error);
      return <div>404 Not Found.</div>
    }
  }
  componentWillMount() {
    this.getRecruitment(this.props.params.id);
    // this.getCandidates(this.props.params.id);
  }
 
  render() {
    const { recruitment } = this.state;
    return (
      <div className="container-fluid">
        {this.renderRecruitment(recruitment)}
        {this.renderCandidates(recruitment._candidates, recruitment.interestedCandidates)}
      </div>
    )
  }
}
 
export default ListCandidate