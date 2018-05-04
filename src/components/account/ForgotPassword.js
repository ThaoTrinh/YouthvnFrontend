import React from 'react';
import {Link, browserHistory} from 'react-router';
import {SUCCESS_CODE, FAIL_CODE} from '../../commons/constants';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_err: "unknown",
      email: ""
    }
  }
  handleChanged(e) {
    const value = e.target.value;
    const email = /^([a-zA-Z0-9_\.\-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]{2,})+)$/;
    (!email.test(value))? this.setState({email_err: FAIL_CODE, email: value})
                          : this.setState({email_err: SUCCESS_CODE, email: value});
  }
  handleSubmited(e) {
    const {email} = this.state;
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="ui card width-100">
              <div className="content">
                <div className="header text-center stage-header">Quên mật khẩu?</div>
                <div className="ui message">
                  <p>Nhập địa chỉ email của bạn bên dưới và chúng tôi sẽ gửi cho bạn các hướng dẫn để đặt lại mật khẩu.</p>
                </div>
                <div className="description">
                  <form className="ui form" onSubmit={(e) => this.handleSubmited(e)}>
                    <h3>Email</h3>
                    <div className="inline fields">
                      <div className="ten wide field">
                        <div className="ui large labeled input">
                          <input type="text" onChange={(e) => this.handleChanged(e)}/>
                        </div>
                      </div>
                      <div className="field">
                        <button className="ui orange button">Gửi</button>
                      </div>
                    </div>
                    {(this.state.email_err === FAIL_CODE)? ( <div className="ui negative message"><p>Email không đúng định dạng</p></div>)
                      : <div></div>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgotPassword
