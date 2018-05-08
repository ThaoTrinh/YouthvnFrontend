import React, { Component } from 'react'


import _ from 'lodash';
import request from 'superagent';
import async from 'async';
import Recruitments from './Recruitment';
import Pagination from '../CandidateComponents/SingleCandidate/pagination';
import Choose from './Choose.js'

class RecruitmentPage extends Component {

  render() {
    

    return (
     <section>
      <div className="Panel">

        </div>
        <div className="container">
          <div className="row no-gape">
           <div className="col-xs-5 col-sm-5 col-md-5 col-lg-4">
              <Choose />
           </div>
           <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
              <Recruitments />
              <div >
              <Pagination/>
               </div>
           </div>
            
          </div>
    </div>
        
      </section>
    )
  }
}

export default RecruitmentPage