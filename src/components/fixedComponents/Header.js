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
    }
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
   render() {
     moment.locale('vi');
    
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

           
           <ul className="nav navbar-nav navbar-right">
              <button type="button" class="btn btn-default">+ Post Job</button>
              <li><a href="#"><span className="fa fa-key" onClick ={()=>{this.props.fadeInSignUp()}}></span> Sign Up</a></li>
              <li><a href="#"><span className="fa fa-sign-in" onClick ={()=>{this.props.fadeInSignIn()}}></span> Login</a></li>
           </ul>
     
          </div>
        
      </nav>
    )
  }
}

export default Header;
