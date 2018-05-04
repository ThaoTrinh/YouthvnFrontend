import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import Header from './fixedComponents/Header';
import Footer from './fixedComponents/Footer';
import request from 'superagent';
import _ from 'lodash';
import async from 'async';
import { delay } from '../commons/share';
import { env } from "../commons/env";
import { ACCEPTED_TYPES, INVITATION_TYPES } from '../commons/constants';
const CronJob = require('cron').CronJob;
const $ = window.jQuery;
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading_bar_show: false,
      user: {},

      recuitments: [],
      total_recuitments: 0,

      searchResults: [],
      totalSearchResults: 0,
      searchLoading: false,
      users: [],
      total_users: 0,

      // notification
      notifications: [],
      //invitation
      invitations: []
    }
 
  }
 
  render() {
    
    return (
      <div className='App theme-layout'>
        <Header 
        />
        <Loading
          show={this.state.loading_bar_show}
          color="red"
        />
        <div className="app-body">
          <main className="main overflow-y-hidden">
          {this.props.children}
         
          </main>
        </div>
         <Footer/>
      </div>
    );
  }
}

export default App;
