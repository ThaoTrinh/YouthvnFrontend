import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
      <div className="container footer-position">
        <div className="ui stackable three column grid">
          <div className="column">
            <h3>BKStartup</h3>
            
            <p>Copyright
              <i className="copyright icon"></i>
              2017. All right reserved.
            </p>
            <p><i className="mail icon"></i> Email: abc@gmail.com</p>
            <p><i className="home icon"></i> Địa chỉ: TpHCM</p>
            <p><i className="mobile icon"></i> Số điện thoại: 01221234567</p>
          </div>

          <div className="column">
            <h3>Hỗ trợ</h3>
            
            <p><i className="info large circle icon"></i><Link to="/">Điều khoản sử dụng</Link></p>
            <p><i className="privacy large icon"></i><Link to="/">Chính sách bảo mật</Link></p>
            <p><i className="warning large sign icon"></i><Link to="/feedback">Feedback</Link></p>
          </div>

          <div className="column">
            <h3>Liên lạc</h3>
            <button className="ui circular facebook icon button">
                <i className="facebook icon"></i>
              </button>
              <button className="ui circular twitter icon button">
                <i className="twitter icon"></i>
              </button>
              <button className="ui circular linkedin icon button">
                <i className="linkedin icon"></i>
              </button>
              <button className="ui circular google plus icon button">
                <i className="google plus icon"></i>
              </button>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Footer
