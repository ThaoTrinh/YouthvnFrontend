import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';
const $ = window.jQuery;
import {SUCCESS_CODE, FAIL_CODE} from '../../commons/constants';
import swal from 'sweetalert2';
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // role_err: "unknown",
      lastname_err: "unknown",
      firstname_err: "unknown",
      email_err: "unknown",
      pass_err: "unknown",
      passConfirmed_err: "unknown",

      lastname: "",
      firstname: "",
      email: "",
      password: "",
      // role: "",

      accepted: false,
      // selectOption: "",

      completed: "unknown",
    }
  }

  componentDidMount() {
    $('.ui.normal.dropdown').dropdown();
  }

  handleChanged(e, name) {
    const value = e.target.value;
    switch (name) {
      case "lastname":
        const lastname = /.+/;
        (!lastname.test(value)) ? this.setState({ lastname_err: FAIL_CODE, lastname: value })
          : this.setState({ lastname_err: SUCCESS_CODE, lastname: value });
        break;

      case "firstname":
        const firstname = /.+/;
        (!firstname.test(value)) ? this.setState({ firstname_err: FAIL_CODE, firstname: value })
          : this.setState({ firstname_err: SUCCESS_CODE, firstname: value });
        break;

      case "email":
        const email = /^([a-zA-Z0-9_\.-]+)@([a-z-]+)(\.([a-z]{2,6}))+$/;
        (!email.test(value)) ? this.setState({ email_err: FAIL_CODE, email: value })
          : this.setState({ email_err: SUCCESS_CODE, email: value });
        break;

      case "password":
        const pass = /(.){6,}/;
        const pass_confirmed = this.refs.pass_confirmed.value;
        (!pass.test(value)) ? this.setState({ pass_err: FAIL_CODE, password: value })
          : this.setState({ pass_err: SUCCESS_CODE, password: value });

        (value !== pass_confirmed || pass_confirmed === "") ? this.setState({ passConfirmed_err: FAIL_CODE })
          : this.setState({ passConfirmed_err: SUCCESS_CODE });
        break;

      case "passConfirmed":
        const password = this.refs.password.value;
        (value !== password) ? this.setState({ passConfirmed_err: FAIL_CODE })
          : this.setState({ passConfirmed_err: SUCCESS_CODE });
        break;

      default:
        break;
    }
  }

  // checkRole(role) {
  //   if (role === "person") {
  //     this.setState({ role: 1, role_err: SUCCESS_CODE });
  //   }
  //   else if (role === "company") {
  //     this.setState({ role: 2, role_err: SUCCESS_CODE });
  //   }
  //   else {
  //     this.setState({ role_err: FAIL_CODE });
  //   }
  // }

  // handleRoleChanged(e) {
  //   const value = e.target.value;
  //   this.setState({ selectOption: value }, () => this.checkRole(value));
  // }

  handleChecked(e) {
    const { accepted } = this.state;
    this.setState({ accepted: !accepted });
  }

  newCVCode() {
    var d = new Date();
    var year = d.getFullYear().toString().substr(2, 2);
    var month = d.getMonth() + 1;
    var day = d.getDate();
    if (day < 10) {
      day = "0" + day.toString();
    }
    if (month < 10) {
      month = "0" + month.toString();
    }
    var str = year + month + day + "01";
    return str;
  }

  handleSubmited(e) {
    e.preventDefault();
    const { lastname_err, firstname_err, email_err, pass_err, passConfirmed_err, accepted } = this.state;
    if (lastname_err !== SUCCESS_CODE || firstname_err !== SUCCESS_CODE || email_err !== SUCCESS_CODE
      || pass_err !== SUCCESS_CODE || passConfirmed_err !== SUCCESS_CODE || accepted === false) {
      this.setState({ completed: FAIL_CODE });
      return false;
    }
    this.setState({ completed: SUCCESS_CODE });
    const { lastname, firstname, email, password } = this.state;
    const cvCode = this.newCVCode();
    const data = {
      lastname,
      firstname,
      email,
      password,
      // role,
      versions: [{ cvCode }],
    };
    console.log(data);

    request
      .post("/api/user/register")
      .send(data)
      .end((err, res) => {
        if (res.body.success) {
          swal({
            title: 'Đăng ký thành công',
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
          this.setState({ email_err: "existed" });
        }
      });
  }

  render() {
    return (
      <div className="ui bottom attached active tab segment">
        <form className="ui form" onSubmit={(e) => this.handleSubmited(e)}>
          <div className="two fields">
            <div className="field">
              <label>Họ</label>
              <input type="text"
                name="last-name"
                placeholder="Nhập họ của bạn"
                onChange={(e) => this.handleChanged(e, "lastname")} />
              {(this.state.lastname_err === FAIL_CODE) ?
                (<div className="ui pointing red basic label">Không được bỏ trống họ</div>) : null}
            </div>

            <div className="field">
              <label>Tên</label>
              <input type="text"
                name="first-name"
                placeholder="Nhập tên của bạn"
                onChange={(e) => this.handleChanged(e, "firstname")} />
              {(this.state.firstname_err === FAIL_CODE) ?
                (<div className="ui pointing red basic label">Không được bỏ trống tên</div>) : null}
            </div>
          </div>

          <div className="field">
            <label>Email</label>
            <input type="text"
              name="email"
              placeholder="Nhập email"
              onChange={(e) => this.handleChanged(e, "email")} />
            {(this.state.email_err === FAIL_CODE) ? (<div className="ui pointing red basic label">Email không đúng định dạng</div>)
              : (this.state.email_err === "existed") ? (<div className="ui pointing red basic label">Email này đã có người sử dụng</div>)
                : null}
          </div>

          <div className="field">
            <label>Mật khẩu</label>
            <input type="password"
              ref="password"
              name="password"
              placeholder="Nhập mật khẩu"
              onChange={(e) => this.handleChanged(e, "password")} />
            {(this.state.pass_err === FAIL_CODE) ?
              (<div className="ui pointing red basic label">Mật khẩu phải có ít nhất 6 kí tự</div>) : null}
          </div>

          <div className="field">
            <label>Nhập lại mật khẩu</label>
            <input type="password"
              ref="pass_confirmed"
              name="password-confirmed"
              placeholder="Nhập lại mật khẩu"
              onChange={(e) => this.handleChanged(e, "passConfirmed")} />
            {(this.state.passConfirmed_err === FAIL_CODE) ?
              (<div className="ui pointing red basic label">Mật khẩu không trùng khớp</div>) : null}
          </div>

          {/* <div className="inline fields">
            <div className="field">
              <label>Bạn chọn: </label>
            </div>
            <div className="field">
              <input type="radio" value="person" checked={this.state.selectOption === 'person'}
                onChange={(e) => this.handleRoleChanged(e)} /> <span>Cá nhân</span>
            </div>
            <div className="field">
              <input type="radio" value="company" checked={this.state.selectOption === 'company'}
                onChange={(e) => this.handleRoleChanged(e)} /> <span>Doanh nghiệp</span>
            </div>
          </div>

          <div className="inline fields">
            <div className="field"></div>
            <div className="field">
              {(this.state.role_err === FAIL_CODE) ?
                (<div className="ui pointing red basic label">Bạn cần chọn 1 trong 2 để tiếp tục đăng ký</div>) : null}
            </div>
          </div> */}

          <div className="field login-checkbox">
            <input type="checkbox" checked={this.state.accepted} onChange={(e) => this.handleChecked(e)} />
            <span>Tôi đã đọc và đồng ý các <Link to="/">Điều khoản sử dụng</Link> và <Link to="/">Chính sách bảo mật</Link></span>
          </div>

          <div className="inline field padding-top-25">
            <button className="ui button orange" type="submit">Xác nhận</button>
            {(this.state.completed === FAIL_CODE) ?
              (<div className="ui left pointing red basic label">Có lỗi xảy ra. Vui lòng điền thông tin hợp lệ</div>)
              : null}
          </div>
        </form>
      </div>
    )
  }
}
