import React, { Component } from 'react'
import OrganizationFilter from './OrganizationFilter';
import ListOrganization from './ListOrganization';
import _ from 'lodash';
import request from 'superagent';
import Pagination from'../CandidateComponents/SingleCandidate/pagination';

class Organizations extends Component {
  constructor(props) {
    super(props);
    this.state= {
      company:[
       {
       name:"FPT",
       hour:13,
       view: 10,
       field:"software, web",
       location:"Canada",
       description:"4 Open PositionKing LLCAccountancy, Human Resources Toronto, OntarioThe Heavy Equipment ",
       position:12,


       },
     {
       name:"VNG",
        hour:12,
        view: 3,
       field:"marketing, english",
       location:"America",
       description:"ádjadjashdjashdkjasadas",
       position:10,


       },
         {
       name:"Google",
        hour:9,
        view: 11,
       field:"Research & Development",
       location:"VietNam",
       description:"ádjadjashdjashdkjasadas",
       position:20,


       },
       

      ],
      selectChosen: false,
      location:"Type"
    
    }
  }
  toggleSelect =()=>{
    this.setState({selectChosen: !this.state.selectChosen}); 
  }
  setLocation =(string)=>{
    this.setState({selectChosen: !this.state.selectChosen, location: string})
    
  }
  render () {
     var elm = this.state.company.map((value,key)=>{
      return (
        <div className="emply-resume-list row">
        <div className="emply-resume-thumb col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <img src="http://placehold.it/100x86" alt="" />
          <div className="view hidden-md hidden-xs hidden-sm" style={{fontSize: 12}}> <i className="fa fa-eye hidden-md hidden-xs hidden-sm"> </i>{" "+value.view} view</div>
          <div style={{fontSize: 12}}><center>{value.hour+" hours ago"}</center></div>
        </div>
        
          <div className="emply-resume-info col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <h3><a href="#" title="" style={{color: "#212121", fontWeight: "bold"}}>{value.name}</a>
            <a href="#" className="fa fa-heart-o"></a></h3>
          
            <span>{value.field}</span><br/>
            <span className="location" style={{color: '#666666' , fontSize: 13}}><i className="fa fa-map-marker"></i>{value.location}</span><br/>
            <span><i>{value.description}</i></span><br/>
            
          </div>
          

           <div className="emply-resume-info col-xs-3 col-sm-3 col-md-3 col-lg-3" >
            <span style={{color:'red'}}>open {value.position} position</span>
           
          </div>
          
              
        </div>
       )
     })
    
    return (
      <div className="candidate-item">
      <div className="padding-left">
        <div className="emply-resume-sec">
         {elm}
        </div>
      </div>
    </div>
    )
  }
}

export default Organizations;