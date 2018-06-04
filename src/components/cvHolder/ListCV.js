import React from 'react';
import { Link } from 'react-router';
// import _ from 'lodash';


export default class ListCV extends React.Component {
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
    var elm = this.state.candidate.map((value,key)=>{
      var arrSkill=[];
      for (let i=0;i<value.skill.length;i++){
         arrSkill.push(<span className="skill-item">{value.skill[i]}</span>);
        }
      return(
      <Link to="/cvs/0001">
      <div className="emply-resume-list row">
        <div className="emply-resume-thumb col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <img src="http://placehold.it/100x86" alt="" />
          <div className="view hidden-md hidden-xs hidden-sm" style={{fontSize: 12}}> <i className="fa fa-eye hidden-md hidden-xs hidden-sm"> </i>{" "+value.view} view</div>
          <div style={{fontSize: 12}}><center>{value.hour+" hours ago"}</center></div>
        </div>
        
          <div className="emply-resume-info col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <h3><a href="#" title="" style={{color: "#212121", fontWeight: "bold"}}>{value.name}</a>
            <a href="#" className="fa fa-heart-o"></a></h3>
          
            <span>{value.position}</span><br/>
            <span><i>{value.year +' year experience'}</i></span><br/>
            <span className="location" style={{color: '#666666' , fontSize: 13}}><i className="fa fa-map-marker"></i>{value.location}</span>
            <p className="skill">Skill: {
              arrSkill
            }</p>
          </div>
          

           <div className="emply-resume-info col-xs-3 col-sm-3 col-md-3 col-lg-3" >
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
