import React from 'react';
import { Link, browserHistory } from 'react-router';
import swal from 'sweetalert';
import moment from 'moment';

const $ = window.jQuery;

class CompanyName extends React.Component {
 

  render() {
     moment.locale('vi');
    
    return (
    <section className="job-single-overlape">
        <div className="job-single-block job-single-no-padding">
            <div data-velocity="-.1"
                style={{ background: 'url(' + this.props.companyImage + ') repeat scroll 50% 422.28px transparent' }}
                className="job-single-parallax scrolly-invisible job-single-no-parallax"></div>
            <div className="job-single-container job-single-fluid">
                <div className="row no-gape">
                    <div className="col-lg-12">
                        <div className="inner-header">
                            <h3>{this.props.companyName}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}

export default CompanyName;
