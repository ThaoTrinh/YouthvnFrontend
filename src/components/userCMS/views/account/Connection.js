import React from 'react';
import {Link} from 'react-router';
import {SUCCESS_CODE, FAIL_CODE} from '../../../../commons/constants';

const $ = window.jQuery;

class Connection extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="ui fluid card padding-25">
          <form className="ui form">
            <div className="content">
              <div className="row">
                <div className="col-md-8 col-sm-10 col-xs-12">
                  <h1>Kết nối cộng đồng</h1>
                  <div className="field">

                  </div>

                  <div className="padding-top-25">
                    <button id="login-facebook" className="ui facebook button">
                      <i className="facebook icon"></i>
                      Kết nối Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* <div className="ui fluid card padding-25">
          <form className="ui form">
            <div className="content">
              <div className="row">
                <div className="col-md-9 col-sm-12 col-xs-12">
                  <h1>Những đường link khác</h1>
                  <div className="field">
                    <label>Website</label>
                    <input type="text"
                           name="website"
                           placeholder="http://www.website.com"
                           onChange={(e) => this.handleChanged(e, "phone")} />
                  </div>

                  <div className="field">
                    <label>Twitter</label>
                    <input type="text"
                           name="twitter"
                           placeholder="http://www.twitter.com/my-page"
                           onChange={(e) => this.handleChanged(e, "phone")} />
                  </div>

                  <div className="field">
                    <label>Facebook</label>
                    <input type="text"
                           name="facebook"
                           placeholder="http://www.facebook.com/my-fanpage"
                           onChange={(e) => this.handleChanged(e, "phone")} />
                  </div>

                  <button className="ui blue button" type="submit">Cập nhật</button>
                </div>
              </div>
            </div>
          </form>
        </div> */}
      </div>
    )
  }
}

export default Connection
