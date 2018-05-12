import React, { Component } from 'react'
import { Link } from 'react-router';
import ListItem from '../share/ListItem';
import request from 'superagent';
import _ from 'lodash';
import moment from 'moment';
import Spinner from 'react-spinkit';
import { SALARY_VALUES, EXPERIENCE_VALUES, SORT_TYPES } from '../recruitmentHolder/RecruitmentHolder';
import LazyLoad from 'react-lazyload';

const FULL_SIZE = 10;

class ListRecruitment extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ],
    
    recentTabActive:false,
    featureTabActive:false
    }
    }
  
  activateRecentTab =()=>{
    if (!this.state.recentTabActive){
      this.setState({recentTabActive:true,featureTabActive:false});
    }
  }
   activateFeatureTab =()=>{
    if (!this.state.featureTabActive){
      this.setState({recentTabActive:false,featureTabActive:true});
    }
  } 
  render() {
    
    var elm1 = this.state.recruitments.map((value,key)=>{
      return(
           <div key={key} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 recruit-item">
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
     var elm2 = this.state.recruitments.reverse().map((value,key)=>{
      return(
           <div key={key} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 recruit-item">
               <div className="row">
                 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 logo">
                    <img src={value.logoCompany}/>
                 </div>
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 content">
                   <h3>{value.name}</h3>
                   <h4>{value.company}</h4>
                   <p><i className="fa fa-map-marker"></i>{value.location}</p>
                 </div>
                
                 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 frame ">
                    <i className="fa fa-heart-o heart"> </i>
                    <p className={value.type}> {value.type} </p>
                 </div>
               </div>
             </div>
        )
     
    })
    return (
      <div className="Ourjob container" style={{ marginBottom: 10 }}>
        <div className="heading">
              <h2 className="titlejob">Our Jobs</h2>
           

        </div>
         <div className ="tab-panel row">
         
           <div className={this.state.featureTabActive?"col-xs-6 col-sm-6 col-md-6 col-lg-6 Featurejob-active":"col-xs-6 col-sm-6 col-md-6 col-lg-6 Featurejob"} onClick={()=>{this.activateFeatureTab()}}>Feature Jobs</div>
           <div className={this.state.recentTabActive?"col-xs-6 col-sm-6 col-md-6 col-lg-6 Recentjob-active":"col-xs-6 col-sm-6 col-md-6 col-lg-6 Recentjob"} onClick={()=>{this.activateRecentTab()}}>Recent Jobs</div>
       
        </div>
        <div className="joblist">
          {elm1}
        </div>
      </div>
    )
  }
}

export default ListRecruitment