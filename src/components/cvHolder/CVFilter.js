import React from 'react';


import CheckBox3 from '../filter/Checkboxes.js';
import Search3 from '../filter/SearchBar.js';
import Select3 from '../filter/SelectBar.js';
import Ranges from '../filter/Ranges.js';
import Slider from '../filter/Sliders.js';

export default class CVfilter extends React.Component{
  render(){
    return(
      
    
          <div className="filter">
            <div>
              <Search3
                placeholder={"Search Keywords"}
                icon={"fa fa-search"}
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