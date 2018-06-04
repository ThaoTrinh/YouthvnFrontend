


import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
export default class Education extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      icondown: true,
      education:[
        {
        Type:"University",
        year:"12/2020",
        School:"Bach Khoa University",
        Major:"Computer Science",
        },

        {
          Type:"High School",
          year:"12/2016",
          School:"Le Thanh Phuong",
          Major:"12/12",
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

    var elm = this.state.education.map((education,key)=>{
    return(
      <div className="edu-history">
        <i className="fa fa-graduation-cap"></i>
        <div className="edu-hisinfo">
        <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <span style={{color:'#8b91dd'}}>{education.Type} - </span>
            <span><i>{education.year}</i></span>
            
          </div>
          <div className="col-md-1 col-sm-1 col-xs-2">
            <a href="#"  className="fa fa-pencil pull-right"><i></i></a>
          </div>
        </div>
        
         <i> <span>{education.Major} - </span>
         <span>{education.School }</span></i>
        </div>
      </div>
      )
    })
   
    return (

     
      <div className="edu-history-sec" id="education">
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