import React from 'react';
import Information from './information.js';
import DownloadCV from './downloadCV.js';
import About from './about.js';
import CandidateAbout from './candidateAbout.js';
import JobSearch from './jobsearch.js';
export default class Record extends React.Component {
  render() { return (
  //  <section className="overlape">
		
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="cand-single-user">
               <div className="share-bar circle">
				 				<a href="#" title="" className="share-google"><i className="fa fa-google"></i></a><a href="#" title="" className="share-fb"><i className="fa fa-wikipedia-w"></i></a><a href="#" title="" className="fa fa-twitter"><i className="share-twitter"></i></a>
				 			</div>
                <Information/>
                <div className="col-md-3" style={{top: 70}}>
                
                <div>
                <DownloadCV/>
              
                <JobSearch/>
                </div>
                </div>
              </div>
              <About/>
              <CandidateAbout/>
          </div>
        </div>
      </div>
    
 // </section >
  )
  }
};