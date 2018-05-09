import React, { Component } from 'react'
import ListRecruitment from './ListRecruitment';
import RecruitmentFilter from './RecruitmentFilter';
import Ranges from '../CandidateComponents/ListCandidate/Ranges.js';
import Slider from '../CandidateComponents/ListCandidate/Sliders.js';
import Pagination from'../CandidateComponents/SingleCandidate/pagination';
import _ from 'lodash';
import request from 'superagent';

class Recruitments extends Component {
  constructor(props){
    super(props);
    this.state ={
        selectChosen: false,
        location:"Location",
        recruitments: [
       {
         name: 'Web Developer',
         company: 'KMS company' ,
         logoCompany:"/logo/KMS.png" ,
         type:"full-time" ,
         location: "Sai Gon" ,
         salary:"10 million"

       },
      {
         name: 'Mobile Developer',
         company:"VNG Inc." ,
         logoCompany: "/logo/VNG.png" ,
         type:"full-time"  ,
         location:"Sai Gon" ,
         salary:"15 million"
       },
      {
         name: "PHP dev",
         company:"Facebook Vietnam",
         logoCompany: "/logo/facebook.png",
         type:"part-time" ,
         location: "Singapore",
         salary:"10 million"
       },
       {
         name:"Data Science" ,
         company:" Google Asia",
         logoCompany: "/logo/google.png",
         type: "freelance"  ,
         location: "Da Nang",
         salary:"15 million"
       },
       {
         name:" Game Developer Unity" ,
         company: "Gameloft",
         logoCompany:"/logo/Gameloft.png" ,
         type: "part-time"  ,
         location:" Bangkok" ,
         salary:"20 million"
       },
       {
         name:"Optimize search engine" ,
         company: "Gameloft",
         logoCompany:"/logo/amazon.png" ,
         type: "part-time"  ,
         location:"Ha Noi" ,
         salary:"10 million"
       },
        {
         name: 'Web Developer',
         company: 'KMS company' ,
         logoCompany:"/logo/KMS.png" ,
         type:"full-time" ,
         location: "Sai Gon" ,
         salary:"20 million"

       },
      {
         name: 'Mobile Developer',
         company:"VNG Inc." ,
         logoCompany: "/logo/VNG.png" ,
         type:"full-time"  ,
         location:"Sai Gon" ,
         salary:"10 million"
       },
      {
         name: "PHP dev",
         company:"Facebook Vietnam",
         logoCompany: "/logo/facebook.png",
         type:"part-time" ,
         location: "Singapore",
         salary:"13 million"
       },
       {
         name:"Data Science" ,
         company:" Google Asia",
         logoCompany: "/logo/google.png",
         type: "freelance"  ,
         location: "Da Nang",
         salary:"14 million"
       },
       {
         name:" Game Developer Unity" ,
         company: "Gameloft",
         logoCompany:"/logo/Gameloft.png" ,
         type: "part-time"  ,
         location:" Bangkok" ,
         salary:"10\8 million"
       },
       {
         name:"Optimize search engine" ,
         company: "Gameloft",
         logoCompany:"/logo/amazon.png" ,
         type: "part-time"  ,
         location:"Ha Noi" ,
         salary:"11 million"
       }

      ]
    }
  }
  toggleSelect =()=>{
    this.setState({selectChosen: !this.state.selectChosen}); 
  }
  setLocation =(string)=>{
    this.setState({selectChosen: !this.state.selectChosen, location: string})
    
  }
  
  render() {
    var elm = this.state.recruitments.map((value,key)=>{
      return(
           <div key={key} className="recruit-item col-xs-12 col-sm-12 col-md-12">
               <div className="row">
                 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 logo">
                    <img src={value.logoCompany}/>
                 </div>
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 content">
                   <h3>{value.name}
                   <i className="fa fa-heart-o heart"> </i>
                   </h3>
                   <h4>{value.company}</h4>
                   <h4 style={{color: 'red'}}>Salary: upto {value.salary}</h4>
                   <p><i className="fa fa-map-marker"></i>{value.location}</p>
                   
                 </div>
                
                 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 frame ">
                    
                    <p className={value.type}> {value.type} </p>
                 </div>
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
    );  
  }
}

export default Recruitments


