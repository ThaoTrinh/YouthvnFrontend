import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Link, browserHistory} from 'react-router';
import Header from '../fixedComponents/Header';
import Sidebar from './Sidebar';
import CompanyName from '../recruitment/CompanyName';
class UserApp extends Component {
  constructor(props) {
    super(props);
   
  }
  
  render() {
    

    return (
      <div className="app">
        <Header/>
        <CompanyName companyName={'Welcome User'} />
        <div className="app-body row">
          <Sidebar />
          <main className="main col-lg-9 col-md-9">
              <Breadcrumbs
                wrapperElement="ol"
                wrapperClass="breadcrumb"
                itemClass="breadcrumb-item"
                separator=""
                routes={this.props.routes}
                params={this.props.params}
              />
            <div className="container-fluid">
              {this.props.children}
            </div>
        </main>
        </div>
      </div>
    );
  }
}

export default UserApp;
