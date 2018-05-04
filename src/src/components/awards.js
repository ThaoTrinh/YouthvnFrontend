import React from 'react';

export default class Awards extends React.Component {
  render() { return (
    <div className="edu-history-sec" id="awards">
      <div className="row">
        <div className="col-md-11 col-sm-11 col-xs-10">
          <h2>Awards</h2>
        </div>
        <div className="col-md-1 col-sm-1 col-xs-2">
          <i className="fa fa-plus pull-right"></i>
        </div>
      </div>
      <div className="edu-history style2">
        <i></i>
        <div className="edu-hisinfo">
        <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <span style={{color:'#8b91dd'}}>First prize in web</span>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-2">
            <a href="#"  className="la la-pencil pull-right"><i></i></a>
          </div>
        </div>
          <i>2008 - 2012</i>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </div>
      </div>
      <div className="edu-history style2">
        <i></i>
        <div className="edu-hisinfo">
        <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <span style={{color:'#8b91dd'}}>First prize in Blockchain</span>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-2">
            <a href="#"  className="la la-pencil pull-right"><i></i></a>
          </div>
        </div>
          <i>2008 - 2012</i>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </div>
      </div>
      <div className="edu-history style2">
        <i></i>
        <div className="edu-hisinfo">
        <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <span style={{color:'#8b91dd'}}>First prize in React</span>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-2">
            <a href="#"  className="la la-pencil pull-right"><i></i></a>
          </div>
        </div>
          <i>2008 - 2012</i>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </div>
      </div>
    </div>
  );
  }
}