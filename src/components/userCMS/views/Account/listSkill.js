

import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
export default class ListSkill extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      icondown: true,
      skill:[
        {
        name:"React",
        level:"80%"
        },

        {
          name:"Nodejs",
          level:"70%"
          },

      ]
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

  render(){

    var elm = this.state.skill.map((skill,key)=>{
    return(
      <div className="progress-sec">

      <div className="row">
        <div className="col-md-11 col-sm-11 col-xs-10">
          <span>{skill.name} - </span>
          <span>{skill.level}</span>
        </div>
        <div className="col-md-1 col-sm-1 col-xs-2" style={{display:"flex"}}>
          <i className="fa fa-pencil pull-right"></i>
          <i className="fa fa-trash-o pull-right" style={{color:"#8b91dd",fontSize:21}}></i>
        </div>
      </div>

      <div className="progressbar"> <div className="progress " style={{width: skill.level}}></div> </div>
      
    </div>
      )
    })
   
    return (

     
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
            {elm}
          </div>
        </div>
        <div className="col-md-1 col-sm-1 col-xs-2">
         <a href="#" className="fa fa-plus" style={{marginTop:10}}></a>
        </div>
      </div>
    </div>
      
       
    );
    ;
  }
}