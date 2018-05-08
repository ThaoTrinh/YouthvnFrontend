import React from 'react';

export default class Information extends React.Component {
  render() { return (
    <div><div className="can-detail-s" >
      <div className="cst"><img src="http://placehold.it/145x145" alt="" /></div>
      <h3 style={{marginBottom: 0}}>David CARLOS
        <a href="#" className="fa fa-pencil" style={{marginTop:10}}></a>
      </h3>
      <span style={{marginTop:0}}><i>UX / UI Designer</i> </span>
      <span style={{marginTop:0}}>at Atract Solutions</span>
      <p>creativelayers088@gmail.com</p>
      <p>Member Since, 2017</p>
      <p><i className="fa fa-map-marker"></i>Istanbul / Turkey</p>
    </div>
   
   </div>
  );
  }
}