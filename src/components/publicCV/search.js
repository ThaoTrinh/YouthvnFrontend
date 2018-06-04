import React from 'react';
// import { Link } from 'react-router';

// import _ from 'lodash';


export default class Search extends React.Component {
  render() { return (
    <div className="search_widget_job">
      <div className="field_w_search">
        <input type="text" placeholder="Search Keywords" />
        <i className="la la-search"></i>
      </div>
    </div>
  )};
}