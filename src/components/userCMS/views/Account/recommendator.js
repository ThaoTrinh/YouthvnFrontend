import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
export default class Recommendator extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      icondown: true,
      recommendator:[
        {
        name:"Mr. John",
        email:"john@gmail.com",
        works:"SaigonAI",
        position:"CEO",
        relation:"employer"
        },

        {
          name:"Mr. Been",
          email:"Been@gmail.com",
          works:"KMS",
          position:"CEO",
          relation:"friend"
        }

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

    var elm = this.state.recommendator.map((person,key)=>{
    return(
      <div className="edu-history">
        <i className="fa fa-suitcase"></i>
        <div className="edu-hisinfo">
          <div className="row">
            <div className="col-md-11 col-sm-11 col-xs-10">
              <span style={{color:'#8b91dd'}}>{person.name}
               <span style={{fontSize:14, color: "#888888"}}> - {person.position} - {person.works}</span></span>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-2" style={{display:"flex"}}>
            <i className="fa fa-pencil pull-right"></i>
            <i className="fa fa-trash-o pull-right" style={{color:"#8b91dd",fontSize:21}}></i>
            </div>
          </div>
              <span style={{fontSize:14, color: "#888888"}}>{person.email}</span>
              <span style={{fontSize:14, color: "#888888"}}>Relations: {person.relation}</span>
        </div>
      </div>
      )
    })
   
    return (

     
      <div className="edu-history-sec" id="recommendator">
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