import React from 'react';
import {Link} from 'react-router';
import {SUCCESS_CODE, FAIL_CODE} from '../../../../commons/constants';
import swal from 'sweetalert2';

const $ = window.jQuery;

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pass_err: "unknown",
      newPass_err: "unknown",
      passConfirmed_err: "unknown",
      completed: "unknown",

      password: "",
      newPassword: "",
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  handleChanged(e, name) {
    const value = e.target.value;
    switch (name) {
      case "password":
        const pass = /(.){6,}/;
        (!pass.test(value))? this.setState({pass_err: FAIL_CODE, password: value})
                           : this.setState({pass_err: SUCCESS_CODE, password: value});
        break;

      case "newPass":
        const newPass = /(.){6,}/;
        const newPass_confirmed = this.refs.newPass_confirmed.value;
        (!newPass.test(value))? this.setState({newPass_err: FAIL_CODE, newPassword: value})
                              : this.setState({newPass_err: SUCCESS_CODE, newPassword: value});
        (value !== newPass_confirmed || newPass_confirmed === "")? this.setState({passConfirmed_err: FAIL_CODE})
                                                                 : this.setState({passConfirmed_err: SUCCESS_CODE});
        break;

      case "passConfirmed":
        const password = this.refs.newPass.value;
        (value !== password)? this.setState({passConfirmed_err: FAIL_CODE})
                               : this.setState({passConfirmed_err: SUCCESS_CODE});
        break;

      default:
        break;
    }
  }

  handleSubmited(e) {
    e.preventDefault();
    const {pass_err, newPass_err, passConfirmed_err} = this.state;
    if (pass_err !== SUCCESS_CODE || newPass_err !== SUCCESS_CODE || passConfirmed_err !== SUCCESS_CODE) {
      this.setState({completed: FAIL_CODE});
      return false;
    }

    this.setState({completed: SUCCESS_CODE});
    const {password, newPassword} = this.state;
    const token = localStorage.getItem('token');

    $.ajax({
      method: "POST",
      url: "/api/user/change-pass",
      headers: {
        'x-access-token': token
      },
      data: {
        password,
        newPassword,
      }
    }).done(response => {
      if (response.success) {
        swal({
          title: 'Đổi mật khẩu thành công',
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

  render() {
    return (
      <div className="ui fluid card padding-25">
        <form className="ui form" onSubmit={(e) => this.handleSubmited(e)}>
          <div className="content">
            <div className="row">
              <div className="col-md-6 col-sm-9 col-xs-12">
                <h1>Cập nhật mật khẩu</h1>
                <div className="field">
                  <label>Mật khẩu cũ</label>
                  <input type="text"
                         name="password"
                         onChange={(e) => this.handleChanged(e, "password")}/>
                  {(this.state.pass_err === FAIL_CODE)?
                    (<div className="ui negative message"><p>Không được bỏ trống ô này</p></div>)
                    : <div></div>}
                </div>

                <div className="field">
                  <label>Mật khẩu mới</label>
                  <input type="text"
                         ref="newPass"
                         name="newPass"
                         onChange={(e) => this.handleChanged(e, "newPass")} />
                  {(this.state.newPass_err === FAIL_CODE)?
                    (<div className="ui negative message"><p>Không được bỏ trống ô này</p></div>)
                    : <div></div>}
                </div>

                <div className="field">
                  <label>Xác nhận mật khẩu</label>
                  <input type="text"
                         ref="newPass_confirmed"
                         name="newPass-confirmed"
                         onChange={(e) => this.handleChanged(e, "passConfirmed")} />
                  {(this.state.passConfirmed_err === FAIL_CODE)?
                    (<div className="ui negative message"><p>Không được bỏ trống ô này</p></div>)
                    : <div></div>}
                </div>

                <button className="ui blue button" type="submit">Cập nhật</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ResetPassword
