import React from 'react';
import { Link, browserHistory } from 'react-router';
import swal from 'sweetalert';
import moment from 'moment';
import { MoneyToNumber, formattingItemArr, formattingMoney } from '../../commons/share';
import { ACCEPTED_TYPES, INVITATION_TYPES } from '../../commons/constants';
import Searchkeywords from './Searchkeywords'
import Selectlocation from './Selectlocation'
const $ = window.jQuery;

class Slider extends React.Component {
  constructor(props){
    super(props);
   
  }
  
  render() {
    
    moment.locale('vi');
    
    return (
      <div className="main-carousel">
      <div id="carousel-id" className="carousel slide" data-ride="carousel">


         <div className="container">
              <div className="carousel-caption">
                <h1>The Easiest Way to Get Your Job</h1>
                <p className="carousel-title">Find Jobs, Employment & Career Opportunities</p>
                <div className="row search-section">
                        <form>
                             <Searchkeywords />
                             <Selectlocation />
                        </form>
                                      
               </div>
               
               
              </div>
            </div>
        <div className="carousel-inner">
          <div className="item">
            <img src="http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-14.jpg" alt="First slide"/>
           
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=light-landscape-nature-326055.jpg&fm=jpg" alt="Second slide"/>
            <div className="container">
              
            </div>
          </div>
          <div className="item active">
            <img src="https://www.hdwallpapers.in/walls/beautiful_lake_sunset-wide.jpg" alt="Third slide"/>
            <div className="container">
              
            </div>
          </div>
        </div>
        <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="fa fa-caret-left"></span></a>
        <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="fa fa-caret-right"></span></a>
      </div>
      </div>
    )
  }
}

export default Slider;
