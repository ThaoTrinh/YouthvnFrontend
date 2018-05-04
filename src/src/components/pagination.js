import React from 'react';


export default class Pagination extends React.Component {
  render() { return (
    <div className="pagination col-sm-7">
      <ul>
        <li className="prev"><a href=""><i className="la la-long-arrow-left"></i> Prev</a></li>
        <li><a href="">1</a></li>
        <li className="active"><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><span className="delimeter">...</span></li>
        <li><a href="">14</a></li>
        <li className="next"><a href="">Next <i className="la la-long-arrow-right"></i></a></li>
      </ul>
    </div>
  )};
}