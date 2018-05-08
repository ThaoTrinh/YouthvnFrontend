import React from 'react';

export default class Skill extends React.Component {
  render() { return (
    <div className="progress-sec">

      <div className="row">
        <div className="col-md-11 col-sm-11 col-xs-10">
          <span>Adobe Photoshop</span>
        </div>
        <div className="col-md-1 col-sm-1 col-xs-2">
          <a href="#"  className="fa fa-pencil pull-right"><i></i></a>
        </div>
      </div>

      <div className="progressbar"> <div className="progress " style={{width: '80%'}}><span>80%</span></div> </div>
      
    </div>
  );
  }
}


