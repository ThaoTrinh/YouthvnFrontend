import React from 'react';

class SocialEdit extends React.Component {
   
    render() {
        return (
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
                    <div className="col-lg-12">
                    <button type="submit">Edit<i className="fa fa-edit"></i></button>
                    </div>
                </div>
                   
            </form>
        </div>
        );
    }
}
export default SocialEdit;