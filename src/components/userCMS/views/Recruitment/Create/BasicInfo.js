import React from 'react';
import Ranges from '../../../../filter/Ranges.js';
class BasicInfo extends React.Component {
   
    render() {
        return (
            <div className="Basic-info">
            <h3>Job Information</h3>
             <form>
                <div className="row">
                    <div className="col-lg-6">
                        <span className="pf-title">Job title</span>
                        <div className="pf-field">
                            <input type="text" placeholder="Senior Web Developer" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <span className="pf-title">Position</span>
                        <div className="pf-field">
                            <input type="text" placeholder="Project Manager" />
                        </div>
                    </div>
                
                    <div className="col-lg-6">
                        <span className="pf-title">Number of positions</span>
                        <div className="pf-field">
                            <input type="text" placeholder="2" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <span className="pf-title">Type of job</span>
                        <div className="pf-field">
                            <input type="text" placeholder="Fulltime" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <span className="pf-title">Description of job</span>
                        <div className="pf-field">
                            <textarea>Spent several years working on sheep on Wall Street Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed severalnew methods for working with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer ollaborates with Eventions Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present</textarea>
                        </div>
                    </div>               
                    <div className="col-lg-6">
                        <span className="pf-title">Province/City</span>
                        <div className="pf-field">
                        <input type="text" placeholder="Saigon/Hanoi/Danang" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <span className="pf-title">District</span>					 						
                        <div className="pf-field">
                            <div className="pf-field">
                            <input type="text" placeholder="Thu Duc Dist." />
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                        <span className="pf-title">Ward</span>
                        <div className="pf-field">
                        <input type="text" placeholder="Ward 25" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <span className="pf-title">Street</span>
                        <div className="pf-field">
                        <input type="text" placeholder="Pasteur" />
                        </div>
                    </div>
                    <div className="col-lg-6 salary">
                        <Ranges
                        name={"Salary"}
                        defaultValue={[0,5000]}
                        min={0}
                        max={5000}
                        allowCross={false}
                        step={1}
                       />
                    </div>
                    
                </div>
            </form>
          </div>
        );
    }
}
export default BasicInfo;