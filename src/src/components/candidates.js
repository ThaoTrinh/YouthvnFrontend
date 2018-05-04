import React from 'react';
import CandidateSingle from './components/candidate_single.js';

export default class Candidates extends React.Component{
  render(){
    return(
      <section>
        <div>
          <CandidateSingle />
        </div>
      </section>
    );
  }
}
