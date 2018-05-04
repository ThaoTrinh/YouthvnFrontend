import React from 'react';

export default class Recommendator extends React.Component{
  render(){
    return(
      <div className="edu-history-sec" id="recommendator">
      <div className="row">
        <div className="col-md-11 col-sm-11 col-xs-10">
          <h2>Recommendator</h2>
        </div>
        <div className="col-md-1 col-sm-1 col-xs-2">
          <i className="fa fa-plus pull-right"></i>
        </div>
      </div>
        <div className="edu-history">
          <i className="la la-suitcase"></i>
          <div className="edu-hisinfo">
          <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <span style={{color:'#8b91dd'}}>Thao Trinh</span>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-2">
            <a href="#"  className="la la-pencil pull-right"><i></i></a>
          </div>
        </div>
            <span>CEO SaigonAI</span>
          </div>
        </div>
        <div className="edu-history">
          <i className="la la-suitcase"></i>
          <div className="edu-hisinfo">
          <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <span style={{color:'#8b91dd'}}>Mr Been</span>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-2">
            <a href="#"  className="la la-pencil pull-right"><i></i></a>
          </div>
        </div>
            <span>CEO ABCD</span>
          </div>
        </div>
      </div>
    );
  }
}