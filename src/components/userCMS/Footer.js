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
            <hr />
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
            <hr />
            <p><i className="info large circle icon"></i><Link to="/">Điều khoản sử dụng</Link></p>
            <p><i className="privacy large icon"></i><Link to="/">Chính sách bảo mật</Link></p>
            <p><i className="warning large sign icon"></i><Link to="/">Báo lỗi</Link></p>
          </div>

          <div className="column">
            <iframe></iframe>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Footer
