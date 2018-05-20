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
          
           <div style={{marginTop:50}}>
              <CheckBox3
                valueArr={['Post-Graduate','Graduate','Under-Graduate','P.D','Ohther']}
                groupName={'Degree'}
                name={'Degree'}
              />
            </div>
           
             
           <div>
              <CheckBox3
                valueArr={['Male','Female','Other']}
                groupName={'Gender'}
                name={'Gender'}
              />
            </div>
           
           <div>
            <Ranges
            name={"Age"}
            defaultValue={[0,60]}
            min={0}
            max={60}
            allowCross={false}
            step={1}
           />
           </div>
           <hr/>
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