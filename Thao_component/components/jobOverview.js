import React from 'react';

export default class JobOverview extends React.Component {
  render() { return (
    <div className="job-overview">
      <h3>Job Overview
        <a href="#" className="la la-pencil"><i></i></a>
      </h3>
      <ul>
        <li><i className="la la-money"></i><h3>Offerd Salary</h3><span>£15,000 - £20,000</span></li>
        <li><i className="la la-mars-double"></i><h3>Gender</h3><span>Female</span></li>
        <li><i className="la la-thumb-tack"></i><h3>Career Level</h3><span>Executive</span></li>
        <li><i className="la la-puzzle-piece"></i><h3>Industry</h3><span>Management</span></li>
        <li><i className="la la-shield"></i><h3>Experience</h3><span>2 Years</span></li>
        <li><i className="la la-line-chart "></i><h3>Qualification</h3><span>Bachelor Degree</span></li>
      </ul>
    </div>
  );
  }
}