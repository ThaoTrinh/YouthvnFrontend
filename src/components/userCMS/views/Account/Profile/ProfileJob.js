import React from 'react';

class ProfileJob extends React.Component {
   
    render() {
        return (
            <div className="ProfileJob">
            <h3>My Job</h3>
              <form>
                <div className="row">
                        <div className="col-lg-6">
                            <span className="pf-title">Full Name</span>
                            <div className="pf-field">
                                <input type="text" placeholder="Ali TUFAN" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="pf-title">Job Title</span>
                            <div className="pf-field">
                                <input type="text" placeholder="UX / UI Designer" />
                            </div>
                        </div>
                    
                        <div className="col-lg-6">
                            <span className="pf-title">Experience</span>
                            <div className="pf-field">
                                <input type="text" placeholder="2-4 years" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="pf-title">Age</span>
                            <div className="pf-field">
                                <input type="text" placeholder="20 years old" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="pf-title">Education Levels</span>
                            <div className="pf-field">
                              <input type="text" placeholder="Diploma" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="pf-title">Languages</span>					 						
                            <div className="pf-field">
                                <div className="pf-field">
                                  <input type="text" placeholder="English" />
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
export default ProfileJob;