import React from 'react';

class FeatureCandidateItem extends React.Component {
 
  
  
  render() {

    return (
       <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 candidate-item">
              <div className="frame">
                  <div className="circle">
                  <img src="http://placehold.it/121x121" alt=""/>
                  </div>
                  <div className="name">
                  <div>{this.props.name}</div>
                  <p>{this.props.career}</p>
                  </div>
                  <div className ="view-cv">View CV</div>
              </div>
              
        </div>
      
    )
  }
}

export default FeatureCandidateItem;
