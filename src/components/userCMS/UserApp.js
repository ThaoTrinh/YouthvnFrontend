import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Link, browserHistory} from 'react-router';
import Header from '../fixedComponents/Header';
import Footer from '../fixedComponents/Footer';
import Sidebar from './Sidebar';
import CompanyName from '../recruitment/CompanyName';
class UserApp extends Component {
  constructor(props) {
    super(props);
   
  }
  
  render() {
    

    return (
      <div className="UserApp">
        <Header/>
        <CompanyName companyName={'Welcome User'} />
        <div className="app-body row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
             <Sidebar />
          </div>
                    
          <div className="Userprofile col-xs-9 col-sm-9 col-md-9 col-lg-9">           
           { /*<Breadcrumbs
                wrapperElement="ol"
                wrapperClass="breadcrumb"
                itemClass="breadcrumb-item"
                separator=""
                routes={this.props.routes}
                params={this.props.params}
           />*/}
               {this.props.children}           
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default UserApp;
