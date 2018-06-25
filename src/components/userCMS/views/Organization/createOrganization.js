import React,{Component} from 'react';


class CreateOrganization extends Component{


    render(){
        return(
        <div className="Create Organization">
        <h3>Basic Information</h3>
        <div className="profile-title">
          <div className="upload-img-bar">
            <span className="round"><img src="http://placehold.it/140x140" alt="" /><i className="fa fa-times"></i></span>
            <div className="upload-info">
                <a href="#" title="">Logo Image</a>
                <span>Max file size is 1MB Minimum dimension: 270x210 And Suitable files are .jpg & .png</span>
            </div>
          </div>  
        </div>
            <div className="Create-Organization">
                
                 <form>
                    <div className="row">
                        <div className="col-lg-6">
                            <span className="pf-title">Type of Organization</span>
                            <div className="pf-field">
                                <input type="text" placeholder="University" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="pf-title">Name of Organization</span>
                            <div className="pf-field">
                                <input type="text" placeholder="Bach Khoa University" />
                            </div>
                        </div>
                    
                        <div className="col-lg-6">
                            <span className="pf-title">Area</span>
                            <div className="pf-field">
                                <input type="text" placeholder="IT outsource" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="pf-title">Email</span>
                            <div className="pf-field">
                                <input type="text" placeholder="BKU@hcmut.edu.vn" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="pf-title">Telephone</span>
                            <div className="pf-field">
                               <input type="text" placeholder="0165746342" />
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
                            <span className="pf-title">Slogan</span>					 						
                            <div className="pf-field">
                                <div className="pf-field">
                                  <input type="text" placeholder="Together we are one" />
                                </div>
                           </div>
                        </div>
                        <div className="col-lg-12">
                            <span className="pf-title">Description of organization</span>
                            <div className="pf-field">
                                <textarea>Spent several years working on sheep on Wall Street Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed severalnew methods for working with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer ollaborates with Eventions Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present</textarea>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <span className="pf-title">Destiny</span>
                            <div className="pf-field">
                                <textarea>Spent several years working on sheep on Wall Street Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed severalnew methods for working with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer ollaborates with Eventions Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present</textarea>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <span className="pf-title">Vision</span>
                            <div className="pf-field">
                                <textarea>Spent several years working on sheep on Wall Street Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed severalnew methods for working with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer ollaborates with Eventions Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present</textarea>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <span className="pf-title">Strength</span>
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
                       
                        <div className="col-lg-12">
                            <span className="pf-title">Tag</span>
                            <div className="pf-field">
                            <input type="text" placeholder="Pasteur" />
                            </div>
                        </div>
                        <div style={{float: "left" ,marginBottom:50, marginTop:50}}>
                                <div className="col-lg-6">
                                    <button type="submit">Create</button>
                                </div>
                                <div className="col-lg-6">
                                    <button type="submit">Refresh</button>
                                </div>
                        </div>
                    </div>
                </form>
              </div>
            </div>
        )
    }
}
export default CreateOrganization;