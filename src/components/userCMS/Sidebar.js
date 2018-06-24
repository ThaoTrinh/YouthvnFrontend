import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }


  render() {
    return (
      <div className="sidebar" id="#mySideNav" style ={{marginTop:60}}>
        <nav className="sidebar-nav">
          <ul className="nav">
            	<li className="inner-child">
				 						<a href="#" title=""><i className="fa fa-file-text"></i>User Profile</a>
										 <ul>
										 <li><a href="/user/account/profile" title="">My Profile</a></li>
				 							<li><a href="/user/account/cv" title="">My CV</a></li>
				 							<li><a href="/user/account/changepassword" title="">Change Password</a></li>
				 							<li><a href="/user/account/removeaccount" title="">Remove Account</a></li>
				 						</ul>
				 					</li>
				 					<li className="inner-child">
				 						<a href="#" title=""><i className="fa fa-briefcase"></i>Manage Organization</a>
				 						<ul>
				 							<li><a href="#" title="">Create Organization</a></li>
				 							<li><a href="#" title="">My Organization</a></li>
				 							
				 						</ul>
				 					</li>
				 					<li className="inner-child">
				 						<a href="#" title=""><i className="fa fa-money"></i>Transactions</a>
				 						<ul>
				 							<li><a href="#" title="">History Transactions</a></li>
				 						</ul>
				 					</li>
				 					<li className="inner-child">
				 						<a href="#" title=""><i className="fa fa-paper-plane"></i>Jobs Management</a>
				 						<ul>
				 							<li><a href="#" title="">Post a new job</a></li>
				 							<li><a href="#" title="">Posted Jobs List</a></li>
				 							<li><a href="#" title="">Applied Jobs List</a></li>
				 						</ul>
				 					</li>
				 					<li className="inner-child">
				 						<a href="#" title=""><i className="fa fa-user"></i>Others</a>
				 						<ul>
				 							<li><a href="#" title="">Social Network</a></li>
				 							<li><a href="#" title="">Notification</a></li>
				 							<li><a href="#" title="">Contact Information</a></li>
				 						</ul>
				 					</li>
				 				
				 					<li className="inner-child"><a href="#" title=""><i className="fa fa-unlink"></i>Logout</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
