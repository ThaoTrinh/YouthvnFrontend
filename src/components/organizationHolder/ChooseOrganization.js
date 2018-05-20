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
            <input type="text" name="" id="input" className="form-control Search-Com" placeholder="Location"/>
            <i className="fa fa-map-marker"></i>
          </div>
             <div style={{marginTop:50}}>
              <CheckBox3
                valueArr={['.Net','C++','Java','PHP','Python']}
                groupName={'Specialism'}
                name={'Specialism'}
              />
            </div>
           
             
           <div>
              <CheckBox3
                valueArr={['1-10','10-100','100-200','200-300','300-400','400-500']}
                groupName={'Team Size'}
                name={'Team Size'}
              />
            </div>
           
            
         </div>
            

            
   </div>
    );    
  }
}






