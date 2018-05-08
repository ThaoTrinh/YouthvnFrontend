import React from 'react';

export default class Information extends React.Component {
  render() { return (
    <div className="can-detail-s" >
      <div className="cst"><img src="http://placehold.it/145x145" alt="" /></div>
      <h3>David CARLOS</h3>
      <span><i>UX / UI Designer</i></span>
      <p>creativelayers088@gmail.com</p>
      <p>Member Since, 2017</p>
      <p><i className="la la-map-marker"></i>Istanbul / Turkey</p>
    </div>
  );
  }
}