import React from 'react';

export default class University extends React.Component{
  render(){
    return(
      <div className="edu-history">
        <i className="fa fa-graduation-cap"></i>
        <div className="edu-hisinfo">
        <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <span style={{color:'#8b91dd'}}>University</span>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-2">
            <a href="#"  className="fa fa-pencil pull-right"><i></i></a>
          </div>
        </div>
          <i>2008 - 2012</i>
          <span>Middle East Technical University <i>Computer Science</i></span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </div>
      </div>
    );
  }
}