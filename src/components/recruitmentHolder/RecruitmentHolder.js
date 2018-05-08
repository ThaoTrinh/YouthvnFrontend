import React, { Component } from 'react'
import ListRecruitment from './ListRecruitment';
import RecruitmentFilter from './RecruitmentFilter';
import Ranges from '../CandidateComponents/ListCandidate/Ranges.js';
import Slider from '../CandidateComponents/ListCandidate/Sliders.js';
import Pagination from'../CandidateComponents/SingleCandidate/pagination';
import _ from 'lodash';
import request from 'superagent';

export const FILTER_TYPES = {
  FIELDS: 'fields',
  SALARY: 'salary',
  EXPERIENCE: 'experience',
  JOB_TYPE: 'jobType',
  DEGREE: 'degree',
  GENDER: 'gender',
  PROVINCE: 'province',
}
export const CHECKBOX_TYPES = {
  JOB_TYPE: 'jobType',
  GENDER: 'gender',
  DEGREE: 'degree',
  PROVINCE: 'province'
}
export const SORT_TYPES = {
  TRENDING: 'trending',
  NEWEST: 'newest',
  RELEVANT: 'relevant'
}
export const SALARY_VALUES = { MIN: 0, MAX: 50 }
export const EXPERIENCE_VALUES = { MIN: 0, MAX: 10 }
export const PAGE_SIZE = 5;
export const MODES = {
  FILTER: 0,
  SEARCH: 1
}
class RecruitmentHolder extends Component {
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
      <div className="RecruitmentHolder">
        <div className="Panel">
         <h2>Explore Thousand Of Jobs With Just Simple Search...</h2>
           <div className="row search-section">
                        <form>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 search1">
                            <div className="row">
                                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 ">
                                    <input type="search" 
                                            name="keyword " 
                                            className="form-control"
                                            value="Job titles, keywords or Company name" 
                                            placeholder="Nhập từ khóa" />
                                            </div>
                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <span className="fa fa-keyboard-o"></span>
                                </div>
                            </div>
                                                    
                              
                              </div>
                              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 search2">
                                  <div className="row">
                                      
                                  <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 select-zone">
                                    <div name="" className="select" onClick={()=>{this.toggleSelect()}}>
                                      <div className="item-chosen"> {this.state.location} </div>
                                       
                                   </div>   
                                  </div>
                                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                      <span className="fa fa-map-marker"></span>
                                  </div>
                                </div>
                                 </div>
                                  

                         </form>
                        <div className={this.state.selectChosen?"display-select row":"hidden-select row"} >
                             <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                 
                             </div>
                             <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 search-chosen">
                                 <div onClick={()=>{this.setLocation("Saigon")}} className="item"> Saigon</div>
                                 <div onClick={()=>{this.setLocation("Danang")}} className="item"> Danang</div>
                                 <div onClick={()=>{this.setLocation("Hanoi")}} className="item"> Hanoi</div>
                                 <div onClick={()=>{this.setLocation("Others")}} className="item"> Others</div>
                             </div>
               </div>
                                      
               </div>
        </div>
        <div className="container">
          <div className="row">
            
                 <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 filter">
           <div className="search-area">
            <input type="text" name="" id="input" className="form-control Search-Com" placeholder="Search keywords"/>
            <i className="fa fa-search"></i>
          </div>
           <div className="search-area">
            <input type="text" name="" id="input" className="form-control Location-Com" placeholder="Location"/>
            <i className="fa fa-map-marker"></i>
           </div>
           <form className="checkbox Specialism">
             <p className="title">Specialism</p> 
             <br/>
              <div className="input">
               <p><input type="checkbox" value=".Net"/><label>C++</label> </p>
               <p><input type="checkbox" value="C++"/><label>Java</label></p>
               <p><input type="checkbox" value="Java"/><label>.NET</label></p>
               <p><input type="checkbox" value="Java"/><label>PHP</label></p>
               <p><input type="checkbox" value="Java"/><label>Python</label></p>
               <p><input type="checkbox" value="Java"/><label>English</label></p>
              </div>

             
           </form>
            <form className="checkbox Team">
             <p className="title">Category</p> 
             <br/>
              <div className="input">
               <p><input type="checkbox" value=".Net"/><label>Full Time</label> </p>
               <p><input type="checkbox" value="C++"/><label>Part Time</label></p>
               <p><input type="checkbox" value="Java"/><label>Intern</label></p>
               <p><input type="checkbox" value="Java"/><label>Temporary</label></p>
               
              </div>

             
           </form>
             <form className="checkbox Degree">
             <p className="title">Degree</p> 
             <br/>
              <div className="input">
               <p><input type="checkbox" value=".Net"/><label>Balchelor</label> </p>
               <p><input type="checkbox" value="C++"/><label>Post Graduate</label></p>
               <p><input type="checkbox" value="Java"/><label>Intermediate</label></p>
               <p><input type="checkbox" value="Java"/><label>No required</label></p>
               <p><input type="checkbox" value="Java"/><label>Colleague</label></p>
              </div>

             
           </form>
             <form className="checkbox Sex">
             <p className="title">Sex</p> 
             <br/>
              <div className="input">
               <p><input type="checkbox" value=".Net"/><label>Male</label> </p>
               <p><input type="checkbox" value="C++"/><label>Female</label></p>
               <p><input type="checkbox" value="Java"/><label>No required</label></p>
               
              </div>

             
           </form>
           <div className="Ranges">
            <Ranges
            name={"Salary"}
            defaultValue={[0,50000000]}
            min={0}
            max={60}
            allowCross={false}
            step={1}
           />
           </div>
            <div className="Slider">
               <Slider
            name={"Experience"}
            defaultValue={0}
            min={0}
            max={10}
            step={1}
           />
           </div>
         </div>
         <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            {elm}
             <div className="pagination1">
           <Pagination />
           </div>
         </div>
            </div>
          </div>
        
      </div>
    )
  }
}

export default RecruitmentHolder