import React from 'react';

export default class SaveResume extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="skills-btn">
              <a href="#" title="">Photoshop</a>
              <a href="#" title="">Designers</a>
              <a href="#" title="">Illustrator</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="action-inner">
              <a href="#" title=""><i className="fa fa-paper-plane"></i>Save Resume</a>
              <a href="#" title=""><i className="fa fa-envelope-o"></i>Contact David</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}