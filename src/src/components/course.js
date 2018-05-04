import React from 'react';

export default class Course extends React.Component {
  render() { return (
    <div className="edu-history-sec" id="course">
    <div className="companyies-fol-sec">
    <div className="row">
        <div className="col-md-11 col-sm-11 col-xs-10">
          <h2>Course</h2>
        </div>
        <div className="col-md-1 col-sm-1 col-xs-2">
          <i className="fa fa-plus pull-right"></i>
        </div>
      </div>
    <div className="cmp-follow">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
          <a href="#" title=""><img src="http://placehold.it/80x80" alt="" /><span>C++</span></a>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
          <a href="#" title=""><img src="http://placehold.it/80x80" alt="" /><span>Java</span></a>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
          <a href="#" title=""><img src="http://placehold.it/80x80" alt="" /><span>React</span></a>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
          <a href="#" title=""><img src="http://placehold.it/80x80" alt="" /><span>Nodejs</span></a>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
          <a href="#" title=""><img src="http://placehold.it/80x80" alt="" /><span>Web develop</span></a>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
  }
}