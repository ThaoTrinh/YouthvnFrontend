import React from 'react';
import CheckBox3 from '../filter/Checkboxes.js';
import Search3 from '../filter/SearchBar.js';
import Select3 from '../filter/SelectBar.js';
import Ranges from '../filter/Ranges.js';
import Slider from '../filter/Sliders.js';


export default class Recruitmentfilter extends React.Component{
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
          <div style={{marginTop:50}}>
              <CheckBox3
                valueArr={['.Net','C++','Java','PHP','Python']}
                groupName={'Specialism'}
                name={'Specialism'}
              />
            </div>
           
             
           <div>
              <CheckBox3
                valueArr={['Fulltime','Parttime','Internship','Temporary']}
                groupName={'Category'}
                name={'Category'}
              />
            </div>

          <div style={{marginTop:50}}>
          <Ranges
            name={"Salary"}
            defaultValue={[0,500000000]}
            min={0}
            max={500000000}
            allowCross={false}
            step={1}
           />
           </div>
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