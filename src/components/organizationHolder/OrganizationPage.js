import React, { Component } from 'react'


import _ from 'lodash';
import request from 'superagent';
import async from 'async';
import Organizations from './Organization';
import Pagination from '../CandidateComponents/SingleCandidate/pagination';
import ChooseOrganization from './ChooseOrganization.js'

class OrganizationPage extends Component {

  render() {
    

    return (
     <section>
      <div className="Panel">

        </div>
        <div>
          <div className="row no-gape">
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-1">
            <img  style={{width:160}} src="/logo/panner.jpg" alt="" />    
           </div>
           <div className="col-xs-5 col-sm-5 col-md-5 col-lg-3" style={{marginLeft:50}}>
              <ChooseOrganization />
           </div>
           <div className="col-xs-7 col-sm-7 col-md-7 col-lg-6"  style={{marginRight:20}}>
              <Organizations />
              <div >
              <Pagination/>
               </div>
           </div>
           <div className="col-xs-5 col-sm-5 col-md-5 col-lg-1">
            <img  style={{width:160}} src="/logo/panner.jpg" alt="" />    
           </div>
          </div>
    </div>
        
      </section>
    )
  }
}

export default OrganizationPage