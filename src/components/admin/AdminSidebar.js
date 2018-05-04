import React from 'react';
import ava from '../../assets/img/ava_1.png';
import {Link} from 'react-router';
// const $ = window.jQuery;

class AdminSidebar extends React.Component {
  render() {

    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src={ava} className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>Son Trinh</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          <ul className="sidebar-menu">
            <li className="header">MENU CHÍNH</li>
              <li className="treeview">
                <Link to="/admin/dashboard">
                  <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                </Link>
              </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-user"></i> <span>Quản lý thành viên</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <Link to="/admin/user"><li><i className="fa fa-circle-o"></i> Cá nhân</li></Link>
                <Link to="/admin/organization"><li><i className="fa fa-circle-o"></i> Tổ chức</li></Link>
              </ul>
            </li>
            
            
            <li className="treeview">
              <Link to="/admin/feedback">
                <i className="fa fa-feed"></i> <span>Feedback</span>
              </Link>
            </li>
          </ul>
        </section>
      </aside>
      )
  }
}

export default AdminSidebar;
