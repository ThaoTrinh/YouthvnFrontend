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
         location: "Sai Gon" 

       },
      {
         name: 'Mobile Developer',
         company:"VNG Inc." ,
         logoCompany: "/logo/VNG.png" ,
         type:"full-time"  ,
         location:"Sai Gon" ,
       },
      {
         name: "PHP dev",
         company:"Facebook Vietnam",
         logoCompany: "/logo/facebook.png",
         type:"part-time" ,
         location: "Singapore",
       },
       {
         name:"Data Science" ,
         company:" Google Asia",
         logoCompany: "/logo/google.png",
         type: "freelance"  ,
         location: "Da Nang",
       },
       {
         name:" Game Developer Unity" ,
         company: "Gameloft",
         logoCompany:"/logo/Gameloft.png" ,
         type: "part-time"  ,
         location:" Bangkok" ,
       },
       {
         name:"Optimize search engine" ,
         company: "Gameloft",
         logoCompany:"/logo/amazon.png" ,
         type: "part-time"  ,
         location:"Ha Noi" ,
       },


      ]
    }
  }

    
  render() {
    const { recruitments, show } = this.state;
    var elm1 = this.state.recruitments.map((value,key)=>{
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
      <div className="container" style={{ marginBottom: 10 }}>
        <div className="heading">
              <h2>Our Jobs</h2>
              <span>Leading Employers already using job and talent.</span>
              <div className="tabpanel" role="tabpanel">
           
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" >
                        <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Feature Jobs</a>
                      </li>
                      <li role="presentation" >
                        <a href="#tab" aria-controls="tab" role="tab" data-toggle="tab">Recent Jobs</a>
                      </li>
                    </ul>
                  
                   
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active" id="home">
                      <div className="row ">
                      {elm1}
                      </div></div>
                      <div role="tabpanel" className="tab-pane" id="tab">
                        <div className="row ">
                      {elm2}
                      </div>

                      </div>
                    </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default ListRecruitment