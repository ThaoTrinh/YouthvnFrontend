import React from 'react';


import CheckBox3 from '../CandidateComponents/ListCandidate/Checkboxes.js';
import Search3 from '../CandidateComponents/ListCandidate/SearchBar.js';
import Select3 from '../CandidateComponents/ListCandidate/SelectBar.js';
import Ranges from '../CandidateComponents/ListCandidate/Ranges.js';
import Slider from '../CandidateComponents/ListCandidate/Sliders.js';


export default class ChooseOrganization extends React.Component{
  render(){
    return(
      <div>
        
          <div className="filter">
           <div className="search-area">
            <input type="text" name="" id="input" className="form-control Search-Com" placeholder="Search keywords"/>
            <i className="fa fa-search"></i>
          </div>
           <div className="search-area">
            <input type="text" name="" id="input" className="form-control Search-Com" placeholder="Locate"/>
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
             <p className="title">Team Size</p> 
             <br/>
              <div className="input">
               <p><input type="checkbox"/><label>1-10</label> </p>
               <p><input type="checkbox" /><label>10-100</label></p>
               <p><input type="checkbox"/><label>100-200</label></p>
               <p><input type="checkbox" /><label>200-300</label></p>
               <p><input type="checkbox" /><label>300-400</label></p>
               <p><input type="checkbox" /><label>400-500</label></p>
               
              </div>

             
           </form>

           
            
         </div>
            

            
   </div>
    );    
  }
}






