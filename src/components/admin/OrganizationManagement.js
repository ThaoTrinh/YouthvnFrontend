import React from 'react';
import {Link, browserHistory} from 'react-router';
const jwtDecode = require('jwt-decode');
const $ = window.jQuery;
export default class OrganizationManagement extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="organization-management">
        <section className="content-header">
          <h1>
            Quản lý tổ chức
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Quản lý thành viên</a></li>
            <li className="active">Quản lý tổ chức</li>
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
                      <th>Tên tổ chức</th>
                      <th>Người đại diện</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>Bach Khoa University</td>
                      <td>Trinh Dinh Cao Son</td>
                      <td>sontrinh179@gmail.com</td>
                      <td>0937170994</td>
                      <td>
                        <Link to="/admin/user/detail"><div><button type="button" className="btn btn-success">Chỉnh sửa</button> </div></Link>
                        <div><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#lockUserModal">Khoá</button></div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Trung Tâm Anh Ngữ
                      </td>
                      <td>Trinh Dinh Cao Son</td>
                      <td>sontrinh179@gmail.com</td>
                      <td>0937170994</td>
                      <td>
                        <Link to="/admin/user/detail"><div><button type="button" className="btn btn-success">Chỉnh sửa</button> </div></Link>
                        <div><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#lockUserModal">Khoá</button></div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
