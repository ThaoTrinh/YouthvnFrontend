import React from 'react';

export default class HighSchool extends React.Component{
  render(){
    return(
      <div className="edu-history">
        <i className="la la-graduation-cap"></i>
        <div className="edu-hisinfo">
        <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <span style={{color:'#8b91dd'}}>University</span>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-2" style={{display:"flex"}}> 
          <i className="fa fa-pencil pull-right"></i>
          <i className="fa fa-trash-o pull-right" style={{color:"#8b91dd",fontSize:21}}></i>
          </div>
        </div>
          <i>2008 - 2012</i>
          <span>Tomms College <i>Bachlors in Fine Arts</i></span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </div>
      </div>
    );
  }
}