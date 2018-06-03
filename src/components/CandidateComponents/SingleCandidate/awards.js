
import React from 'react';
import $ from 'jquery';
export default class Publication extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      icondown: true,

      awards:[
        {
          year:"12/12/2016",
          name:"First prize in web",
          description:"React & Nodejs",
          
        },

        {
          year:"26/12/2017",
          name:"First prize in Blockchain",
          description:"Blockchain",
         
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

    var elm = this.state.awards.map((awards,key)=>{
    return(
      <div className="edu-history style2">
      <i></i>
      <div className="edu-hisinfo">
        <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <span style={{color:'#8b91dd'}}>{awards.year}</span>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-2">
            <a href="#"  className="fa fa-pencil pull-right"><i></i></a>
          </div>
        </div>
        <span style={{fontSize:14, color: "#888888"}}> {awards.name}</span>
        <span style={{fontSize:14, color: "#888888"}}> {awards.description}</span>
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