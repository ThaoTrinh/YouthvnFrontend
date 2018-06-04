import React from 'react';
import $ from 'jquery'



class CompanyInfoCard extends React.Component {
    constructor(props) {
        super(props);
               
    }

    render() {
       const {companyName,companyAddress,link,phoneNumber,email,companyAvatar}= this.props;
        return (
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 column CompanyInfoCard">
            <div className="job-single-head style2">
                <div className="job-thumb"> <img src={companyAvatar} alt="" /> </div>
                <div className="job-head-info">
                    <h4>{companyName}</h4>
                    <span><p>{companyAddress}</p></span>
                    <p><i className="fa fa-unlink"></i>{link}</p>
                    <p><i className="fa fa-phone"></i>{phoneNumber}</p>
                    <p><i className="fa fa-envelope-o"></i>{email}</p>
                </div>
                <a href="#" title="" className="viewall-jobs">View all Jobs</a>
                <a href="#" title="" className="viewall-jobs hidden-lg hidden-md"> <i className="fa fa-paper-plane"></i> Apply for job</a>
            </div>
        </div>
        );
    }
}
export default CompanyInfoCard;