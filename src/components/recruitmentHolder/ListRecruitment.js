import React from 'react';
import { Link } from 'react-router';

// import _ from 'lodash';


export default class ListRecruitments extends React.Component {
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

      <Link to="/recruitments/0001">
       <div className="emply-resume-list row">
        <div className="emply-resume-thumb col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <img src={value.logoCompany} alt="" />
        </div>
        
          <div className="emply-resume-info col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <h3><a href="#" title="" style={{color: "#212121", fontWeight: "bold"}}>{value.name}</a>
            <a href="#" className="fa fa-heart-o"></a></h3>
          
            <span>{value.company}</span><br/>
            <span><i>{value.position +' position'}</i></span><br/>
            <span className="location" style={{color: '#666666' , fontSize: 13}}><i className="fa fa-map-marker"></i>{value.location}</span>
            
          </div>
          

           <div className="emply-resume-info col-xs-3 col-sm-3 col-md-3 col-lg-3" >
           <span className="job-is ft" style={{color:'red'}}><i className="fa fa-dollar" style={{color:'red'}}></i>{value.salary}</span>
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
