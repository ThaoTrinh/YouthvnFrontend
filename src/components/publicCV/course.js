import React from 'react';
import $ from 'jquery';
export default class Course extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      icondown: true
    }
  }


  toggle_widget() {
    $(document.getElementById(this.props.groupName)).next().slideToggle();
    document.getElementById(this.props.groupName).classList.toggle('active');
    document.getElementById(this.props.groupName).classList.toggle('closed');
  }

  toggleIcon=()=>{
    this.setState({icondown:!this.state.icondown});
  }

  render() { return (
    <div className="edu-history-sec" id="course">
      <div className="companyies-fol-sec">
        <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <h2 className="sb-title open"
              id={this.props.groupName}
              onClick={() => this.toggle_widget()}
              >{this.props.name} 
              <b onClick  = {()=>{this.toggleIcon()}}className={this.state.icondown?'fa fa-sort-up':'fa fa-sort-down'}>
              </b> 
            </h2>
            <div className="specialism_widget">
              <div className="cmp-follow">
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                    <a href="#" title=""><img src="http://placehold.it/80x80" alt="" /><span>C++</span></a>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                    <a href="#" title=""><img src="http://placehold.it/80x80" alt="" /><span>Java</span></a>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                    <a href="#" title=""><img src="http://placehold.it/80x80" alt="" /><span>React</span></a>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                    <a href="#" title=""><img src="http://placehold.it/80x80" alt="" /><span>Nodejs</span></a>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                    <a href="#" title=""><img src="http://placehold.it/80x80" alt="" /><span>Web develop</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-2">
            <a href="#" className="fa fa-plus" style={{marginTop:10}}></a>
          </div>
      </div>
    </div>
  </div>
  );
  }
}