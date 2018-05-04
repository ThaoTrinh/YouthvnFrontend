import React from 'react';
import {Link, browserHistory} from 'react-router';
import Signup from './Signup';
import Login from './Login';
class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'login'
    }
  }
  redirectAfterLogin() {
    if (localStorage.getItem('token')) {
      browserHistory.push('/');
    }
  }
  componentDidMount() {
    this.redirectAfterLogin();
  }
  handleTabChange(e, tab) {
    this.setState({selected: tab})
  }
  render() {
    const active = "item active";
    const unactive = "item";
    return (
      <div className="container">
        <div className="push"></div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="ui tabular menu">
              <Link className={(this.state.selected === 'login')? active: unactive}
                onClick={((e) => this.handleTabChange(e, "login"))}>

                Đăng nhập
              </Link>
              <Link className={(this.state.selected === 'signup')? active: unactive}
                onClick={(e) => this.handleTabChange(e, "signup")}>

                Đăng ký
              </Link>
            </div>
            {(this.state.selected === 'login')? <Login /> : <Signup />}
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    )
  }
}
export default Account
