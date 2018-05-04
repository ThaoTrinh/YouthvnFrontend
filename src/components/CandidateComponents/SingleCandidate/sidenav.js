import React from 'react';
import Search from './search.js';
import CheckBox from './checkbox.js';
import CheckBox3 from '../ListCandidate/Checkboxes.js';
import Search3 from '../ListCandidate/SearchBar.js';
import Select3 from '../ListCandidate/SelectBar.js';
import Ranges from '../ListCandidate/Ranges.js';
import Slider from '../ListCandidate/Sliders.js';

export default class SideNav extends React.Component{
  render(){
    return(
      
        
          <div className="filter">
           <div className="search-area">
            <input type="text" name="" id="input" className="form-control Search-Com" placeholder="Search keywords"/>
            <i className="fa fa-search"></i>
          </div>
           <div className="search-area">
            <input type="text" name="" id="input" className="form-control Search-Com" placeholder="Field"/>
            <i className="fa fa-edit"></i>
          </div>
          <div className="search-area">
            <input type="text" name="" id="input" className="form-control Search-Com" placeholder="Speciality"/>
            <i className="fa fa-graduation-cap"></i>
          </div>
           <form className="checkbox Specialism">
             <p className="title">Degree</p> 
             <br/>
              <div className="input">
               <p><input type="checkbox" value=".Net"/><label>Post-Graduate</label> </p>
               <p><input type="checkbox" value="C++"/><label>Graduate</label></p>
               <p><input type="checkbox" value="Java"/><label>Under-Graduate</label></p>
               <p><input type="checkbox" value="Java"/><label>P.D</label></p>
               <p><input type="checkbox" value="Java"/><label>Others</label></p>
               
              </div>

             
           </form>
           <form className="checkbox Team">
             <p className="title">Gender</p> 
             <br/>
              <div className="input">
               <p><input type="checkbox" value=".Net"/><label>Male</label> </p>
               <p><input type="checkbox" value="C++"/><label>Female</label></p>
               <p><input type="checkbox" value="Java"/><label>Others</label></p>
             
               
              </div>

             
           </form>
            <Ranges
            name={"Age"}
            defaultValue={[0,60]}
            min={0}
            max={60}
            allowCross={false}
            step={1}
           />
            <Slider
            name={"Experience"}
            defaultValue={0}
            min={0}
            max={10}
            step={1}
           />
         </div>
         
         
          
          

        
   
    );    
  }
}