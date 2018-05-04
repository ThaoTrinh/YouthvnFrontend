import React from 'react';
import Headers from './header.js'
import Record from './record.js'
import SaveResume from './saveResume.js';
import Footer from './footer.js';
import ListItem from './ListItem.js';

export default class CandidateSingle extends React.Component {
  render() { return (
    <section className="overlape">
      <div className="block no-padding">
        <div className="container fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <Headers />
                <SaveResume/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <Record/>
      
      <div className="container"> 
          <strong style={{fontSize: 20,color: '#202020'}}>User information</strong>
            <ListItem />
          </div>    
      </div>

        

    <footer>
        <Footer/>
    </footer>
    </section>
  );
  
  }
}