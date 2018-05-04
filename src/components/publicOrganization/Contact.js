import React from 'react';
import { read } from 'fs';
const $ = window.jQuery;

class Contact extends React.Component {
  constructor(){
    super()
    this.state = {
      address:"",
      phone:"",
      email:""
    }
  }
  componentWillMount(){  
      const address = this.getAddress(this.props.address);
      this.setState({
        address: address,
        phone : this.props.phone,
        email : this.props.email
      });

  }
  getAddress(location) {
    return(
      location.streetNumber + " " + location.ward + " " + location.district + " " + location.province
    );
  }
  render() {
    if(this.state.email == "") return null;
    return (
      <div id="contact">
        <div className="row">
          <div className="col-sm-6 col-xs-12 contact-social">
            <h3>ĐỂ LẠI LỜI NHẮN CHO CHÚNG TÔI</h3>
            <div className="org-comment">
              <div>
                <input type="text" name="" placeholder="Họ và tên"/>
              </div>
              <div>
                <input type="text" name="" placeholder="Email"/>
              </div>
              <div>
                <input type="text" name="" placeholder="Tiêu đề"/>
              </div>
              <textarea placeholder="Ghi chú"></textarea>
              <div><input className="comment-file" type="file" id="exampleInputFile"/></div>
              <div className=""><button type="button" className="btn btn-success">Gửi</button></div>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12 contact-direct">
            <div className="contact-title"> KẾT NỐI VỚI CHÚNG TÔI</div>
            <div className="contact-icon">
              <a href="" className="fa fa-facebook"></a>
              <a href="" className="fa fa-twitter"></a>
              <a href="" className="fa fa-youtube-play"></a>
              <a href="" className="fa fa-linkedin"></a>
              <a href="" className="fa fa-google-plus"></a>
              <a href="" className="fa fa-skype"></a>
            </div>
            <div className="contact-title">LIÊN HỆ</div>
            <div className="contact-info">
              <div className="address"> <span className="fa fa-home"></span> {this.state.address}</div>
              <div className="phone-number"><span className="fa fa-phone"></span> {this.state.phone} </div>
              <div className="mail"><span className="fa fa-envelope"></span> {this.state.email}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact