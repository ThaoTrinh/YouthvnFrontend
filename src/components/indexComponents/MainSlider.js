import React from 'react';
import { Link, browserHistory } from 'react-router';
import swal from 'sweetalert';
import moment from 'moment';
import { MoneyToNumber, formattingItemArr, formattingMoney } from '../../commons/share';
import { ACCEPTED_TYPES, INVITATION_TYPES } from '../../commons/constants';
const $ = window.jQuery;

class Slider extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        selectChosen: false,
        location:"Location"
    }
  }
  toggleSelect =()=>{
    this.setState({selectChosen: !this.state.selectChosen}); 
  }
  setLocation =(string)=>{
    this.setState({selectChosen: !this.state.selectChosen, location: string})
    
  }
  render() {
    
    moment.locale('vi');
    console.log(this.state.selectChosen)
    return (
      <div className="main-carousel">
      <div id="carousel-id" className="carousel slide" data-ride="carousel">


         <div className="container">
              <div className="carousel-caption">
                <h1>The Easiest Way to Get Your Job</h1>
                <p className="carousel-title">Find Jobs, Employment & Career Opportunities</p>
               <div className="row search-section">
                        <form>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 search1">
                            <div className="row">
                                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 ">
                                    <input type="search" 
                                            name="keyword " 
                                            className="form-control"
                                            value="Job titles, keywords or Company name" 
                                            placeholder="Nhập từ khóa" />
                                            </div>
                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <span className="fa fa-keyboard-o"></span>
                                </div>
                            </div>
                                                    
                              
                              </div>
                              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 search2">
                                  <div className="row">
                                      
                                  <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 select-zone">
                                    <div name="" className="select" onClick={()=>{this.toggleSelect()}}>
                                      <div className="item-chosen"> {this.state.location} </div>
                                       
                                   </div>   
                                  </div>
                                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                      <span className="fa fa-map-marker"></span>
                                  </div>
                                </div>
                                 </div>
                                  

                         </form>
                                      
               </div>
               <div className={this.state.selectChosen?"display-select row":"hidden-select row"} >
                   <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                       
                   </div>
                   <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 search-chosen">
                       <div onClick={()=>{this.setLocation("Saigon")}} className="item"> Saigon</div>
                       <div onClick={()=>{this.setLocation("Danang")}} className="item"> Danang</div>
                       <div onClick={()=>{this.setLocation("Hanoi")}} className="item"> Hanoi</div>
                       <div onClick={()=>{this.setLocation("Others")}} className="item"> Others</div>
                   </div>
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
