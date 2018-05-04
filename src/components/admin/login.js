import React from 'react';
import {Link, browserHistory} from 'react-router';
const jwtDecode = require('jwt-decode');
const $ = window.jQuery;
export default class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      keepLogined: false,
      completed: "unknown"
    }
    // this.handleEmailChanged = this.handleEmailChanged.bind(this);
    // this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
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

  }
  loginAdmin() {
    if (this.state.email == "admin" && this.state.password == "123456") {
      window.location.href="/admin/dashboard";
    }
    else alert('Sai username hoặc password');
  }
  render() {
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="#"><b>BK</b>Startup</a>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in</p>
          <form action="#" method="post">
            <div className="form-group has-feedback">
              <input type="email" className="form-control" onChange={ (e) => this.handleEmailChanged(e) } placeholder="Email"/>
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" onChange={ (e) => this.handlePasswordChanged(e) } placeholder="Password"/>
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                </div>
              </div>
              <div className="col-xs-4">
                <button type="submit" onClick={ () => this.loginAdmin() } className="btn btn-primary btn-block btn-flat">Sign In</button>
              </div>
            </div>
          </form>
          <a href="#">I forgot my password</a><br />
        </div>
      </div>
    </div>
    )
  }
}
