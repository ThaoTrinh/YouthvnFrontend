import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Link, browserHistory} from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

import request from 'superagent';
import _ from 'lodash';
import async from 'async';
import { env } from "../../commons/env";
import { ACCEPTED_TYPES, INVITATION_TYPES } from '../../commons/constants';
const CronJob = require('cron').CronJob;
const $ = window.jQuery;

class UserApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      notifications: [],
      invitations: []
    }
    this.logout = this.logout.bind(this);
    this.validateUser = this.validateUser.bind(this);
    this.handleNotiClick = this.handleNotiClick.bind(this);
    this.checkAllNotifications = this.checkAllNotifications.bind(this);
  }
  // validateUser() {
  //   if (localStorage.getItem('token')) {
  //     const token = localStorage.getItem('token');
  //     $.ajax({
  //       method: "POST",
  //       url: "/api/user/user-info",
  //       headers: {
  //         'x-access-token': token
  //       },
  //       async: false,
  //     }).done(response => {
  //       if (response.success) {
  //         this.setState({user: response.user});
  //         request
  //         .post('/api/notification/push')
  //         .set('x-access-token', token)
  //         .send({ data: 1 })
  //         .end((err, res) => {
  //           if (err) console.log(err);
  //           else {
  //             request
  //               .get('/api/notification')
  //               .set('x-access-token', token)
  //               .end((err, res) => {
  //                 this.setState({ notifications: res.body.notifications })
  //               })
  //           }
  //         })
  //       }
  //       else {
  //         if (localStorage.getItem('token')) {
  //           localStorage.removeItem('token');
  //         }
  //         alert(response.message);
  //       }
  //     })
  //   }
  //   else {
  //     browserHistory.push('/');
  //   }
  // }
  validateUser() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      $.ajax({
        method: "POST",
        url: env.serverUrl + "/api/user/user-info",
        headers: {
          'x-access-token': token
        },
        async: false,
      }).done(response => {
        if (response.success) {
          this.setState({user: response.user});
          // get notification and invitation
          async.parallel({
            notifications: (callback) => {
              request
              .post(env.serverUrl + '/api/notification/push')
              .set('x-access-token', token)
              .send({ data: 1 })
              .end((err, res) => {
                if (err) console.log(err);
                else {
                  request
                    .get(env.serverUrl + '/api/notification')
                    .set('x-access-token', token)
                    .end((err, res) => {
                      callback(null, res.body.notifications)
                    })
                }
              })
            },
            invitations: (callback) => {
              request
              .post(env.serverUrl + '/api/invitation/push')
              .set('x-access-token', token)
              .send({ data: 1 })
              .end((err, res) => {
                if (err) console.log(err);
                else {
                  request
                    .get(env.serverUrl + '/api/invitation')
                    .set('x-access-token', token)
                    .end((err, res) => {
                      callback(null, res.body.invitations)
                    })
                }
              })
            }
          }, (err, results) => {
            if (err) console.log(err);
            else {
              const { notifications, invitations } = results;
              this.setState({notifications, invitations})
            }
          })
        }
        else {
          if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
          }
          console.log("Bạn chưa đăng ký hoặc tài khoản này đã bị xóa.");
        }
      })
    }
    else {
      browserHistory.push('/');
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.setState({user: {}}, () => browserHistory.push('/'));
  }
  receiveNotification() {
    const data = { data: 1 }
    const token = localStorage.getItem('token');
    if (!token) return;

    return new CronJob('1 * * * * *', () => {
      request
        .post(env.serverUrl + '/api/notification/push')
        .set('x-access-token', token)
        .send(data)
        .end((err, res) => {
          if (err) console.log(err);
          else {
            request
              .get('/api/notification')
              .set('x-access-token', token)
              .end((err, res) => {
                this.setState({ notifications: res.body.notifications })
              })
          }
        })
    }, null, true, 'Asia/Ho_Chi_Minh');
  }
  receiveInvitation() {
    const data = { data: 1 }
    const token = localStorage.getItem('token');
    if (!token) return;

    return new CronJob('1 * * * * *', () => {
      request
        .post(env.serverUrl + '/api/invitation/push')
        .set('x-access-token', token)
        .send(data)
        .end((err, res) => {
          if (err) console.log(err);
          else {
            request
              .get(env.serverUrl + '/api/invitation')
              .set('x-access-token', token)
              .end((err, res) => {
                this.setState({ invitations: res.body.invitations })
              })
          }
        })
    }, null, true, 'Asia/Ho_Chi_Minh');
  }
  handleNotiClick(id, url) {
    const token = localStorage.getItem('token');
    if (token) {
      request
        .post(env.serverUrl + '/api/notification/check')
        .set('x-access-token', token)
        .send({ id })
        .end((err, res) => {
          if (err) console.log(err);
          else {
            const { updated } = res.body;
            const { notifications } = this.state;
            const newArr = notifications.map(elem => {
              if (elem._id.toString() === updated._id.toString()) {
                return updated;
              }
              return elem;
            })
            this.setState({ notifications: newArr });
            browserHistory.push(url)
          }
        })
    }
  }

  checkAllNotifications() {
    const token = localStorage.getItem('token');
    if (token) {
      request
        .post(env.serverUrl + '/api/notification/checkAll')
        .set('x-access-token', token)
        .send({ data: 1 })
        .end((err, res) => {
          if (err) console.log(err);
          else {
            this.setState({ notifications: res.body.notifications });
          }
        })
    }
  }
  handleInvitationClick = (id) => {
    const token = localStorage.getItem('token');
    if (token) {
      request
        .post(env.serverUrl + '/api/invitation/check')
        .set('x-access-token', token)
        .send({ id })
        .end((err, res) => {
          if (err) console.log(err);
          else {
            const { updated } = res.body;
            const { invitations } = this.state;
            const newArr = invitations.map(elem => {
              if (elem._id.toString() === updated._id.toString()) {
                return updated;
              }
              return elem;
            })
            this.setState({ invitations: newArr });
          }
        })
    }
  }
  handleInvitationAccepted = (id, isAccepted, type, _recruitment) => {
    const token = localStorage.getItem('token');
    if (!token) return;
    if (type === INVITATION_TYPES.RECRUITMENT && isAccepted === ACCEPTED_TYPES.ACCEPTED) {
      browserHistory.push({
        pathname: `/recruitments/apply/${_recruitment}`,
        state: { invitationId: id }
      })
      return;
    }
    request
    .put(env.serverUrl + '/api/invitation')
    .set('x-access-token', token)
    .send({ id, isAccepted })
    .end((err, res) => {
      if (err) console.log(err);
      else {
        request
        .get('/api/invitation')
        .set('x-access-token', token)
        .end((err, res) => {
          this.setState({invitations: res.body.invitations});
        })
      }
    })
  }

  checkAllInvitations = () => {
    const token = localStorage.getItem('token');
    if (token) {
      request
        .post(env.serverUrl + '/api/invitation/checkAll')
        .set('x-access-token', token)
        .send({ data: 1 })
        .end((err, res) => {
          if (err) console.log(err);
          else {
            this.setState({ invitations: res.body.invitations });
          }
        })
    }
  }
  componentWillMount() {
    this.validateUser();
    this.receiveNotification();
    this.receiveInvitation();
  }

  render() {
    const {user, notifications, invitations} = this.state;
    const children = React.Children.map(this.props.children,
       (child) => React.cloneElement(child, {
         user: user,
      })
    )

    return (
      <div className="app">
        <Header 
          user={user} 
          logout={this.logout}
          notifications={notifications}
          invitations={invitations}
          handleNotiClick={this.handleNotiClick}
          checkAllNotifications={this.checkAllNotifications}
          handleInvitationClick={this.handleInvitationClick}
          checkAllInvitations={this.checkAllInvitations}
          handleInvitationAccepted={this.handleInvitationAccepted} />
        
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumbs
              wrapperElement="ol"
              wrapperClass="breadcrumb"
              itemClass="breadcrumb-item"
              separator=""
              routes={this.props.routes}
              params={this.props.params}
            />
            <div className="container-fluid">
              {children}
            </div>
          </main>

        </div>

      </div>
    );
  }
}

export default UserApp;
