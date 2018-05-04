import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  render() {
    return (
      <div className="sidebar" id="#mySideNav">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/'} className="text-center hidden-md hidden-lg nav-link" activeClassName="active">BKStartup</Link>
            </li>
            <li className="ui fitted divider hidden-md hidden-lg"></li>

            <li className="nav-title">
              Thông tin người dùng
            </li>
            <li className="nav-item">
              <Link to={'/user/account/profile'} className="nav-link" activeClassName="active"><i className="user icon"></i> Hồ sơ cá nhân</Link>
            </li>
            <li className="nav-item">
              <Link to={'/user/account/reset-password'} className="nav-link" activeClassName="active"><i className="edit icon"></i> Đổi mật khẩu</Link>
            </li>
            <li className="nav-item">
              <Link to={'/user/account/delete'} className="nav-link" activeClassName="active"><i className="remove user icon"></i> Xóa tài khoản</Link>
            </li>

            <li className="nav-title">
              Quản lý tổ chức
            </li>
            <li className="nav-item">
              <Link to={'/user/organization/create'} className="nav-link" activeClassName="active"><i className="users icon"></i> Tạo tổ chức</Link>
            </li>
            <li className="nav-item">
              <Link to={'/user/organization/list'} className="nav-link" activeClassName="active"><i className="users icon"></i> Tổ chức của tôi</Link>
            </li>
            <li className="ui fitted divider"></li>

            <li className="nav-title">
              Quản lý tuyển dụng
            </li>
            <li className="nav-item">
              <Link to={'/user/recruitment/create'} className="nav-link" activeClassName="active"><i className="users icon"></i> Đăng tin tuyển dụng</Link>
            </li>
            <li className="nav-item">
              <Link to={'/user/recruitment/list'} className="nav-link" activeClassName="active"><i className="folder icon"></i> Danh sách tin tuyển dụng của tôi</Link>
            </li>
            <li className="nav-item">
              <Link to={'/user/recruitment/list-apply'} className="nav-link" activeClassName="active"><i className="folder icon"></i> Danh sách tin tuyển dụng đã ứng tuyển</Link>
            </li>
            <li className="ui fitted divider"></li>
            <li className="nav-title">
              Quản lý tài khoản
            </li>
            <li className="nav-item">
              <Link to={'/user/manage-transaction'} className="nav-link" activeClassName="active"><i className="dollar icon"></i> Các giao dịch</Link>
            </li>
            <li className="ui fitted divider"></li>
            <li className="nav-title">
              Thông tin khác
            </li>
            <li className="nav-item">
              <Link to={'/user/others/connection'} className="nav-link" activeClassName="active"><i className="world icon"></i> Kết nối</Link>
            </li>
            <li className="nav-item">
              <Link to={'/user/others/notification'} className="nav-link" activeClassName="active"><i className="fa fa-envelope-o"></i> Thông báo</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
