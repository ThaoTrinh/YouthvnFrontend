import React from 'react';

export default class JobOverview extends React.Component {
  render() { return (
    <div className="job-overview">
      <h3>Job Overview
        <a href="#" className="fa fa-pencil"><i></i></a>
      </h3>
      <ul>
        <li><i className="fa fa-money"></i><h3>Offerd Salary</h3><span>£15,000 - £20,000</span></li>
        <li><i className="fa fa-mars-double"></i><h3>Gender</h3><span>Female</span></li>
        <li><i className="fa fa-thumb-tack"></i><h3>Career Level</h3><span>Executive</span></li>
        <li><i className="fa fa-puzzle-piece"></i><h3>Major</h3><span>Management</span></li>
        <li><i className="fa fa-shield"></i><h3>Experience</h3><span>2 Years</span></li>
        <li><i className="fa fa-line-chart "></i><h3>Qualification</h3><span>Bachelor Degree</span></li>
      </ul>
    </div>
  );
  }
}