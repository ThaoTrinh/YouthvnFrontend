import React from 'react';
import Skill from './skill.js';
import $ from 'jquery';
export default class Information extends React.Component {


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
    <div className="progress-sec" id="skills" style={{marginBottom:0}} >
      <div className="row">
        <div className="col-md-11 col-sm-11 col-xs-10">
          <h2 className="skillfix sb-title open"
            id={this.props.groupName}
            onClick={() => this.toggle_widget()}
            >{this.props.name}
            <b onClick  = {()=>{this.toggleIcon()}}className={this.state.icondown?'fa fa-sort-up':'fa fa-sort-down'}>
            </b>
          </h2>

          <div className="specialism_widget">
            <Skill/>
            <Skill/>
          </div>
        </div>
        <div className="col-md-1 col-sm-1 col-xs-2">
         <a href="#" className="fa fa-plus" style={{marginTop:10}}></a>
        </div>
      </div>
    </div>
  );
  }
}