import React from "react"

class Item extends React.Component{
  render() {
    return (	
      <div className="emply-resume-list row">
        <div className="emply-resume-thumb col-md-3">
          <img src="http://placehold.it/100x86" alt="" />
          <div className="view"> <i className="fa fa-eye"> </i>7</div>
          <div style={{fontSize: 14, marginTop: 10}}><center>5 hour ago</center></div>
        </div>
        
          <div className="emply-resume-info col-md-6">
            <h3 style={{fontSize: 23}}><a href="#" title="">Ali TUFAN</a>
            <a href="#" className="fa fa-heart-o"></a></h3>
          
            <span>Project Manager - IT</span>
            <span><i>3 year experience</i></span>
            <span className="location" style={{color: '#666666' , fontSize: 13}}><i className="fa fa-map-marker"></i>Istanbul / Turkey</span>
            <p className="skill" style={{fontSize: 14}}><b style={{color:'#8b91dd'}}>Skill: </b>Photoshop, C++, sdfhjshfjdshfjskdhfjsdhfjds, jdhjsfhsdjfhs</p>
          </div>
          

           <div className="emply-resume-info col-md-3">
            <span className= "job-is ft">fulltime</span>
            <span className= "job-is tp">parttime</span>
            <span className= "job-is fl">intership</span>
          </div>
          
        
        
        </div>
        
      
    );
  }
}

export default Item;