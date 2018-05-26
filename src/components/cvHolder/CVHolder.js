import React, { Component } from 'react'
import ListCV from './ListCV';
import CVFilter from './CVFilter';
import _ from 'lodash';
import request from 'superagent';
import async from 'async';
import SideNav from '../CandidateComponents/SingleCandidate/sidenav';
import ListItem from '../CandidateComponents/SingleCandidate/ListItem';
import Pagination from '../CandidateComponents/SingleCandidate/pagination';
class CVHolder extends Component {
  constructor(props) {
    super(props);
}


  render() {
    

    return (
     <section>
        <div className="Panel">

        </div>
        <div>
        
        <div >
          <div className="row no-gape">
          <div className="hidden-md hidden-xs hidden-sm col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img  style={{width:'100%'}} src="/logo/panner.jpg" alt="" />    
           </div>
           <div className="col-xs-10 col-sm-3 col-md-3 col-lg-3">
              <SideNav />
           </div>
           <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
              <ListItem />

              <div >
              <Pagination/>
              </div>
           </div>
           <div className="hidden-md hidden-xs hidden-sm col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img  style={{width:'100%'}} src="/logo/panner.jpg" alt="" />   
           </div>
          </div>
        </div>
        </div>
      </section>
    )
  }
}

export default CVHolder