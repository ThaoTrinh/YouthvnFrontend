import React from 'react';
import Select from './Select';
class ProfileFormEdit extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstName:"Ali",
            lastName:"TUFAN",
            dOB:"12/2/1998",
            Age:20,
            educationLevel:"",
            Languages:"English",
            Categories:[],
            Description:""
        }
    }
    render() {
        return (
            <div className="profile-form-edit">
              <form>
                <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <span className="pf-title">First Name</span>
                            <div className="pf-field">
                                <input type="text" placeholder="Ali" value="Ali" readOnly/>
                                  
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <span className="pf-title">Last Name</span>
                            <div className="pf-field">
                                <input type="text" placeholder="TUFAN" value="Tufan" readOnly />
                                
                            </div>
                        </div>
                    
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 DoB">
                            <span className="pf-title">Date of Birth</span>
                            <div className="pf-field">
                                <input type="date" name="birthday" placeholder="12/2/1998" value="12/2/1998" readOnly />
                                
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 Age">
                            <span className="pf-title">Age</span>
                            <div className="pf-field">
                                <input type="text" placeholder="20 years old" value="20" readOnly />
                                
                            </div>
                        </div>
                        <div className="col-lg-12 EducationLevel">
                            <span className="pf-title">Education Levels</span>
                            <div className="pf-field">
                              <Select selection={["Balchelor","Undergraduate","PoD"]} icon={"fa fa-graduation-cap"}/>
                            </div>
                        </div>
                        <div className="col-lg-6 Languages">
                            <span className="pf-title">Languages</span>					 						
                            <div className="pf-field">
                                <div className="pf-field">
                                  <input type="text" placeholder="English" value="English" readOnly/>
                                  
                                </div>
                           </div>
                        </div>
                        
                        
                        <div className="col-lg-12">
                            <span className="pf-title">Categories</span>					 						
                            <div className="pf-field no-margin">
                                <ul className="tags">
                                  <li className="addedTag">Photoshop<span className="tagRemove">x</span><input type="hidden" name="tags[]" value="Photoshop"/></li>
                                  <li className="addedTag">Digital & Creative<span  className="tagRemove">x</span><input type="hidden" name="tags[]" value="Digital"/></li>
                                  <li className="addedTag">Agency<span  className="tagRemove">x</span><input type="hidden" name="tags[]" value="Agency"/></li>
                                   
                               </ul>
                           </div>
                        </div>
                        <div className="col-lg-12">
                            <span className="pf-title">Description</span>
                            <div className="pf-field">
                                <textarea>Spent several years working on sheep on Wall Street Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed severalnew methods for working with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer ollaborates with Eventions Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present</textarea>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <button type="submit">Edit<i className="fa fa-edit"></i></button>
                        </div>
                    </div>
                </form>
          </div>
        );
    }
}
export default ProfileFormEdit;