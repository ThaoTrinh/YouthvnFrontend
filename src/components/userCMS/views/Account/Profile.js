import React, { Component } from 'react';
const $ = window.jQuery;
class Profile extends Component {
  constructor(props) {
    super(props);
   
  }
  
  render() {
    

    return (
      <div className="Profile">
       <div className="profile-title">
          <h3>My Profile</h3>
          <div className="upload-img-bar">
            <span className="round"><img src="http://placehold.it/140x140" alt="" /><i className="fa fa-times"></i></span>
            <div className="upload-info">
              <a href="#" title="">Browse</a>
              <span>Max file size is 1MB Minimum dimension: 270x210 And Suitable files are .jpg & .png</span>
            </div>
          </div>  
        </div>
        <div className="profile-form-edit">
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
										           <li className="addedTag">Photoshop<span  className="tagRemove">x</span><input type="hidden" name="tags[]" value="Photoshop"/></li>
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
					 						<button type="submit">Update</button>
					 					</div>
					 				</div>
					 			</form>
               </div>
               <div className="social-edit">
					 			<h3>Social Edit</h3>
					 			<form>
					 				<div className="row">
					 					<div className="col-lg-6">
					 						<span className="pf-title">Facebook</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.facebook.com/TeraPlaner" />
					 							<i className="fa fa-facebook"></i>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Twitter</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.twitter.com/TeraPlaner" />
					 							<i className="fa fa-twitter"></i>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Google</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.google-plus.com/TeraPlaner" />
					 							<i className="fa fa-google"></i>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Linkedin</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.Linkedin.com/TeraPlaner" />
					 							<i className="fa fa-linkedin"></i>
					 						</div>
					 					</div>
                   </div>
                   <div className="col-lg-12">
					 						<button type="submit">Update</button>
					 					</div>
					 			</form>
					 		</div>
					 		<div className="contact-edit">
					 			<h3>Contact</h3>
					 			<form>
					 				<div className="row">
					 					<div className="col-lg-4">
					 						<span className="pf-title">Phone Number</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="+90 538 963 58 96" />
					 						</div>
					 					</div>
					 					<div className="col-lg-4">
					 						<span className="pf-title">Email</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="demo@jobhunt.com" />
					 						</div>
					 					</div>
					 					<div className="col-lg-4">
					 						<span className="pf-title">Website</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.jobhun.com" />
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Country</span>
					 						<div className="pf-field">
                       <input type="text" placeholder="America"/>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">City</span>
					 						<div className="pf-field">
                       <input type="text" placeholder="New York"/>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Find On Map</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="Collins Street West, Victoria 8007, Australia." />
					 						</div>
					 					</div>					 					
                   </div>
                   <div className="col-lg-12">
					 						<button type="submit">Update</button>
					 					</div>
					 			</form>
					 		</div>
      </div>
    );
  }
}

export default Profile;
