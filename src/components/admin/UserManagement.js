import React from 'react';
import {Link, browserHistory} from 'react-router';
const jwtDecode = require('jwt-decode');
const $ = window.jQuery;
export default class UserManagement extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="user-management">
        <section className="content-header">
          <h1>
            Quản lý user
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Quản lý thành viên</a></li>
            <li className="active">Quản lý user</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title"></h3>
                </div>
                <div className="box-body">
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>Username</th>
                      <th>Fullname</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>sontrinh179</td>
                      <td>Trinh Dinh Cao Son</td>
                      <td>sontrinh179@gmail.com</td>
                      <td>0937170994</td>
                      <td>Đang hoạt động</td>
                      <td>
                        <Link to="/admin/user/detail"><div><button type="button" className="btn btn-success">Chỉnh sửa</button> </div></Link>
                        <div><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#lockUserModal">Khoá</button></div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>ac
                      </td>
                      <td>Nguyen Dang Quynh</td>
                      <td>dangquynhac@gmail.com</td>
                      <td>01223425244</td>
                      <td>Đã khoá</td>
                      <td>
                        <Link to="/admin/user/detail"><div><button type="button" className="btn btn-success">Chỉnh sửa</button> </div></Link>
                        <div><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#lockUserModal">Mở Khoá</button></div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="lockUserModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Khoá thành viên</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                   Tên user : <input disabled type="text" value="Trinh Dinh Cao Son" className="form-control"/>
                </div>
                <div className="form-group">
                  Lý do : <textarea className="form-control" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Khoá</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Đóng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
