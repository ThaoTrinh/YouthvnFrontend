import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import UserAvatar from 'react-user-avatar';
import request from 'superagent';
import async from 'async';
import swal from 'sweetalert2';
const $ = window.jQuery;

export const MODAL_TYPES = {
  EMPLOYEE: 'nhân sự',
  EVENT: 'sự kiện',
  PRODUCT: 'sản phẩm'
}
export const MODES = {
  ADD: 'add',
  EDIT: 'edit'
}
export const EmployeeBody = ({ body, handleChange }) => {
  return (
    <div className="row">
      <div className="form-group">
        {/* <label className="col-sm-2 control-label">
          <Toggle
            id="isEmployee"
            defaultChecked={body.isEmployee}
            
            onChange={(e) => handleChange(e, 'toggle')} />
        </label> */}
        {/* <label className="control-label col-sm-10 text-left">Thêm người dùng trong hệ thống</label> */}
      </div>
      {/* (body.isEmployee)
        ? ( */}
      <div className="col-sm-12">
        <div className="form-group">
          <div className="col-sm-2" style={{ marginBottom: 5 }}>
            <label htmlFor="listUser" className="control-label">Người dùng</label>
          </div>
          <div className="col-sm-10">
            {
              (body.mode === MODES.ADD)
                ? (
                  <Select.Async
                    id="listUser"
                    value={body.choosenUser}
                    placeholder="Tìm tên, email"
                    loadOptions={body.getUsers}
                    onChange={(e) => handleChange(e, 'e-search')}
                  />
                )
                : <input className="form-control" type="text" value={body.name_email} disabled/>  
            }
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="position" className="control-label col-sm-2">Vị trí</label>
          <div className="col-sm-10">
            <input
              type="text"
              id="position"
              value={body.e_position}
              placeholder="Nhập vị trí"
              className="form-control"
              onChange={(e) => handleChange(e, 'e-position')}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="control-label col-sm-2">Mô tả</label>
          <div className="col-sm-10">
            <textarea
              id="description"
              rows="5"
              value={body.e_description}
              placeholder="Nhập mô tả"
              className="form-control"
              onChange={(e) => handleChange(e, 'e-description')}>
            </textarea>
          </div>
        </div>
      </div>
      )
        {/* : (
          <div>
            <div className="form-group">
              <label htmlFor="name" className="control-label col-sm-2">Họ tên</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="name"
                  value={body.e_name}
                  placeholder="Nhập họ tên"
                  className="form-control"
                  onChange={(e) => handleChange(e, 'e-name')}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="position" className="control-label col-sm-2">Vị trí</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="position"
                  value={body.e_position}
                  placeholder="Nhập vị trí"
                  className="form-control"
                  onChange={(e) => handleChange(e, 'e-position')}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description" className="control-label col-sm-2">Mô tả</label>
              <div className="col-sm-10">
                <textarea
                  id="description"
                  rows="5"
                  value={body.e_description}
                  placeholder="Nhập mô tả"
                  className="form-control"
                  onChange={(e) => handleChange(e, 'e-description')}>
                </textarea>
              </div>
            </div>
          </div>
        ) */}

    </div>
  )
}
const EventBody = ({ }) => {
  return (
    <div>
      Event
    </div>
  )
}
const ProductBody = ({ }) => {
  return (
    <div>
      Product
    </div>
  )
}
export const OrgModal = ({ body, showModal, close, modalTypes, handleChange }) => {
  return (
    <div className="modal-container text-left usercms-modal">
      <Modal show={showModal}
        onHide={close}
        container={this}
        aria-labelledby="contained-modal-title">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">{body.title}</Modal.Title>
        </Modal.Header>
        <form className="form-horizontal usercms-detail" onSubmit={(e) => body.handleSubmit(e)}>
          <Modal.Body>
            {
              (modalTypes === MODAL_TYPES.EMPLOYEE)
                ? <EmployeeBody body={body} handleChange={handleChange} />
                : (modalTypes === MODAL_TYPES.EVENT)
                  ? <EventBody />
                  : <ProductBody />
            }
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="btn recruitment-apply-btn pull-left">Xác nhận</Button>
            <Button type="button" className="btn btn-default" id="closeBtn" onClick={(e) => close()}>Trở về</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  )
}
class MyOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldName: [],



      district: "",
      province: ""
    }
  }

  getDistrict = (district_id) => {
    if (district_id) {
      request
        .get(`/api/location/districts/district/${district_id}`)
        .end((err, res) => {
          try {
            const district = res.body.result;
            const result = district.type.toLowerCase() + " " + district.name;
            this.setState({ district: result });
          } catch (error) {
          }
        })
    }
  }

  getProvince = (province_id) => {
    if (province_id) {
      request
        .get(`/api/location/provinces/province/${province_id}`)
        .end((err, res) => {
          try {
            const province = res.body.result;
            const result = province.type.toLowerCase() + " " + province.name;
            this.setState({ province: result });
          } catch (error) {

          }

        })
    }
  }

  getField3 = (arr) => {
    async.each(arr, (item, callback) => {
      request
        .get("/api/field/field3/" + item)
        .end((error, res) => {
          const field = res.body.result;
          const { fieldName } = this.state;
          this.setState({ fieldName: [...fieldName, field.viName] });
          callback();
        })
    }, (err) => {
      console.log(err);

    })
  }

  dataList = (arr) => {
    const result = arr.map((item) => {
      return (
        <a className="ui green label" style={{ marginBottom: 2 }} key={item}>
          {item}
        </a>
      )
    });
    return result;
  }

  componentWillMount() {
    const { organization } = this.props;
    this.getField3(organization.fields);
    this.getDistrict(organization.location.district);
    this.getProvince(organization.location.province);
  }



  update(id) {
    const token = localStorage.getItem('token');
    if (!token) return;
    browserHistory.push(`/user/organization/update/${id}`)
  }
  render() {
    const { organization } = this.props;
    const { fieldName, district, province } = this.state;

    var arr = [], logo = '';
    try {
      arr = organization._logo.url.split('/');
      logo = '/' + [arr[arr.length - 2], arr[arr.length - 1]].join('/');
    } catch (error) { };
    return (
      <tr>
        <td><UserAvatar name="NO" size="48" src={logo} /></td>
        <td><Link to={`/user/organization/detail/${organization._id}`}>{organization.name}</Link></td>
        <td width="15%">{this.dataList(fieldName)}</td>
        <td>{organization.type}</td>
        <td width="20%">{`${organization.location.streetNumber} ${organization.location.ward} ${district} ${province}`}</td>

        <td className="dropdown">
          <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </button>
          <ul className="dropdown-menu">
            <li><Link onClick={(e) => this.update(organization._id)}>Cập nhật</Link></li>
            <li><Link>Xóa</Link></li>
          </ul>
        </td>
      </tr>
    )
  }
}

export default MyOrganization