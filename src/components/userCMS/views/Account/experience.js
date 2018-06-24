

import React from 'react';
import $ from 'jquery';
export default class Publication extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      icondown: true,

      experience:[
        {
          year:"2016-2020",
          name:"Web designer",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          
        },

        {
          year:"2020=2024",
          name:"CEO fouder",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
         
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

    var elm = this.state.experience.map((experience,key)=>{
    return(
      <div className="edu-history style2">
      <i></i>
      <div className="edu-hisinfo">
        <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <span style={{color:'#8b91dd'}}> {experience.name}</span>  
          </div>
          <div className="col-md-1 col-sm-1 col-xs-2" style={{display:"flex"}}>
            <i className="fa fa-pencil pull-right"></i>
            <i className="fa fa-trash-o pull-right" style={{color:"#8b91dd",fontSize:21,float:"left"}}></i>
          </div>
        </div>
        <span style={{fontSize:14, color: "#888888"}}>{experience.year}</span>
        <span style={{fontSize:14, color: "#888888"}}> {experience.description}</span>
      </div>
    </div>
      )
    })
   
    return (

     
      <div className="edu-history-sec" id="recommendator">
        <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <h3 className="sb-title open"
              id={this.props.groupName}
              onClick={() => this.toggle_widget()}
              >{this.props.name}<i onClick  = {()=>{this.toggleIcon()}}className={this.state.icondown?'fa fa-sort-up':'fa fa-sort-down'}></i>
            </h3>
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