import React from 'react';
import {Link} from 'react-router';
class RecruitmentItem extends React.Component {
 
  componentWillMount () {
    window.scrollTo(0, 0);
  }
  
  render() {
  
    return (
      <div key={this.props.key} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 recruit-item">
               <div className="row">
                 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 logo">
                    <img src={this.props.src}/>
                 </div>
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 content">
                   <h3>{this.props.name}<i className="fa fa-heart-o heart"> </i></h3>

                   <h4>{this.props.company}</h4>

                   <p><i className="fa fa-map-marker location"></i>{this.props.location}</p>
                 </div>
                
                 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 frame">
                    <div><i className="fa fa-dollar"></i>{this.props.salary}</div>
                   <Link to="#"> <p className={this.props.type}> {this.props.type} </p></Link>

                 </div>
               </div>
      </div>
    )
  }
}

export default RecruitmentItem;
