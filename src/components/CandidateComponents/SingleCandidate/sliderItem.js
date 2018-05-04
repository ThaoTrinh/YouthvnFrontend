import React from 'react';
// import { Link } from 'react-router';
import Item from './item';
// import _ from 'lodash';


import Slider from 'react-slick';

export default class Sliders extends React.Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
     
            <div className="container">
      <div className="col-lg-8 column">
        <div className="padding-left">
          <div className="emply-resume-sec">
              <Slider {...settings}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </Slider>
            </div>
          </div>
        </div>
       </div>
       
      
    );
  }
  }