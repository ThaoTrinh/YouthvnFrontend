import React from 'react';

export default class SaveResume extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
        
          <div className="col-xs-4 col-sm-5 col-md-5 col-lg-6">
            <div className="skills-btn">
              <a href="#" title="">Photoshop</a>
              <a href="#" title="">Designers</a>
              <a href="#" title="">Illustrator</a>
            </div>
          </div>
          <div className="col-xs-3 col-sm-1"></div>
          <div className="col-xs-5 col-sm-6 col-md-7 col-lg-6">
            <div className="action-inner" style={{paddingTop:10}}>
              <a href="#" title=""><i className="fa fa-paper-plane"></i>Save Resume</a>
              <a href="#" title=""><i className="fa fa-envelope-o"></i>Contact David</a>
              <a href="#" title=""><i className="fa fa-download"></i>Download CV</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}