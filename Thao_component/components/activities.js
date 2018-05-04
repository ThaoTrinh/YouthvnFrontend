import React from 'react';

export default class Activities extends React.Component{
  render(){
    return(
      <div className="edu-history-sec">
      <div className="row">
        <div className="col-md-11 col-sm-11 col-xs-10">
          <h2>Activities</h2>
        </div>
        <div className="col-md-1 col-sm-1 col-xs-2">
          <i className="fa fa-plus pull-right"></i>
        </div>
      </div>
        <div className="edu-history">
          <i className="la la-calendar"></i>
          <div className="edu-hisinfo">
          <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <span style={{color:'#8b91dd'}}>Volunteer</span>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-2">
            <a href="#"  className="la la-pencil pull-right"><i></i></a>
          </div>
        </div>
            <i>2008 - 2012</i>
            <span>Middle East Technical University <i>Computer Science</i></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
        </div>
        </div>
    );
  }
}