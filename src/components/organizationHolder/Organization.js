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
             <div className="row Company-Item">
             <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 logo">
               <a href="#" title=""><img src="http://placehold.it/80x80" alt="" /></a>
              <span className="view"><i className="fa fa-eye"></i>{" "+ value.view +" view"} </span>
               <p className="hour" style={{fontSize:12,marginTop:0}}>{value.hour+' hours ago'}</p>
             </div>
             <div className="col-xs-8 col-sm-8 col-md-8 col-lg-7 content">
               <div className="companyName">{value.name}
                <i className="fa fa-heart-o heart"> </i>
               </div>
               <p>{value.field}</p>
               <span><i className="fa fa-map-marker"></i>{value.location}</span>
               <p className="description">{value.description}</p>
             </div>
             <div className="col-xs-2 col-sm-2 col-md-2 col-lg-3 empty-position">
               <h3 style={{color:'red'}}>{value.position + ' open positions'}</h3>
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