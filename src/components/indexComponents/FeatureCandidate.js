import React from 'react';


class FeatureCandidate extends React.Component {
  constructor(props){
    super(props);
    this.state ={
     candidate : [
      {
       name:"Amanda Cook",
       career:"Developer",

      },
      {
       name:"Ibrahim Agay",
       career:"Senior UI/UX Developer",
       
      },
      {
       name:"Ali Tufan",
       career:"IT outsource Company",
       
      },
      {
       name:"Juan Suso",
       career:"English Teacher",
       
      },


     ]
    }
  }
  
  
  render() {
    var elm = this.state.candidate.map((value,key)=>{
       return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 candidate-item">
                  <div className="circle">
                 <img src="http://placehold.it/121x121" alt=""/>
                  </div>
                  <div className="info">
                  <div>{value.name}</div>
                  <p>{value.career}</p>
                  </div>
                </div>
            )
    })
    return (
      <div className ="FeatureCandidate">
            
      
        <h2>Feature Candidate </h2>
        <p>Every single one of our jobs has some kind of flexibility option</p>
          <div className="row candidate-list container">
                
                {elm}
           </div>
                
      </div>
      
    )
  }
}

export default FeatureCandidate;
