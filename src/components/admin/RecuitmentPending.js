import React from 'react';
import swal from 'sweetalert';
import {Link, browserHistory} from 'react-router';
import logo1 from '../../assets/img/logo_1.jpeg';
import logo2 from '../../assets/img/logo_2.jpg';
const jwtDecode = require('jwt-decode');
const $ = window.jQuery;
export default class RecuitmentPending extends React.Component {
  constructor(props) {
    super(props);

  }
  formatNumber(number) {
    var comma = '.',
        string = Math.max(0, number).toFixed(0),
        length = string.length,
        end = /^\d{4,}$/.test(string) ? length % 3 : 0;
    return (end ? string.slice(0, end) + comma : '') + string.slice(end).replace(/(\d{3})(?=\d)/g, '$1' + comma);
  }
  activeProject(id) {
    swal({
      title: "Bạn có chắc muốn duyệt tin tuyển dụng này?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-primary",
      confirmButtonText: "Duyệt",
      cancelButtonText: "Huỷ",
      closeOnConfirm: false,
      closeOnCancel: true
    },
    function(isConfirm) {
      if (isConfirm) {

        $.ajax({
          method: "POST",
          url: "/api/recuitment/active-recuitment",
          data : { id : id }
        }).done((response) => {
            swal({
              title: "Duyệt thành công!",
              type: "success",
              showCancelButton: false,
              confirmButtonClass: "btn-success",
              confirmButtonText: "OK",
              closeOnConfirm: false,
            }, function (ok) {
              if (ok) {
                window.location.reload();
              }
            });
        })
      }
    });
  }
  render() {
    const {total_pending_recuitments, pending_recuitments} = this.props;
    return (
      <div className="user-management">
        <section className="content-header">
          <h1>
            Danh sách tin tuyển dụng đang chờ duyệt
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Quản lý tuyển dụng</a></li>
            <li className="active">Đang chờ duyệt</li>
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
                      <th>Tiêu đề</th>
                      <th>Người đăng</th>
                      <th>Ngày bắt đầu</th>
                      <th>Ngày kết thúc</th>
                      <th>Lĩnh vực</th>
                      <th>Lương tối đa</th>
                      <th>Nơi tuyển dụng</th>
                      <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        pending_recuitments.map(elem => {
                          // let id = elem.id.substring(0,5) + "...";
                          let id =elem.id;

                          let image = "/" + elem.image_name;
                          console.log("elem");
                          console.log(elem);
                          return (
                            <tr key={ id }>
                              <td>
                                { id }
                              </td>
                              <td>
                                { elem.title }
                              </td>
                              <td>
                                { elem._author.fullname }
                              </td>
                              <td>
                                { elem.date_start }
                              </td>
                              <td>
                                { elem.date_end }
                              </td>
                              <td>
                                { elem.field }
                              </td>
                            <td>
                              { this.formatNumber(elem.max_salary) }VNĐ
                            </td>
                            <td>
                              { elem.place }
                            </td>
                            <td>
                              <button className="ui green button" onClick={ () => this.activeProject(elem.id) }>Duyệt</button>
                            </td>
                            </tr>
                          )
                        }
                        )
                      }
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
