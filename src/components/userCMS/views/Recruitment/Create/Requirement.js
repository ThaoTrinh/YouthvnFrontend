import React from 'react';
import Ranges from '../../../../filter/Ranges.js';
class Requirement extends React.Component {
   
    render() {
        return (
            <div className="Requirement">
                <h3>Requirement</h3>
                 <form>
                    <div className="row">
                        <div className="col-lg-6">
                            <span className="pf-title">Area</span>
                            <div className="pf-field">
                                <input type="text" placeholder="IT" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="pf-title">Specialization</span>
                            <div className="pf-field">
                                <input type="text" placeholder="Computer Science" />
                            </div>
                        </div>
                    
                        <div className="col-lg-6">
                            <span className="pf-title">Sex</span>
                            <div className="pf-field">
                                <input type="text" placeholder="Man" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="pf-title">Degree</span>
                            <div className="pf-field">
                                <input type="text" placeholder="Balchelor" />
                            </div>
                        </div>
                        <div className="col-lg-6 Experience" >
                            <Ranges
                            name={"Experience"}
                            defaultValue={[18,50]}
                            min={18}
                            max={50}
                            allowCross={false}
                            step={1}
                           />
                        </div>
                        <div className="col-lg-6 Age" >
                            <Ranges
                            name={"Age"}
                            defaultValue={[18,50]}
                            min={18}
                            max={50}
                            allowCross={false}
                            step={1}
                           />
                        </div>
                        <div className="col-lg-6">
                            <span className="pf-title">Language</span>
                            <div className="pf-field">
                                <input type="text" placeholder="English" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="pf-title">Skill</span>
                            <div className="pf-field">
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                       
                        
                    </div>
                </form>
              </div>
        );
    }
}
export default Requirement;