import React from 'react';
import {Link, browserHistory} from 'react-router';
import logo1 from '../../assets/img/logo_1.jpeg';
import logo2 from '../../assets/img/logo_2.jpg';
const jwtDecode = require('jwt-decode');
const $ = window.jQuery;
export default class AdminFeedback extends React.Component {
  constructor(props) {
    super(props);
    $('#feedbackTable').DataTable();
  }
  componentDidMount() {
    $(function () {
      $('#feedbackTable').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": true,
        "autoWidth": false
      });
    });
  }
  render() {
    return (
      <div className="feedback-management">
        <section className="content-header">
          <h1>
            Danh sách các Feedback đã nhận
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Feedback</li>
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
                  <table id="feedbackTable" className="table table-bordered table-striped">
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>Người gửi</th>
                      <th>Email</th>
                      <th>Số điện thoại</th>
                      <th>Nội dung</th>
                      <th>Trạng thái</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>Trinh Dinh Cao Son</td>
                      <td>sontrinh179@gmail.com</td>
                      <td>0937170994</td>
                      <td>Great!</td>
                      <td>Đang chờ trả lời</td>
                      <td>
                        <div><button type="button" className="btn btn-success" data-toggle="modal" data-target="#replyFeedbackModal">Trả lời</button></div>
                        <div><button type="button" className="btn btn-danger">Xoá</button></div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="replyFeedbackModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Trả lời</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                   Đến : <input disabled type="text" value="sontrinh179@gmail.com" className="form-control"/>
                </div>
                <div className="form-group">
                  Nội dung : <textarea className="form-control" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Gửi</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Đóng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
