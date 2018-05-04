import React from 'react';
import {browserHistory} from 'react-router';
import Dropzone from 'react-dropzone';
import {SUCCESS_CODE, FAIL_CODE} from '../../../../commons/constants';
import no_image from '../../../../assets/img/no-image-icon-13.png';

var request = require('superagent');
const $ = window.jQuery;

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname_err: SUCCESS_CODE,
      firstname_err: SUCCESS_CODE,
      address_err: "unknown",
      phone_err: "unknown",

      completed: "unknown",

      image: [],
      user: this.props.user
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    $('.ui.normal.dropdown').dropdown({
      maxSelections: 5,
    });

    const {interest, phone, address} = this.props.user;
    $('.profile-interest').dropdown('set selected', interest);

    if (phone !== undefined) {
      this.setState({phone_err: SUCCESS_CODE});
    }
    if (address !== undefined) {
      this.setState({address_err: SUCCESS_CODE});
    }
  }

  handleChanged(e, name) {
    const value = e.target.value;
    const {user} = this.state;
    switch (name) {
      case "lastname":
        const lastname = /.+/;
        user.lastname = value;
        (!lastname.test(value))? this.setState({lastname_err: FAIL_CODE, user: user})
                               : this.setState({lastname_err: SUCCESS_CODE, user: user});
        break;

      case "firstname":
        const firstname = /.+/;
        user.firstname = value;
        (!firstname.test(value))? this.setState({firstname_err: FAIL_CODE, user: user})
                                : this.setState({firstname_err: SUCCESS_CODE, user: user});
        break;

      case "address":
        const address = /.+/;
        user.address = value;
        (!address.test(value))? this.setState({address_err: FAIL_CODE, user: user})
                              : this.setState({address_err: SUCCESS_CODE, user: user});
        break;

      case "phone":
        const phone = /[0-9]+/;
        user.phone = value;
        (!phone.test(value))? this.setState({phone_err: FAIL_CODE, user: user})
                            : this.setState({phone_err: SUCCESS_CODE, user: user});
        break;

      default:
        break;
    }
  }

  onDrop(acceptedFiles, rejectedFiles) {
    this.setState({image: acceptedFiles});
  }

  // handleInterestChanged(e) {
  //   const {user} = this.state;
  //   const value = $('.profile-interest').dropdown('get value');
  //   if (value === null) {
  //     user.interest = [];
  //   }
  //   else {
  //     user.interest = value;
  //   }
  //   this.setState({user: user});
  // }

  handleSubmited(e) {
    e.preventDefault();
    const {lastname_err, firstname_err, address_err, phone_err} = this.state;
    if (lastname_err !== SUCCESS_CODE || firstname_err !== SUCCESS_CODE || address_err !== SUCCESS_CODE
       || phone_err !== SUCCESS_CODE) {
      this.setState({completed: FAIL_CODE});
      return false;
    }

    this.setState({completed: SUCCESS_CODE});

    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const {lastname, firstname, phone, address} = this.state.user;
      const {image} = this.state;

      request
      .post('/api/user/update-user-info')
      .set('x-access-token', token)
      .field('lastname', lastname)
      .field('firstname', firstname)
      .field('phone', phone)
      .field('address', address)
      .attach('img', image[0])
      .end((err, response) => {
        if (response.statusText === "OK") {
            if (response.text === "Update user info successfully") {
                alert("Cập nhật thông tin thành công.");
                location.reload();
            }
            else {
              alert("Không tìm thấy người dùng này.");
            }
          }
          else {
            alert("Có lỗi xảy ra. Vui lòng thử lại sau.")
          }
      })
    }
  }

  renderInfo(user) {
    return (
      <div className="ui fluid card padding-25">
        <div className="content">
          <div className="row">
            <div className="col-md-6 col-sm-9 col-xs-12">
              <h1>Thông tin chung</h1>
              <div className="field">
                <label>Họ *</label>
                <input type="text"
                       name="last-name"
                       value={user.lastname}
                       onChange={(e) => this.handleChanged(e, "lastname")}/>
                {(this.state.lastname_err === FAIL_CODE)?
                  (<div className="ui pointing red basic label">Không được bỏ trống họ</div>) : null}
              </div>

              <div className="field">
                <label>Tên *</label>
                <input type="text"
                       name="first-name"
                       value={user.firstname}
                       onChange={(e) => this.handleChanged(e, "firstname")} />
                {(this.state.firstname_err === FAIL_CODE)?
                  (<div className="ui pointing red basic label">Không được bỏ trống tên</div>) : null}
              </div>

              <div className="field">
                <label>Địa chỉ *</label>
                <input type="text"
                       name="address"
                       value={user.address}
                       onChange={(e) => this.handleChanged(e, "address")} />
                {(this.state.address_err === FAIL_CODE)?
                  (<div className="ui pointing red basic label">Không được bỏ trống địa chỉ</div>) : null}
              </div>

              <div className="field">
                <label>Số điện thoại *</label>
                <input type="text"
                       name="phone"
                       value={user.phone}
                       onChange={(e) => this.handleChanged(e, "phone")} />
                     {(this.state.phone_err === FAIL_CODE)?
                       (<div className="ui pointing red basic label">Chỉ được nhập số và không được bỏ trống</div>) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {user, image} = this.state;
    const user_image = "<img src=" + '/' + this.props.user.image_name + " alt=\"test image\" width=\"100%\" height=\"250px\"/>";
    return (
      <div>
        <form className="ui form" onSubmit={(e) => this.handleSubmited(e)}>
          {this.renderInfo(user)}

          <div className="ui fluid card padding-25">
            <div className="content">
              <div className="row">
                <div className="col-md-8 col-sm-12 col-xs-12">
                  <h1>Về bạn</h1>
                  <div className="field">
                    <label>Vài dòng giới thiệu bản thân *</label>
                    <textarea rows="8"
                              name="description"
                              value={user.description}
                              onChange={(e) => this.handleChanged(e, "description")}>
                    </textarea>
                    <div className="ui sub header">300 / 300</div>
                    {(this.state.desc_err === FAIL_CODE)?
                      (<div className="ui pointing red basic label">Giới thiệu phải có ít nhất 6 ký tự</div>) : null}
                  </div>

                  <div className="field">
                    <label>Vấn đề bạn quan tâm</label>
                    <select multiple="a" className="ui normal dropdown profile-interest"
                            value={user.interest}
                            onChange={(e) => this.handleInterestChanged(e)}>
                      <option value="">Chọn lĩnh vực</option>
                      <option value="GD">Giáo dục</option>
                      <option value="KD">Kinh Doanh</option>
                      <option value="CN">Công nghệ</option>
                      <option value="NT">Nghệ thuật</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ui fluid card padding-25">
            <div className="content">
              <div className="row">
                <div className="col-md-8 col-sm-10 col-xs-12">
                  <h1>Hình ảnh của bạn</h1>
                  <div className="inline fields">
                    <div className="twelve wide field">
                      <Dropzone className="dropzone"
                                onDrop={this.onDrop.bind(this)}
                                multiple={false}
                                accept="image/*"
                                >
                        {(image.length > 0) ?
                        <div>
                          <div>
                          {
                            image.map((image) => {
                              return(
                                <div key={image.lastModified}>
                                    <img src={image.preview} key={image.lastModified} alt="embedded" width="100%" height="250px"/>
                                </div>
                                )
                            })
                          }
                          </div>
                        </div>
                        :(this.props.user !== undefined)?
                            <div dangerouslySetInnerHTML={{__html: user_image}} ></div>
                        : (<div><img src={no_image} width="20%" height="50%" className="dropzone-icon"/>
                        <br />
                        Chọn hoặc thả ảnh bìa/video dự án của bạn vào đây <br/>
                        Hỗ trợ định dạng ảnh .png, .jpg, .jpeg
                        </div>)
                      }
                      </Dropzone>

                    {
                      // <Dropzone onDrop={this.onDrop.bind(this)}
                      //                             multiple={false}
                      //                             accept="image/*"
                      //                             >
                      //                     <div className="dropzone-segment">
                      //                       <br />
                      //                       <i className="camera retro icon"></i> <br/><br/>
                      //                       Chọn hoặc thả ảnh bìa dự án của bạn vào đây <br/><br/>
                      //                       Hỗ trợ định dạng ảnh .png, .jpg, .jpeg
                      //                     </div>
                      //                   </Dropzone>
                      //                   {(image.length > 0)? <div>
                      //                      <div>{image.map((item) =>
                      //                          <div className="img-preview" key={item.lastModified}>
                      //                            <img src={item.preview} key={item.lastModified} alt="embedded"/>
                      //                          </div> )}
                      //                        </div>
                      //                      </div>
                      //                      : (this.props.user !== undefined)?
                      //                          <div dangerouslySetInnerHTML={{__html: user_image}} className="img-preview"></div>
                      //                      : null}
                    }

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="large ui blue button" type="submit">Lưu</button>
          </div>
        </form>
      </div>
    )
  }
}

export default UpdateUser
