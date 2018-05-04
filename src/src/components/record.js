import React from 'react';
import Information from './information.js';
import DownloadCV from './downloadCV.js';
import About from './about.js';
import CandidateAbout from './candidateAbout.js';
import JobSearch from './jobsearch.js';
export default class Record extends React.Component {
  render() { return (
  //  <section className="overlape">
		<div className="block remove-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="cand-single-user">
            <div class="share-bar circle">
				 				<a href="#" title="" class="share-google"><i class="la la-google"></i></a><a href="#" title="" class="share-fb"><i class="la la-facebook-square"></i></a><a href="#" title="" class="share-twitter"><i class="la la-twitter"></i></a>
				 			</div>
                <Information/>
                <div className="col-md-3" style={{top: 70}}>
                
                <DownloadCV/>
              
                <JobSearch/>
                
                </div>
              </div>
              <About/>
              <CandidateAbout/>
          </div>
        </div>
      </div>
    </div>
 // </section >
  )
  }
};