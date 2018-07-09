import React,{Component} from 'react';
import Ranges from '../../../../filter/Ranges.js';
import BasicInfo from './BasicInfo';
import Requirement from './Requirement';
import Benefit from './Benefit';
import File from './File';
class RecruitmentForm extends Component{


    render(){
        return(
        <div className="RecruitmentForm">
           <BasicInfo/>
           <Requirement />
           <Benefit />
           <File />      
           <div style={{float: "left" ,marginBottom:50, marginTop:50}}>
                                <div className="col-lg-6">
                                    <button type="submit">Create</button>
                                </div>
                                <div className="col-lg-6">
                                    <button type="submit">Refresh</button>
                                </div>
            </div>
        </div>
        )
    }
}
export default RecruitmentForm;