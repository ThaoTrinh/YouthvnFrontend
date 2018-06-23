import React from 'react';
import { Link, browserHistory } from 'react-router';
import swal from 'sweetalert';
import moment from 'moment';
import { MoneyToNumber, formattingItemArr, formattingMoney } from '../../commons/share';
import { ACCEPTED_TYPES, INVITATION_TYPES } from '../../commons/constants';
import DropdownLeft from './DropdownLeft'
import DropdownRight from './DropdownRight'
import LargeScreenNav from './LargeScreenNav'
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
  setBackgroundHeader=()=>{
   
    if(window.scrollY >80 ){
      this.setState({hidden: true});
    }
      else{
        this.setState({hidden:false});
      }
  }
  componentDidMount(){
    window.addEventListener("scroll",this.setBackgroundHeader);
  }
  
   renderNavbarRight(){
      if (!this.state.login)
      return (
     <ul className="nav navbar-nav navbar-right">
        <button type="button" class="btn btn-default">+ Post Job</button>
        <li><a href="#" onClick ={()=>{this.props.fadeInSignUp()}}><span className="fa fa-key"></span> Sign Up</a></li>
        <li><a href="#" onClick ={()=>{this.props.fadeInSignIn()}}><span className="fa fa-sign-in"></span> Login</a></li>
     </ul>

      )
      else 
      return(
      <ul className="nav navbar-nav navbar-right user">
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
    console.log(this.state.controllerBarDisplay);
    return (
      <nav className= {this.state.hidden?"navbar-hidden navbar-inverse navbar-fixed-top":"navbar navbar-inverse navbar-fixed-top"} >
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target={this.state.hidden?"#myNavbar-hidden":"#myNavbar"}>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand visible-lg" href="/"><img src="/logo/youthvn.png"/></a>
        </div>
          <div className="collapse navbar-collapse" id={this.state.hidden?"myNavbar-hidden":"myNavbar"}>
            <ul className="nav navbar-nav visible-sm visible-md ">
            <DropdownLeft/> 
            </ul>
            <DropdownRight />      
            <LargeScreenNav />
            {this.renderNavbarRight()}
          </div>
      </nav>
    )
  }
}

export default Header;
