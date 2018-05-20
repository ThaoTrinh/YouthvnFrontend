import React from 'react';

const $ = window.jQuery;

class Signin extends React.Component {
   fadeOut = ()=>{
    $(".signin-popup-box").fadeOut();
   }
  
  render() {
        return (
      <div className ="Signin">
            <div className="account-popup-area signin-popup-box">
                  <div className="account-popup">
                    <span className="close-popup" onClick={()=>{this.fadeOut()}}><i className="fa fa-close"></i></span>
                    <h3>User Login</h3>
                    <span>Click To Login With Demo User</span>
                    <div className="select-user">
                      <span>Candidate</span>
                      <span>Employer</span>
                    </div>
                    <form>
                      <div className="cfield">
                        <input type="text" placeholder="Username" />
                        <i className="fa fa-user"></i>
                      </div>
                      <div className="cfield">
                        <input type="password" placeholder="********" />
                        <i className="fa fa-key"></i>
                      </div>
                      <p className="remember-label">
                        <input type="checkbox" name="cb" id="cb1"/><label for="cb1">Remember me</label>
                      </p>
                      <a href="#" title="">Forgot Password?</a>
                      <button type="submit">Login</button>
                    </form>
                    <div className="extra-login">
                      <span>Or</span>
                      <div className="login-social">
                        <a className="fb-login" href="#" title=""><i className="fa fa-facebook"></i></a>
                        <a className="tw-login" href="#" title=""><i className="fa fa-twitter"></i></a>
                      </div>
                    </div>
                 </div>
              </div>
      
                
      </div>
      
    )
  }
}

export default Signin;
