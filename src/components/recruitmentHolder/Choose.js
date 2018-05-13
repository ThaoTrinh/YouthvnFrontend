import React from 'react';


import CheckBox3 from '../CandidateComponents/ListCandidate/Checkboxes.js';
import Search3 from '../CandidateComponents/ListCandidate/SearchBar.js';
import Select3 from '../CandidateComponents/ListCandidate/SelectBar.js';
import Ranges from '../CandidateComponents/ListCandidate/Ranges.js';
import Slider from '../CandidateComponents/ListCandidate/Sliders.js';


export default class Choose extends React.Component{
  render(){
    return(
      
        
          <div className="filter">
           <div className="search-area">
            <input type="text" name="" id="input" className="form-control Search-Com" placeholder="Search keywords"/>
            <i className="fa fa-search"></i>
          </div>
           <div className="search-area">
            <input type="text" name="" id="input" className="form-control Search-Com" placeholder="Location"/>
            <i className="fa fa-map-marker"></i>
          </div>
           <form className="checkbox Specialism">
             <p className="title">Specialism</p> 
             <br/>
              <div className="input">
               <p><input type="checkbox" value=".Net"/><label>.NET</label> </p>
               <p><input type="checkbox" value="C++"/><label>C++</label></p>
               <p><input type="checkbox" value="Java"/><label>Java</label></p>
               <p><input type="checkbox" value="PHP"/><label>PHP</label></p>
               <p><input type="checkbox" value="Python"/><label>Python</label></p>
               
              </div>

             
           </form>
           <form className="checkbox Team">
             <p className="title">Category</p> 
             <br/>
              <div className="input">
               <p><input type="checkbox"/><label>FullTime</label> </p>
               <p><input type="checkbox"/><label>PartTime</label></p>
               <p><input type="checkbox" /><label>Intern</label></p>
               <p><input type="checkbox" /><label>Temporary</label></p>
             
               
              </div>

             
           </form>
            <Ranges
            name={"Salary"}
            defaultValue={[0,500000000]}
            min={0}
            max={500000000}
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