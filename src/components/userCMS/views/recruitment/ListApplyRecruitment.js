import React from 'react';
import { Link, browserHistory } from 'react-router';
const $ = window.jQuery;
import Spinner from 'react-spinkit';
import DataTable from '../share/DataTable';
import matchSorter from 'match-sorter'
import request from 'superagent';
import async from 'async';
import _ from 'lodash';
import { NOT_APPLIED, NOT_INVITED, INVITATION_STATUS, STATUS } from '../../../../commons/constants';

class ListApplyRecruitment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recruitments: []
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.getRecruitments(this.props.user._id);
  }

  getRecruitments = (userId) => {
    const token = localStorage.getItem('token');
    if (!token) return;
    request
      .get('/api/recruitment/get-applied-recruitments')
      .set('x-access-token', token)
      .end((err, res) => {
        const recruitments = res.body.recruitments;
        async.each(recruitments, (elem, callback) => {
          this.getField3(elem.requirement.fieldName, elem, callback);
        }, (err) => {
          this.setState({ recruitments });
        })
      })
  }

  getField3 = (arr, recruitment, cb) => {
    var results = [];
    async.each(arr, (item, callback) => {
      request
        .get("/api/field/field3/" + item)
        .end((error, res) => {
          const field = res.body.result;
          results.push(field.viName);
          callback();
        })
    }, (err) => {
      if (err) console.log(err);
      else {
        recruitment.fieldName = results;
      }
      cb();
    })
  }

  renderRecruitments(propRecruitments) {
    try {
      if (_.isEmpty(propRecruitments)) {
        return (
          <div className="row">
            <div className="col-sm-12 spinner-container">
              <Spinner name="three-bounce" color="#14b1bb" className="spinner-center" />
            </div>
          </div>
        )
      }
      const recruitments = propRecruitments.map(elem => {
        const requirement = elem.requirement;
        const candidate = elem._candidates.find((c) => {
          return c.userId == this.props.user._id;
        })
        
        const status = (candidate) ? STATUS[candidate.isAccepted]: '';
        return {
          title: elem.title,
          fieldName: elem.fieldName,
          position: requirement.positions.join(', '),
          jobType: requirement.jobType.join(', '),
          id: elem._id,
          address: `${elem.location.streetNumber} ${elem.location.ward} ${elem.location.district} ${elem.location.province}`,
          status
        }
      });
      const columns = [{
        Header: 'Tiêu đề',
        accessor: 'title',
        Cell: props => <Link to={`/recruitments/${props.original.id}`}>{props.value}</Link>,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["title"] }),
        filterAll: true
      }, {
        Header: 'Chuyên ngành',
        accessor: 'fieldName',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["fieldName"] }),
        filterAll: true
      }, {
        Header: 'Vị trí',
        accessor: 'position',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["position"] }),
        filterAll: true
      }, {
        Header: 'Địa chỉ',
        accessor: 'address',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["address"] }),
        filterAll: true
      }, {
        Header: 'Loại công việc',
        accessor: 'jobType',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["jobType"] }),
        filterAll: true
      }, {
        Header: 'Trạng thái duyệt CV',
        accessor: 'status',
        style: { textAlign: "center" },
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["status"] }),
        filterAll: true
      }];
      return (
        <section className="list-candidate">
          <h2>Danh sách tin tuyển dụng đã ứng tuyển</h2>
          <DataTable data={recruitments} columns={columns} />
        </section>
      )
    } catch (error) {
      console.log(error);
      return <div>404 Not Found.</div>
    }
  }

  render() {
    const { recruitments } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {this.renderRecruitments(recruitments)}
          </div>
        </div>
      </div>
    )
  }
}

export default ListApplyRecruitment
