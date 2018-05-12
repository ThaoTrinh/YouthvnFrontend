import React from 'react';
// import { Link } from 'react-router';
import Item from './item';
// import _ from 'lodash';
import ListItem from './ListItem';

import Slider from 'react-slick';
import { Link } from 'react-router';
export default class Sliders extends React.Component {

  constructor(props){
    super(props);
    this.state={
      candidate:[
       {
         name:"Michael Jackson",
         position:"IT project manager",
         view:9,
         hour:3,
         year:2,
         location:"SaiGon",
         skill:['Photoshop','C++','Java']
         

       },
         {
         name:"Adam Levine",
         position:"Marketing Manager",
         view:3,
         hour:5,
         year:1,
         location:"HaNoi",
         skill:['SEO','Illustrator']
         

       },
         {
         name:"Adam Khoo",
         position:"Sale Manager",
         view:8,
         hour:1,
         year:4,
         location:"SaiGon",
         skill:['Photoshop','C++','Java']
         

       }

      ]
    }
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    
      var elm = this.state.candidate.map((value,key)=>{
        var arrSkill=[];
        for (let i=0;i<value.skill.length;i++){
           arrSkill.push(<span className="skill-item">{value.skill[i]}</span>);
          }
        return(
        
        <div className="emply-resume-list" style={{marginLeft:80}}>
          <div className="emply-resume-thumb col-md-2">
            <img src="http://placehold.it/100x86" alt="" />
            <div className="view" style={{fontSize: 12}}> <i className="fa fa-eye"> </i>{" "+value.view}</div>
            <div style={{fontSize: 12}}><center>{value.hour+" hours ago"}</center></div>
          </div>
          
            <div className="emply-resume-info col-md-6">
              <h3><a href="#" title="" style={{color: "#212121", fontWeight: "bold"}}>{value.name}</a>
              <a href="#" className="fa fa-heart-o"></a></h3>
            
              <span>{value.position}</span>
              <span><i>{value.year +' year experience'}</i></span>
              <span className="location" style={{color: '#666666' , fontSize: 13}}><i className="fa fa-map-marker"></i>{value.location}</span>
              <p className="skill">Skill: {
                arrSkill
              }</p>
            </div>
            
  
             <div className="emply-resume-info col-md-3">
              <span className= "job-is ft">Fulltime</span>
              <span className= "job-is tp">Parttime</span>
              <span className= "job-is fl">Intership</span>
            </div>
            
                
          </div>
       
        )
      })
    return (
      <div className="emply-resume-sec" style={{width: '80%'}}>    
          <Slider {...settings}>
             {elm}
          </Slider>
        </div>
      
    );
  }
  }