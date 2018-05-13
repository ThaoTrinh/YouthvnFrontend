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
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-1">
            <img  style={{width:160}} src="/logo/panner.jpg" alt="" />    
           </div>
           <div className="col-xs-5 col-sm-5 col-md-5 col-lg-3" style={{marginLeft:50}}>
              <SideNav />
           </div>
           <div className="col-xs-7 col-sm-7 col-md-7 col-lg-6" style={{marginRight:10}}>
              <ListItem />

              <div >
              <Pagination/>
               </div>
           </div>
           <div className="col-xs-5 col-sm-5 col-md-5 col-lg-1">
            <img  style={{width:160}} src="/logo/panner.jpg" alt="" />   
           </div>
          </div>
        </div>
        </div>
      </section>
    )
  }
}

export default CVHolder