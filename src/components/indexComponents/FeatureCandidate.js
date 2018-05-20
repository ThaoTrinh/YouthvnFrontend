import React from 'react';
import FeatureCandidateItem from './FeatureCandidateItem'
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
       
        <FeatureCandidateItem name ={value.name} career ={value.career} />
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
