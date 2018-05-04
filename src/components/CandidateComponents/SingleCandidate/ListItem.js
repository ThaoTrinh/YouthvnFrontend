import React from 'react';
import { Link } from 'react-router';
import Item from './item';
// import _ from 'lodash';


export default class ListItem extends React.Component {
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
    var elm= this.state.candidate.map((value,key)=>{
      var arrSkill=[];
      for (let i=0;i<value.skill.length;i++){
         arrSkill.push(<span className="skill-item">{value.skill[i]}</span>);
        }
      return(
      <Link to="/candidate">
      <div className="emply-resume-list row">
        <div className="emply-resume-thumb col-md-3">
          <img src="http://placehold.it/100x86" alt="" />
          <div className="view"> <i className="fa fa-eye"> </i>{" "+value.view}</div>
          <div style={{fontSize: 14, marginTop: 10, marginBottom:5}}><center>{value.hour+" hours ago"}</center></div>
        </div>
        
          <div className="emply-resume-info col-md-6">
            <h3><a href="#" title="">{value.name}</a>
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
        </Link>
      )
    })
    return (
      <div className="candidate-item">
        <div className="padding-left">
          <div className="emply-resume-sec">	
           {elm}
           
            
          </div>
        </div>
      </div>
    );
  }
}
