import React from 'react';
import { Link } from 'react-router';

// import _ from 'lodash';


export default class Recruitments extends React.Component {
  constructor(props){
    super(props);
    this.state={
      recruitments: [
        {
          name: 'Web Developer',
          company: 'KMS company' ,
          logoCompany:"/logo/KMS.png" ,
          location: "Sai Gon" ,
          salary:1000,
          position: 10,
          type:['Fulltime']
        },
       {
          name: 'Mobile Developer',
          company:"VNG Inc." ,
          logoCompany: "/logo/VNG.png" ,
          location:"Sai Gon" ,
          salary:2000,
          position: 10,
          type:['Fulltime', 'Parttime']
        },
       {
          name: "PHP dev",
          company:"Facebook Vietnam",
          logoCompany: "/logo/facebook.png",
          location: "Singapore",
          salary:4000,
          position: 10,
          type:['Fulltime', 'Parttime']
        },
        {
          name:"Data Science" ,
          company:" Google Asia",
          logoCompany: "/logo/google.png",
          location: "Da Nang",
          salary:6000,
          position: 10,
          type:['Internship', 'Parttime']
        },
        {
          name:" Game Developer Unity" ,
          company: "Gameloft",
          logoCompany:"/logo/Gameloft.png" ,
          location:" Bangkok" ,
          salary:9000,
          position: 10,
          type:['Fulltime', 'Parttime']
        },
        {
          name:"Optimize search engine" ,
          company: "Gameloft",
          logoCompany:"/logo/amazon.png" ,
          location:"Ha Noi" ,
          salary:1000,
          position: 10,
          type:['Fulltime', 'Parttime']
        }
 
       ]
    }
  }
  render() {
    var elm = this.state.recruitments.map((value,key)=>{

      var arrType=[];
      for (let i=0;i<value.type.length;i++){
        if (value.type[i]=='Fulltime')
          arrType.push(<span className="job-is ft">{value.type[i]}</span>);
        else if (value.type[i]=='Parttime')
          {arrType.push(<span className="job-is tp">{value.type[i]}</span>);}
        else 
          arrType.push(<span className="job-is fl">{value.type[i]}</span>);
        }

      return(

      <Link to="/job">
      <div className="emply-resume-list row">
        <div className="emply-resume-thumb col-md-2">
          <img src={value.logoCompany} alt="" />
          
        </div>
        
          <div className="emply-resume-info col-md-6">
            <h3><a href="#" title="" style={{color: "#212121", fontWeight: "bold"}}>{value.name}</a>
            <a href="#" className="fa fa-heart-o"></a></h3>
          
           
            <span><i>{value.company}</i></span>
            <span>open {value.position} position</span>
            <span className="location" style={{color: '#666666' , fontSize: 13}}><i className="fa fa-map-marker"></i>{value.location}</span>
            
          </div>
          

           <div className="emply-resume-info col-md-2" style={{marginLeft:55}}>
           <div style={{marginLeft:10,color:'#212121'}}><i className="fa fa-dollar"></i>{value.salary}</div>
            {arrType}
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
