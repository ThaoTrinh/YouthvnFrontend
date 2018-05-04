import React from 'react';
import {Link} from 'react-router';
import {SUCCESS_CODE, FAIL_CODE} from '../../commons/constants';
import swal from 'sweetalert2';
const jwtDecode = require('jwt-decode');
const $ = window.jQuery;
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      keepLogined: false,
      completed: "unknown"
    }
  }

  handleEmailChanged(e) {
    const email = e.target.value;
    this.setState({email});
  }

  handlePasswordChanged(e) {
    const password = e.target.value;
    this.setState({password});
  }

  handleChecked(e) {
    const {keepLogined} = this.state;
    this.setState({keepLogined: !keepLogined});
  }

  handleSubmited(e) {
    e.preventDefault();
    const {email, password} = this.state;
    $.ajax({
      method: "POST",
      url: '/api/user/authenticate',
      data: {
        email,
        password
      }
    }).done(response => {
      if (response.success) {
        swal({
          title: 'Đăng nhập thành công',
          type: 'success',
          timer: 1500,
          showConfirmButton: false,
          allowOutsideClick: false
        }).then((result) => {
          if (result.dismiss === 'timer') {
            localStorage.setItem('token', response.token);
            this.setState({completed: SUCCESS_CODE});
            window.location.reload();
          }
        })
      }
      else {
        this.setState({completed: FAIL_CODE});
      }
    })
  }
  
  componentWillMount () {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className="ui bottom attached segment">
        <form className="ui form" onSubmit={(e) => this.handleSubmited(e)}>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Nhập email" onChange={(e) => this.handleEmailChanged(e)}/>
          </div>

          <div className="field">
            <label>Mật khẩu</label>
            <input type="password" name="password" placeholder="Nhập mật khẩu" onChange={(e) => this.handlePasswordChanged(e)}/>
          </div>

          <div className="two fields">
            <div className="field login-checkbox">
              <input type="checkbox" checked={this.state.keepLogined} onChange={(e) => this.handleChecked(e)}/>
              <span>Ghi nhớ đăng nhập</span> <br/>
            </div>
            <div className="field">
              <Link to="/forgot-password" className="pull-right hidden-xs">Quên mật khẩu?</Link>
              <Link to="/forgot-password" className="visible-xs">Quên mật khẩu?</Link>
            </div>
          </div>

          <button className="ui button orange" type="submit">Đăng nhập</button>
            {(this.state.completed === FAIL_CODE)?
              (<div className="ui left pointing red basic label">Email hoặc mật khẩu không hợp lệ. Vui lòng nhập lại.</div>)
              : <div></div>}
        </form>
      </div>
    )
  }
}
