import React from 'react';
import { Link, browserHistory } from 'react-router';
import moment from 'moment';
const $ = window.jQuery;

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: false,
      login: true,
      controllerBarDisplay:false
    }
  }
  toggleControllerBar =()=>{
    this.setState({controllerBarDisplay:!this.state.controllerBarDisplay});
  }
  renderNavbarRight=()=>{
      return(
     <ul className="nav navbar-nav navbar-right user" style= {{marginBottom: 10}}>
        <li><a href="#"><span className="fa fa-envelope" ></span> Message</a></li>
        <li><a href="#"><span className="fa fa-bell" ></span> Notification</a></li>
        <li><a onClick={()=>{this.toggleControllerBar()}}><span className="fa fa-caret-down"></span> User</a></li>
        <div className={this.state.controllerBarDisplay?"controllerBar":"controllerBar hidden"}>
            <div><Link>Call Employers<span className="fa fa-users" ></span></Link></div>
            <div><Link to ="/user">Controller Board<span className="fa fa-cog" ></span></Link></div>
            <div><Link onClick={()=>{this.setState({login:false})}}>Log Out<span className="fa fa-sign-out" ></span></Link></div>
        </div>         
     </ul>

      )
  }
  render() {
     moment.locale('vi');
   
    return (
      <nav className= "navbar navbar-inverse navbar-fixed-top" style ={{backgroundColor:"#0b1b46"}} >
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand visible-lg" href="/"><img src="/logo/youthvn.png"/></a>
            <a className="fa fa-bars" style={{color:"white", fontSize:25,marginTop: 20}}></a>
            
        </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            {this.renderNavbarRight()}
          </div>
      </nav>
    )
  }
}

export default Header;
