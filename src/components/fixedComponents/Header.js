import React from 'react';
import { Link, browserHistory } from 'react-router';
import swal from 'sweetalert';
import moment from 'moment';
import { MoneyToNumber, formattingItemArr, formattingMoney } from '../../commons/share';
import { ACCEPTED_TYPES, INVITATION_TYPES } from '../../commons/constants';
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
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <Link to="/" className="navbar-brand" onClick={() => { window.scrollTo(0, 0) }}><img src="logo/youthvn.png" /></Link>
          </div>

          <div className="collapse navbar-collapse" id={this.state.hidden?"myNavbar-hidden":"myNavbar"}>
            <ul className="nav navbar-nav visible-sm visible-md visibleul">
             
            </ul>
            <ul className="nav navbar-nav hidden-sm hidden-md ">
              <li className="a1">
                <Link to="/cvs"> Candidates List <span><i className="fa fa-caret-down"></i></span></Link>
                
              </li>
              <li className="a ">
                <Link to="/organizations"> Employers List <span><i className="fa fa-caret-down"></i></span></Link>
              </li>
              
              <li className="a ">
                <Link to="/recruitments">Recruitments List  <span><i className="fa fa-caret-down"></i></span></Link>
              </li>
              <button type="button" class="btn btn-default">+ Post Job</button>
            </ul>

           
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><span className="fa fa-key"></span> Sign Up</a></li>
                  <li><a href="#"><span className="fa fa-sign-in" onClick ={()=>{this.props.fadeIn()}}></span> Login</a></li>
               </ul>
     
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
