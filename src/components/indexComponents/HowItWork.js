import React from 'react';
import MainSlider from './MainSlider';
import ListRecruitment from './ListRecruitment';
class HowItWork extends React.Component {
  constructor(props){
    super(props);
    this.state ={
     
    }
  }
  
  
  render() {
    
    return (
      <div className ="container HowItWork">
        <section>
    <div className="block remove-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h2>How It Works</h2>
              <span>Each month, more than 7 million Jobhunt turn to website in their search for work, making over <br />160,000 applications every day.
              </span>
            </div>
            <div className="how-to-sec style2">
              <div className="how-to">
                <span className="how-icon"><i className="fa fa-user"></i></span>
                <h3>Register an account</h3>
                <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
              </div>
              <div className="how-to">
                <span className="how-icon"><i className="fa fa-file-archive-o"></i></span>
                <h3>Specify & search your job</h3>
                <p>Browse profiles, reviews, and proposals then interview top candidates. </p>
              </div>
              <div className="how-to">
                <span className="how-icon"><i className="fa fa-list"></i></span>
                <h3>Apply for job</h3>
                <p>Use the Upwork platform to chat, share files, and collaborate from your desktop or on the go.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      </div>
    )
  }
}

export default HowItWork;
