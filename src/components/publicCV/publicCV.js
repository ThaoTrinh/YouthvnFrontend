import React from 'react';
import Headers from './header.js'
import Record from './record.js'
import SaveResume from './saveResume.js';
import Footer from './footer.js';
import ListItem from './ListItem.js';

export default class PublicCV extends React.Component {
  render() { return (
    <div className="overlape">
      <div className="block no-padding">
        <div className="inner-header" style={{paddingBottom:0, paddingTop:150}}>
          <SaveResume/>
        </div>
      </div>
      <div>
      <Record/>
      </div>
    </div>
  );
  
  }
}