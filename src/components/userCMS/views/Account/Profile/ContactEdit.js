import React from 'react';

class ContactEdit extends React.Component {
   
    render() {
        return (
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
                    <div className="col-lg-12">
                    <button type="submit">Edit<i className="fa fa-edit"></i></button>
                    </div>				 					
              </div>
                     
            </form>
        </div>
        );
    }
}
export default ContactEdit;