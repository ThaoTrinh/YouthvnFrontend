import React from 'react';

export default class Portfolio extends React.Component {
  render() { return (
    <div className="mini-portfolio" id="portfolio">
      <div className="row">
        <div className="col-md-11 col-sm-11 col-xs-10">
          <h2>Porfolio</h2>
        </div>
        <div className="col-md-1 col-sm-1 col-xs-2">
          <i className="fa fa-plus pull-right"></i>
        </div>
      </div>
      <div className="mp-row">
        <div className="mp-col">
          <div className="mportolio"><img src="http://placehold.it/165x115" alt="" /><a href="#" title=""><i className="la la-search"></i></a></div>
        </div>
        <div className="mp-col">
          <div className="mportolio"><img src="http://placehold.it/165x115" alt="" /><a href="#" title=""><i className="la la-search"></i></a></div>
        </div>
        <div className="mp-col">
          <div className="mportolio"><img src="http://placehold.it/165x115" alt="" /><a href="#" title=""><i className="la la-search"></i></a></div>
        </div>
        <div className="mp-col">
          <div className="mportolio"><img src="http://placehold.it/165x115" alt="" /><a href="#" title=""><i className="la la-search"></i></a></div>
        </div>
      </div>
    </div>
  );
  }
}