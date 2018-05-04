import React from 'react';
import Search from './search.js';
import CheckBox from './checkbox.js';
import CheckBox3 from '../component1/Checkboxes.js';
import Search3 from '../component1/SearchBar.js';
import Select3 from '../component1/SelectBar.js';
import Ranges from '../component1/Ranges.js';
import Slider from '../component1/Sliders.js';

export default class SideNav extends React.Component{
  render(){
    return(
      <aside className="col-lg-4 column border-right">
        <div className="widget">
          <Search3
            placeholder="Search keyword"
          />  
          <Select3
            groupName="Field"
            placeholder="Choose field"
            value={["sjfhjsd","djhfjsd"]}
          />
          <Select3
            groupName="Major"
            placeholder="Choose major"
            value={["sjfhjsd","djhfjsd"]}
          />
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
          <CheckBox3
          name="Specialism"
          groupName="Specialism"
          valueArr={["Accountancy","Banking","sbswhdjkbhfsdj","fhjagdfs"]}
          />
          <CheckBox3
          name="jahfsdj"
          groupName="jahfsdj"
          valueArr={["Accountancy","Banking","sbswhdjkbhfsdj","fhjagdfs"]}
          />
          <CheckBox3
          name="fjkdhf"
          groupName="fjkdhf"
          valueArr={["Accountancy","Banking","sbswhdjkbhfsdj","fhjagdfs"]}
          />

        </div>
      </aside>
    );    
  }
}