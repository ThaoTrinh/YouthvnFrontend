{/*import React, { Component } from 'react'
import ListRecruitment from './ListRecruitment';
import { Link } from 'react-router';
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
         salary:1000
       },
      {
         name: 'Mobile Developer',
         company:"VNG Inc." ,
         logoCompany: "/logo/VNG.png" ,
         type:"full-time"  ,
         location:"Sai Gon" ,
         salary:2000
       },
      {
         name: "PHP dev",
         company:"Facebook Vietnam",
         logoCompany: "/logo/facebook.png",
         type:"part-time" ,
         location: "Singapore",
         salary:4000
       },
       {
         name:"Data Science" ,
         company:" Google Asia",
         logoCompany: "/logo/google.png",
         type: "freelance"  ,
         location: "Da Nang",
         salary:6000
       },
       {
         name:" Game Developer Unity" ,
         company: "Gameloft",
         logoCompany:"/logo/Gameloft.png" ,
         type: "part-time"  ,
         location:" Bangkok" ,
         salary:9000
       },
       {
         name:"Optimize search engine" ,
         company: "Gameloft",
         logoCompany:"/logo/amazon.png" ,
         type: "part-time"  ,
         location:"Ha Noi" ,
         salary:1000
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
          <div key={key} className="col-xs-12 col-sm-12 col-md-12 col-lg-12 emply-resume-list">
               <div className="row">
                 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 logo">
                    <img src={value.logoCompany}/>
                 </div>
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 content">
                   <h3>{value.name}<i className="fa fa-heart-o heart"> </i></h3>

                   <h4>{value.company}</h4>

                   <p><i className="fa fa-map-marker location"></i>{value.location}</p>
                 </div>
                
                 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 frame">
                    <div><i className="fa fa-dollar"></i>{value.salary}</div>
                   <Link to="#"> <p className={value.type}> {value.type} </p></Link>

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

*/}


import React from 'react';
import { Link } from 'react-router';

// import _ from 'lodash';


export default class Recruitments extends React.Component {
  constructor(props){
    super(props);
    this.state={
      recruitments: [
        {
          name: 'Web Developer',
          company: 'KMS company' ,
          logoCompany:"/logo/KMS.png" ,
          location: "Sai Gon" ,
          salary:1000,
          position: 10,
          type:['Fulltime']
        },
       {
          name: 'Mobile Developer',
          company:"VNG Inc." ,
          logoCompany: "/logo/VNG.png" ,
          location:"Sai Gon" ,
          salary:2000,
          position: 10,
          type:['Fulltime', 'Parttime']
        },
       {
          name: "PHP dev",
          company:"Facebook Vietnam",
          logoCompany: "/logo/facebook.png",
          location: "Singapore",
          salary:4000,
          position: 10,
          type:['Fulltime', 'Parttime']
        },
        {
          name:"Data Science" ,
          company:" Google Asia",
          logoCompany: "/logo/google.png",
          location: "Da Nang",
          salary:6000,
          position: 10,
          type:['Internship', 'Parttime']
        },
        {
          name:" Game Developer Unity" ,
          company: "Gameloft",
          logoCompany:"/logo/Gameloft.png" ,
          location:" Bangkok" ,
          salary:9000,
          position: 10,
          type:['Fulltime', 'Parttime']
        },
        {
          name:"Optimize search engine" ,
          company: "Gameloft",
          logoCompany:"/logo/amazon.png" ,
          location:"Ha Noi" ,
          salary:1000,
          position: 10,
          type:['Fulltime', 'Parttime']
        }
 
       ]
    }
  }
  render() {
    var elm = this.state.recruitments.map((value,key)=>{

      var arrType=[];
      for (let i=0;i<value.type.length;i++){
        if (value.type[i]=='Fulltime')
          arrType.push(<span className="job-is ft">{value.type[i]}</span>);
        else if (value.type[i]=='Parttime')
          {arrType.push(<span className="job-is tp">{value.type[i]}</span>);}
        else 
          arrType.push(<span className="job-is fl">{value.type[i]}</span>);
        }

      return(

      <Link to="/job">
      <div className="emply-resume-list row">
        <div className="emply-resume-thumb col-md-2">
          <img src={value.logoCompany} alt="" />
          
        </div>
        
          <div className="emply-resume-info col-md-6">
            <h3><a href="#" title="" style={{color: "#212121", fontWeight: "bold"}}>{value.name}</a>
            <a href="#" className="fa fa-heart-o"></a></h3>
          
           
            <span><i>{value.company}</i></span>
            <span>open {value.position} position</span>
            <span className="location" style={{color: '#666666' , fontSize: 13}}><i className="fa fa-map-marker"></i>{value.location}</span>
            
          </div>
          

           <div className="emply-resume-info col-md-2" style={{marginLeft:55}}>
           <div style={{marginLeft:10,color:'#212121'}}><i className="fa fa-dollar"></i>{value.salary}</div>
            {arrType}
          </div>
          
              
        </div>
      </Link>
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
