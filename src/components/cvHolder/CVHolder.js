import React, { Component } from 'react'
import _ from 'lodash';
import request from 'superagent';
import async from 'async';
import CVfilter from './CVfilter';
import ListCV from './ListCV';
import Pagination from '../filter/pagination';
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
          <div className="hidden-md hidden-xs hidden-sm  col-lg-1">
            <img  style={{width:'100%'}} src="/logo/panner.jpg" alt="" />    
           </div>
           <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
              <CVfilter />
           </div>
           <div className="col-xs-12 col-sm-8 col-md-8 col-lg-7">
              <ListCV />

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Pagination/>
              </div>
           </div>
           <div className="hidden-md hidden-xs hidden-sm col-lg-1">
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