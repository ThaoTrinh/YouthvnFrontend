import React, { Component } from 'react'
import { Link } from 'react-router';
import moment from 'moment';

import swal from 'sweetalert2';
import loading from '../../../../assets/icon/Rolling.gif';
import request from 'superagent';
import _ from 'lodash';
import DataTable from '../share/DataTable';
import matchSorter from 'match-sorter'
import { OrgModal, EmployeeBody, MODAL_TYPES, MODES } from './MyOrganization';
class OrganizationHeader extends Component {
  render() {
    const { organization } = this.props;
    if (!organization || _.isEmpty(organization)) {
      return (
        <div className="row">

          <img src={loading} />

        </div>
      )
    }
    var arr = [], logo = "", banner = "";
    try {
      arr = organization._logo.url.split('/');
      logo = '/' + [arr[arr.length - 2], arr[arr.length - 1]].join('/');
      arr = organization._banner.url.split('/');
      banner = '/' + [arr[arr.length - 2], arr[arr.length - 1]].join('/');
    } catch (error) { };
    return (
      <section id="header">
        <div className="row">
          <div className="table-responsive col-sm-12">
            <h1>{organization.name}</h1>
            <table className="table">
              <tbody>
                <tr>
                  <td>Banner</td>
                  <td>
                    <img src={banner} alt="img" height="200px" width="100%" />
                  </td>
                </tr>
                <tr>
                  <td>Logo</td>
                  <td>
                    <img src={logo} alt="img" height="50px" width="50px" />
                  </td>
                </tr>
                <tr>
                  <td>Số điện thoại</td>
                  <td>{organization.phone} </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{organization.email}</td>
                </tr>
                <tr>
                  <td>Địa chỉ</td>
                  <td>
                    {`${organization.location.streetNumber} ${organization.location.ward} ${organization.location.district} ${organization.location.province}`}
                  </td>
                </tr>
                <tr >
                  <td>Lĩnh vực</td>
                  <td>{
                    organization.fieldNames.map((elem, index) => {

                      if (index === organization.fieldNames.length - 1) {
                        return <span key={elem.code}>{elem.viName}</span>
                      }
                      return <span key={elem.code}>{elem.viName + ', '}</span>
                    }
                    )}
                  </td>

                </tr>
                <tr>
                  <td>Giới thiệu</td>
                  <td >
                    {organization.description}
                  </td>

                </tr>
                <tr>
                  <td>Slogan</td>
                  <td>
                    {organization.slogan}
                  </td>
                </tr>
                <tr>
                  <td>Điểm mạnh</td>
                  <td>
                    <div dangerouslySetInnerHTML={{ __html: organization.strongPoints }}></div>
                  </td>
                </tr>
                <tr>
                  <td>Sứ mệnh</td>
                  <td>
                    <div dangerouslySetInnerHTML={{ __html: organization.mission }}></div>
                  </td>
                </tr>
                <tr>
                  <td>Tầm nhìn</td>
                  <td>
                    <div dangerouslySetInnerHTML={{ __html: organization.vision }}></div>
                  </td>
                </tr>
                <tr>
                  <td>Loại tổ chức</td>
                  <td>{organization.type}</td>
                </tr>
                <tr>
                  <td>Tag</td>
                  <td>{
                    organization.tags.map(elem => (
                      <Link key={elem} to="/" style={{ marginRight: 10 }}>{elem}</Link>
                    ))
                  }</td>
                </tr>
                <tr>
                  <td>Ngày cập nhật</td>
                  <td>{moment(organization.updatedAt).format('DD/MM/YYYY')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
      </section>
    )
  }
}
class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      choosenUser: null,
      name_email: "",
      e_name: "",
      e_position: "",
      e_description: "",
      mode: MODES.ADD,
      orgEmployeeId: ""
    }
  }
  open() {
    this.setState({ showModal: true })
  }
  close = () => {
    this.setState({ showModal: false })
  }
  getUsers = (input) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    if (!input) {
      return Promise.resolve({ options: [] });
    }
    const headers = new Headers();
    headers.append('x-access-token', token);
    const myInit = {
      method: 'GET',
      headers
    }
    return fetch(`/api/user/search?searchStr=${input}`, myInit)
      .then((response) => response.json())
      .then((json) => {
        const options = json.users.map(u => {
          return {
            value: u._id,
            label: `${u.firstname} ${u.lastname} - ${u.email}`
          }
        })
        return { options };
      });
  }
  handleAddNewEmployee = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return;

    const { choosenUser, e_name, e_position, e_description } = this.state;
    const data = {
      name: "",
      position: e_position,
      description: e_description,
      _employee: choosenUser,
      _organization: this.props.organization._id
    };
    request
      .post('/api/organization/employee')
      .set('x-access-token', token)
      .send(data)
      .end((err, res) => {
        if (err) {
          swal({
            title: 'Lỗi hệ thống',
            text: '',
            type: 'error',
            timer: 1500,
            onOpen: () => {
              swal.showLoading()
            }
          }).then((result) => {
            if (result.dismiss === 'timer') {
              console.log(err);
              return;
            }
          })
        }
        else {
          if (res.body.success) {
            swal({
              title: 'Thêm mới thành công',
              text: '',
              type: 'success',
              timer: 1500,
              onOpen: () => {
                swal.showLoading()
              }
            }).then((result) => {
              if (result.dismiss === 'timer') {
                window.location.reload();
              }
            })
          }
          else {
            swal({
              title: res.body.message,
              text: '',
              type: 'error',
              timer: 1500,
              onOpen: () => {
                swal.showLoading()
              }
            }).then((result) => {
              if (result.dismiss === 'timer') {
                return;
              }
            })
          }

        }
      })
  }
  handleChange = (e, type) => {
    switch (type) {
      case 'e-name':
        this.setState({ e_name: e.target.value })
        break;
      case 'e-position':
        this.setState({ e_position: e.target.value })
        break;
      case 'e-description':
        this.setState({ e_description: e.target.value })
        break;
      case 'e-search':

        this.setState({ choosenUser: e.value })
        break;
      default:
        break;
    }
  }
  handleUpdateEmployee = (e) => {
    const token = localStorage.getItem('token');
    if (!token) return;
    const data = {position: this.state.e_position, description: this.state.e_description}

    request
    .put(`/api/organization/employee/${this.state.orgEmployeeId}`)
    .set('x-access-token', token)
    .send(data)
    .end((err, res) => {
      if (err) {
        console.log(err);
        swal({
          title: 'Cập nhật thất bại',
          text: '',
          type: 'error',
          timer: 1500,
          onOpen: () => {
            swal.showLoading()
          }
        }).then((result) => {
          if (result.dismiss === 'timer') {
            return;
          }
        })
      }
      else {
        swal({
          title: 'Cập nhật thành công',
          text: '',
          type: 'success',
          timer: 1500,
          onOpen: () => {
            swal.showLoading()
          }
        }).then((result) => {
          if (result.dismiss === 'timer') {
            window.location.reload();
          }
        })
      }
    })
  }
  getEmployee = (id) => {
    const token = localStorage.getItem('token');
    if (!token) return;
    request
      .get(`/api/organization/employee/${id}`)
      .set('x-access-token', token)
      .end((err, res) => {
        const {employee} = res.body;
        this.setState({
          showModal: true,
          mode: MODES.EDIT,
          orgEmployeeId: employee._id,
          name_email: `${employee._employee.firstname} ${employee._employee.lastname} - ${employee._employee.email}`,
          e_position: employee.position,
          e_description: employee.description,
        })
      })
  }
  deleteEmployee = (id) => {
    const token = localStorage.getItem('token');
    if (!token) return;
    request
      .delete(`/api/organization/employee/${id}`)
      .set('x-access-token', token)
      .end((err, res) => {
        if (!err) {
          swal({
            title: 'Xóa thành công',
            text: '',
            type: 'success',
            timer: 1500,
            onOpen: () => {
              swal.showLoading()
            }
          }).then((result) => {
            if (result.dismiss === 'timer') {
              window.location.reload();
            }
          })
        }
        else {
          console.log(err);
          swal({
            title: 'Xóa thất bại',
            text: '',
            type: 'error',
            timer: 1500,
            onOpen: () => {
              swal.showLoading()
            }
          }).then((result) => {
            if (result.dismiss === 'timer') {
              return;
            }
          })
        }
      })
  }
  render() {
    const { choosenUser, e_name, e_position, e_description, showModal, mode, name_email } = this.state;
    if (!this.props.employees || _.isEmpty(this.props.employees)) {
      return (
        <div>
          <div className="row">
            <button
              className="float-right btn btn-primary"
              style={{ marginBottom: 5 }}
              onClick={(e) => this.open(e)}
            >
              Thêm nhân sự
          </button>
          </div>
          <OrgModal
            body={{
              choosenUser, e_name, e_position, e_description,
              title: "Thêm nhân sự",
              handleSubmit: this.handleAddNewEmployee,
              getUsers: this.getUsers
            }}
            showModal={showModal}
            close={this.close}
            modalTypes={MODAL_TYPES.EMPLOYEE}
            handleChange={this.handleChange}
          />
        </div>
      )
    }
    const employees = this.props.employees.map((elem) => {
      return {
        fullname: `${elem._employee.lastname} ${elem._employee.firstname}`,
        position: elem.position,
        description: elem.description,
        createdAt: moment(elem.createdAt).format('DD/MM/YYYY'),
        updatedAt: moment(elem.updatedAt).format('DD/MM/YYYY'),
        id: elem._employee._id,
        orgEmployeeId: elem._id
      }
    })
    const columns = [{
      Header: 'Họ và tên',
      accessor: 'fullname',
      Cell: props => <Link to={`/cvs/${props.original.id}`}>{props.original.fullname}</Link>,
      style: { textAlign: "center" },
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["fullname"] }),
      filterAll: true
    }, {
      Header: 'Vị trí',
      accessor: 'position',
      style: { textAlign: "center" },
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["position"] }),
      filterAll: true
    }, {
      Header: 'Mô tả',
      accessor: 'description',
      style: { textAlign: "center", maxWidth: 150 },
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["description"] }),
      filterAll: true
    }, {
      Header: 'Ngày thêm vào',
      accessor: 'createdAt',
      style: { textAlign: "center" },
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["createdAt"] }),
      filterAll: true
    }, {
      Header: 'Ngày cập nhật gần nhất',
      accessor: 'updatedAt',
      style: { textAlign: "center" },
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["updatedAt"] }),
      filterAll: true
    }, {
      Header: '',
      accessor: 'orgEmployeeId',
      style: { textAlign: "center" },
      maxWidth: 150,
      minWidth: 140,
      Cell: props =>
        <div>
          <button
            onClick={(e) => this.getEmployee(props.value)}
            className="btn btn-primary"
            data-toggle="tooltip" data-placement="bottom" title="Chỉnh sửa">
            <i className="fa fa-pencil-square-o"></i>
          </button>
          <button
            onClick={() => this.deleteEmployee(props.value)}
            className="btn btn-danger"
            data-toggle="tooltip" data-placement="bottom" title="Xóa">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>,
    }];
    return (
      <section className="list-candidate">
        <h2>Danh sách nhân sự</h2>
        <div className="row">
          <button
            className="float-right btn btn-primary"
            style={{ marginBottom: 5 }}
            onClick={(e) => this.open(e)}
          >
            Thêm nhân sự
          </button>
        </div>
        <div className="row">
          <DataTable data={employees} columns={columns} />
        </div>
        <OrgModal
          body={{
            choosenUser, e_name, e_position, e_description, mode, name_email,
            title: (mode === MODES.ADD)? "Thêm nhân sự": "Cập nhật nhân sự",
            handleSubmit: (mode === MODES.ADD)? this.handleAddNewEmployee: this.handleUpdateEmployee,
            getUsers: this.getUsers
          }}
          showModal={showModal}
          close={this.close}
          modalTypes={MODAL_TYPES.EMPLOYEE}
          handleChange={this.handleChange}
        />
      </section>
    )
  }
}
class OrganizationDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: {}
    }
  }
  getOrganization = (id) => {
    request
      .get(`/api/organization/${id}`)
      .end((err, res) => {
        if (err) console.log(err);
        else {
          this.setState({ organization: res.body.organization });
        }
      })
  }
  componentWillMount() {
    this.getOrganization(this.props.params.id)
  }

  render() {
    const { organization } = this.state;
    return (
      <div>
        <OrganizationHeader organization={organization} />
        <Employees organization={organization} employees={organization._employees} />
      </div>
    )
  }
}

export default OrganizationDetail


// selectBody = () => {
//   const { modalTypes, isEmployee, choosenUser, e_name, e_position, e_description } = this.state;
//   var body = {};
//   switch (modalTypes) {
//     case MODAL_TYPES.EMPLOYEE:
//       body = {
//         isEmployee, choosenUser, e_name, e_position, e_description,
//         title: "Thêm nhân sự",
//         handleSubmit: this.handleAddNewEmployee,
//         getUsers: this.getUsers
//       }
//       break;
//     case MODAL_TYPES.EVENT:
//       body = {
//         title: "Thêm sự kiện",
//         handleSubmit: this.handleAddNewEvent
//       }
//       break;
//     case MODAL_TYPES.PRODUCT:
//       body = {
//         title: "Thêm sản phẩm",
//         handleSubmit: this.handleAddNewProduct
//       }
//       break;
//     default:
//       break;
//   }
//   return body;
// }