import React from 'react';

const $ = window.jQuery;

class Signup extends React.Component {
   fadeOut = ()=>{
    $(".signup-popup-box").fadeOut();
   }
  
  render() {
        return (
      <div className ="Signup">
           <div className="account-popup-area signup-popup-box">
          <div className="account-popup">
            <span className="close-popup" onClick={()=>{this.fadeOut()}}><i className="fa fa-close" ></i></span>
            <h3>Sign Up</h3>
            <div className="select-user">
              <span>Candidate</span>
              <span>Employer</span>
            </div>
            <form>
              <div className="cfield">
                <input type="text" placeholder="Username" />
                <i className="la la-user"></i>
              </div>
              <div className="cfield">
                <input type="password" placeholder="********" />
                <i className="la la-key"></i>
              </div>
              <div className="cfield">
                <input type="text" placeholder="Email" />
                <i className="la la-envelope-o"></i>
              </div>
              <div className="cfield">
                <input type="text" placeholder="Phone Number" />
                <i className="la la-phone"></i>
              </div>
              <button type="submit">Signup</button>
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

export default Signup;
