import React from 'react';
import {browserHistory} from 'react-router';
import swal from 'sweetalert2';

const $ = window.jQuery;

class DeleteAccount extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  handleSubmited(e) {
    const option = confirm("Bạn có muốn xóa tài khoản này?");
    if (option) {
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        $.ajax({
          method: "POST",
          url: "/api/user/delete-user",
          headers: {
            'x-access-token': token
          },
          async: false,
        }).done(response => {
          if (response.success) {
            localStorage.removeItem('token');
            swal({
              title: 'Xóa thành công',
              text: '',
              type: 'success',
              timer: 1500
            }).then((result) => {
              if (result.dismiss === 'timer') {
                  window.location.reload();
              }
            })
          }
          else {
            swal({
              title: 'Có lỗi xảy ra. Vui lòng thử lại sau.',
              text: '',
              type: 'error',
              timer: 1500
            }).then((result) => {
              if (result.dismiss === 'timer') {
                  return;
              }
            })
          }
        })
      }
      else {
        swal({
          title: 'Bạn chưa đăng nhập',
          text: '',
          type: 'info',
          timer: 1500
        }).then((result) => {
          if (result.dismiss === 'timer') {
              return;
          }
        })
      }
    }
  }

  render() {
    return (
      <div className="ui fluid card padding-25">
        <form className="ui form" onSubmit={(e) => this.handleSubmited(e)}>
          <div className="content">
            <div className="row">
              <div className="col-md-8 col-sm-10 col-xs-12">
                <h1>Xóa tài khoản</h1>
                <div className="field">
                  <p>Đây là thao tác <strong>một chiều và ngay lập tức</strong>. Bạn sẽ xóa hết tất cả thông tin của mình!</p>
                </div>

                <button className="large ui blue button" type="submit">Xóa</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default DeleteAccount
