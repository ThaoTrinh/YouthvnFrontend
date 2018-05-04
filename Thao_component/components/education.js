import React from 'react';
import University from './university.js';
import HighSchool from './highSchool.js';

export default class Education extends React.Component {
  render() { return (
    <div className="edu-history-sec" id="education">
      <div className="row">
        <div className="col-md-11 col-sm-11 col-xs-10">
          <h2>Education
          </h2>
        </div>
        <div className="col-md-1 col-sm-1 col-xs-2">
          <i className="fa fa-plus pull-right"></i>
        </div>
      </div>
      <University/>
      <HighSchool/>
    </div>
  );
  }
}