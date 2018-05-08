import React, { Component } from 'react'
import OrganizationFilter from './OrganizationFilter';
import ListOrganization from './ListOrganization';
import _ from 'lodash';
import request from 'superagent';
import Pagination from'../CandidateComponents/SingleCandidate/pagination';

class OrganizationHolder extends Component {
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
       description:"4 Open PositionKing LLCAccountancy, Human Resources Toronto, OntarioThe Heavy Equipment / Grader Operator is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer",
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
               <i className="fa fa-eye" style={{fontSize: 12}}>{" "+ value.view +"view"} </i>
               <p className="hour" style={{fontSize:12}}>{value.hour+' hours ago'}</p>
             </div>
             <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 content">
               <div className="companyName">{value.name}</div>
               <p>{value.field}</p>
               <span><i className="fa fa-map-marker"></i>{value.location}</span>
               <p className="description">{value.description}</p>
             </div>
             <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 empty-position">
               <h3>{value.position + ' open positions'}</h3>
             </div>
           </div>

       )
     })
    
    return (
      <div >
       <div className="Panel"></div>
       <div className="row container">
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
             <p className="title">Team Size</p> 
             <br/>
              <div className="input">
               <p><input type="checkbox" value=".Net"/><label>1-10</label> </p>
               <p><input type="checkbox" value="C++"/><label>100-200</label></p>
               <p><input type="checkbox" value="Java"/><label>200-300</label></p>
               <p><input type="checkbox" value="Java"/><label>300-400</label></p>
               <p><input type="checkbox" value="Java"/><label>400-500</label></p>
              </div>

             
           </form>
           <div className="type">
           <label>Type of Organization</label>
             <div className="search2">
                
                    
                
                  <div name="" className="select" onClick={()=>{this.toggleSelect()}}>
                    <div className="item-chosen"> {this.state.location} </div>
                    <span className="fa fa-building"></span>
                 </div>   
              
             
              </div>
               <div className={this.state.selectChosen?"display-select row":"hidden-select row"} >
                   <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                       
                   </div>
                   <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 search-chosen">
                       <div onClick={()=>{this.setLocation("University")}} className="item"> University</div>
                       <div onClick={()=>{this.setLocation("Business")}} className="item"> Business</div>
                       <div onClick={()=>{this.setLocation("Others")}} className="item"> Others</div>
                      
                   </div>
               </div>
          </div>
         </div>
         <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 Company-list">
           {elm}
           <div className="pagination1">
           <Pagination />
           </div>
         </div>
       </div>
      </div>
    )
  }
}

export default OrganizationHolder;