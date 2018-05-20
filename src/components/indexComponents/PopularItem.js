import React from 'react';
import MainSlider from './MainSlider';
import ListRecruitment from './ListRecruitment';
class PopularItem extends React.Component {
  constructor(props){
    super(props);
   
  }
  componentWillMount () {
    window.scrollTo(0, 0);
  }
  
  render() {
  
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
         <div className="Job-item">
               
          <div className="logo text-center">
            <i className ={this.props.logo}> </i>
          </div>
          <div className="text">
            <h3>{this.props.name}</h3>
            <h5>{this.props.numJob+' Jobs Opened'} </h5>
          </div>
        </div>
      </div>
    )
  }
}

export default PopularItem;
