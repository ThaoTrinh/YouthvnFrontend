import React, { Component } from 'react';

class ChangePassword extends Component{


    render(){
        return(
            <div className="ChangePassword">
            <div className="padding-left">
              <div className="manage-jobs-sec">
                <h3>Change Password</h3>
                <div className="change-password">
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <span className="pf-title">Old Password</span>
                                <div className="pf-field">
                                    <input type="password" />
                                </div>
                                <span className="pf-title">New Password</span>
                                <div className="pf-field">
                                    <input type="password" />
                                </div>
                                <span className="pf-title">Confirm Password</span>
                                <div className="pf-field">
                                    <input type="password" />
                                </div>
                                <button type="submit">Update</button>
                            </div>
                            <div className="col-lg-6">
                                <i className="fa fa-key big-icon"></i>
                            </div>
                        </div>
                    </form>
                  </div>
            </div>
        </div>
            </div>
        )
    }
}
export default ChangePassword;