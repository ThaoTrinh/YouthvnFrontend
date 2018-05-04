import React from 'react';
import { Link, browserHistory } from 'react-router';
const $ = window.jQuery;
import Spinner from 'react-spinkit';
import DataTable from '../share/DataTable';
import matchSorter from 'match-sorter'
import request from 'superagent';
import async from 'async';
import _ from 'lodash';
import swal from 'sweetalert2';

class ListRecruitment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      showModal: false,
      recruitments: []
    }
    this.deleteRecruitment = this.deleteRecruitment.bind(this)
    this.updateRecruitment = this.updateRecruitment.bind(this)
    this.recommendCVs = this.recommendCVs.bind(this)
    this.listCandidates = this.listCandidates.bind(this)
  }

  deleteRecruitment = (id) => {
    const option = confirm("Bạn có muốn xóa tin tuyển dụng này?")
    if (option) {
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        $.ajax({
          method: "POST",
          url: "/api/user/delete-recruitment",
          data: { deleteId: id },
          headers: {
            'x-access-token': token
          },
        }).done(response => {
          if (response.success) {
            swal({
              title: 'Xóa thành công',
              type: 'success',
              timer: 1500,
              showConfirmButton: false,
              allowOutsideClick: false
            }).then((result) => {
              if (result.dismiss === 'timer') {
                window.location.reload();
              }
            })
          }
          else {
            swal({
              title: 'Xóa thất bại',
              type: 'error',
              timer: 1500,
            }).then((result) => {
              if (result.dismiss === 'timer') {
                return;
              }
            })
          }
        })
      }
      else {
        alert('Bạn chưa đăng nhập.');
      }
    }
  }

  updateRecruitment = (e, id) => {
    e.preventDefault();
    if (localStorage.getItem('token')) {
      browserHistory.push("/user/recruitment/update/" + id);
    }
    else {
      alert('Bạn chưa đăng nhập.');
    }
  }
  recommendCVs = (e, id) => {
    e.preventDefault();
    if (localStorage.getItem('token')) {
      browserHistory.push("/user/recruitment/recommended-cvs/" + id);
    }
    else {
      alert('Bạn chưa đăng nhập.');
    }
  }

  listCandidates = (e, id) => {
    e.preventDefault();
    if (localStorage.getItem('token')) {
      browserHistory.push("/user/recruitment/list-candidate/" + id);
    }
    else {
      alert('Bạn chưa đăng nhập.');
    }
  }

  getRecruitments = (userId) => {
    const token = localStorage.getItem('token');
    if (!token) return; 
    request
    .get('/api/recruitment/get-by-user-id')
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
      console.log(err);
      recruitment.fieldName = results;
      cb();
    })
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.getRecruitments(this.props.user._id);
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
        // const fieldName = this.getField3(requirement.fieldName);
        
        return {
          title: elem.title,
          fieldName: elem.fieldName.join(', '),
          position: requirement.positions.join(', '),
          quantity: requirement.quantity,
          jobType: requirement.jobType.join(', '),
          atLeastDegree: requirement.atLeastDegree,
          gender: requirement.gender,
          language: requirement.languages.join(', '),
          skill: requirement.skills.join(', '),
          salary: requirement.minSalary + " - " + requirement.maxSalary,
          experience: requirement.minExperience,
          id: elem._id
        }
      });
      const columns = [{
        Header: 'Tiêu đề',
        accessor: 'title',
        Cell: props => <Link to={`/user/recruitment/list-candidate/${props.original.id}`}>{props.value}</Link>,
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
        Header: 'Loại công việc',
        accessor: 'jobType',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["jobType"] }),
        filterAll: true
      }, {
        Header: 'Chi tiết',
        accessor: 'id',
        maxWidth: 80,
        minWidth: 80,
        Cell: props => <Link onClick={(e) => this.listCandidates(e, props.value)}>Chi tiết</Link>
      }, {
        Header: '',
        accessor: 'id',
        style: {textAlign: "center"},
        maxWidth: 150,
        minWidth: 140,
        Cell: props => 
          <div>
            <button
              onClick={(e) => this.updateRecruitment(e, props.value)}
              className="btn btn-primary"
              data-toggle="tooltip" data-placement="bottom" title="Chỉnh sửa">
              <i className="fa fa-pencil-square-o"></i>
            </button>
            <button
              onClick={() => this.deleteRecruitment(props.value)}
              className="btn btn-danger"
              data-toggle="tooltip" data-placement="bottom" title="Xóa">
              <i className="fa fa-trash-o"></i>
            </button>
            <button
              onClick={(e) => this.recommendCVs(e, props.value)}
              className="btn btn-success"
              data-toggle="tooltip" data-placement="bottom" title="Đề xuất hồ sơ phù hợp">
              <i className="fa fa-users"></i>
            </button>
          </div>,
      }];
      return (
        <section className="list-candidate">
          <h2>Danh sách tin tuyển dụng</h2>
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

export default ListRecruitment
