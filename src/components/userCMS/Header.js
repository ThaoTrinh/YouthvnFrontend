import React from 'react';
import { Link, browserHistory } from 'react-router';
import moment from 'moment';
import UserAvatar from 'react-user-avatar';
import { ACCEPTED_TYPES, INVITATION_TYPES } from '../../commons/constants';
const $ = window.jQuery;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidUpdate() {
    $('.ui.dropdown').dropdown({
      on: 'hover'
    });
  }

  toggle(e) {
    e.preventDefault();
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-compact');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  renderAvatar() {
    if ($.isEmptyObject(this.props.user)) {
      return (<li><Link to="/account"><i className="sign in icon nav-icon"></i>Đăng nhập</Link></li>)
    }
    else {
      var arr = [], avatar = '';
      try {
        arr = this.props.user._avatar.url.split('/');
        avatar = '/' + [arr[arr.length - 2], arr[arr.length - 1]].join('/');
      } catch (error) { }
      return (
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">
            <img src={(avatar) ? avatar : 'https://placehold.it/40x40'} alt="embedded" className="user-avatar" />
            {this.props.user.fullname}
            <span className="caret"></span>
          </a>
          <ul className="dropdown-menu user-dropdown">
            <li><Link to="/recuits"><i className="blue file text outline icon"></i> Gọi nhân sự</Link></li>
            <li><Link to="/organization"><i className="blue users icon"></i> Tạo tổ chức</Link></li>
            <li className="divider"></li>

            <li><Link onClick={this.props.logout}><i className="blue sign out icon"></i> Đăng xuất</Link></li>
          </ul>
        </li>
      )
    }
  }
  NotificationItem(id, url, img, sender, createdDate, content, isChecked, handleNotiClick) {
    return (
      <li key={id} style={(!isChecked) ? { background: '#edf2fa' } : { background: '#fff' }}>
        <Link onClick={(e) => handleNotiClick(id, url)} className="header-noti-a">
          <div className="pull-left">
            <img src={img} className="img-circle" alt="embedded" />
          </div>
          <h4>
            {sender}
            <small>{createdDate}</small>
          </h4>
          <p><div dangerouslySetInnerHTML={{ __html: content }}></div></p>
        </Link>
      </li>
    )
  }
  renderNotification(propNotifications = [], handleNotiClick, checkAllNotifications) {
    propNotifications = propNotifications.sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime());
    const unChecked = propNotifications.filter(elem => !elem.isChecked);

    return (
      <li className="dropdown messages-menu">
        <Link className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          <i className="fa fa-bell-o"></i>
          {(unChecked.length !== 0)
            ? (<span className="label label-danger header-noti-label">{unChecked.length}</span>)
            : null}
        </Link>
        <ul className="dropdown-menu">
          <li className="header">
            Bạn có {unChecked.length} tin nhắn chưa đọc
            <i
              className="fa fa-check-square-o float-right"
              style={{ marginTop: 3, color: 'green', cursor: 'pointer' }}
              data-toggle="tooltip" title="Đánh dấu đã xem tất cả"
              onClick={(e) => checkAllNotifications()}>
            </i>
          </li>
          <li>
            <ul className="menu">
              {propNotifications.map(elem => {
                var fullname = '';
                if (elem.sender) {
                  fullname = `${elem.sender.lastname} ${elem.sender.firstname}`;
                }
                return (this.NotificationItem(
                  elem._id,
                  elem.url,
                  'https://placehold.it/160x160',
                  fullname,
                  moment(new Date(elem.createdDate), "YYYYMMDD").fromNow(),
                  elem.content,
                  elem.isChecked,
                  handleNotiClick
                )
                )
              }
              )
              }
            </ul>
          </li>
          <li className="header-noti-footer"><Link style={{ fontSize: 13 }}>Xem tất cả</Link></li>
        </ul>
      </li>
    )
  }
  InvitationItem(id, url, img, sender, createdAt, content, isChecked, isAccepted, type, _recruitment, handleInvitationClick, handleInvitationAccepted) {
    return (
      <li key={id} style={(!isChecked) ? { background: '#edf2fa' } : { background: '#fff' }}>
        <Link className="header-noti-a" onClick={() => handleInvitationClick(id)} >
          <div className="pull-left">
            <img src={img} className="img-circle" alt="embedded" />
          </div>
          <h4>
            {sender}
            <small>{createdAt}</small>
          </h4>
          <p>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            {
              (isAccepted === ACCEPTED_TYPES.UNKNOWN)
                ? (<div>
                  <button className="btn btn-sm btn-default margin-right-5" onClick={(e) => handleInvitationAccepted(id, "accepted", type, _recruitment)}>Chấp nhận</button>
                  <button className="btn btn-sm btn-default" onClick={(e) => handleInvitationAccepted(id, "rejected", type, _recruitment)}>Từ chối</button>
                </div>)
                : (isAccepted === ACCEPTED_TYPES.ACCEPTED)
                  ? <span>Bạn đã chấp nhận lời mời này</span>
                  : (isAccepted === ACCEPTED_TYPES.REJECTED) ? <span>Bạn đã từ chối lời mời này</span>
                    : <span>Ngưởi gửi đã hủy bỏ lời mời này</span>
            }
          </p>
        </Link>
      </li>
    )
  }
  renderInvitation(propInvitations = [], handleInvitationClick, checkAllInvitations, handleInvitationAccepted) {
    propInvitations = propInvitations.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    const unChecked = propInvitations.filter(elem => !elem.isChecked);
    return (
      <li className="dropdown messages-menu">
        <Link className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          <i className="fa fa-envelope-o"></i>
          {(unChecked.length !== 0)
            ? (<span className="label label-danger header-noti-label">{unChecked.length}</span>)
            : null}
        </Link>
        <ul className="dropdown-menu">
          <li className="header">
            Bạn có {unChecked.length} lời mời chưa đọc
            <i
              className="fa fa-check-square-o float-right"
              style={{ marginTop: 3, color: 'green', cursor: 'pointer' }}
              data-toggle="tooltip" title="Đánh dấu đã xem tất cả"
              onClick={(e) => checkAllInvitations()}
            >
            </i>
          </li>
          <li>
            <ul className="menu">
              {propInvitations.map(elem => {
                var fullname = '';
                if (elem.sender) {
                  fullname = `${elem.sender.lastname} ${elem.sender.firstname}`;
                }
                return (this.InvitationItem(
                  elem._id,
                  elem.url,
                  'https://placehold.it/160x160',
                  fullname,
                  moment(new Date(elem.createdAt), "YYYYMMDD").fromNow(),
                  elem.content,
                  elem.isChecked,
                  elem.isAccepted,
                  elem.type,
                  elem._recruitment,
                  handleInvitationClick,
                  handleInvitationAccepted
                )
                )
              }

              )
              }
            </ul>
          </li>
          <li className="header-noti-footer"><Link style={{ fontSize: 13 }}>Xem tất cả</Link></li>
        </ul>
      </li>
    )
  }
  render() {
    moment.locale('vi');
    moment.locale('vi');
    const { notifications, handleNotiClick, checkAllNotifications,
      invitations, handleInvitationClick, checkAllInvitations, handleInvitationAccepted } = this.props;
    return (
      <nav className="user-navbar navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle visible-xs" data-toggle="collapse" data-target="#userNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand hidden-sm hidden-xs">BKStartup</Link>
            <a className="navbar-brand hidden-sm hidden-xs" onClick={this.sidebarToggle} href="#">&#9776;</a>
            <a className="navbar-brand visible-sm visible-xs" onClick={this.mobileSidebarToggle} href="#">&#9776;</a>
          </div>

          <div className="collapse navbar-collapse" id="userNavbar">
            <ul className="nav navbar-nav navbar-right">
              {this.renderInvitation(invitations, handleInvitationClick, checkAllInvitations, handleInvitationAccepted)}
              {this.renderNotification(notifications, handleNotiClick, checkAllNotifications)}
              {this.renderAvatar()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
