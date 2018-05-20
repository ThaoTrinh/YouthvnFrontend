import React from 'react';

class FeatureCandidateItem extends React.Component {
 
  
  
  render() {

    return (
       <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 candidate-item">
                  <div className="circle">
                 <img src="http://placehold.it/121x121" alt=""/>
                  </div>
                  <div className="info">
                  <div>{this.props.name}</div>
                  <p>{this.props.career}</p>
                  <div className ="view-cv">View CV</div>
                  </div>
        </div>
      
    )
  }
}

export default FeatureCandidateItem;
