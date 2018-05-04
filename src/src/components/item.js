import React from "react"

class Item extends React.Component{
  render() {
    return (	
      <div className="emply-resume-list">
        <div className="emply-resume-thumb">
          <img src="http://placehold.it/100x86" alt="" />
          <span style={{fontSize: 10}}><center>3 views</center></span>
          <span style={{fontSize: 10}}><center>5 hour ago</center></span>
        </div>
        <div>
          <div className="emply-resume-info col-md-5">
            <h3 style={{fontSize: 20}}><a href="#" title="">Ali TUFAN</a>
            <a href="#" class="la la-heart-o"></a></h3>
          
            <span>Project Manager - IT</span>
            <span><i>3 year experience</i></span>
            <span style={{color: '#666666' , fontSize: 13}}><i className="la la-map-marker"></i>Istanbul / Turkey</span>
            <p className="skill" style={{fontSize: 12}}><b style={{color:'#8b91dd'}}>Skill: </b>Photoshop, C++, sdfhjshfjdshfjskdhfjsdhfjds, jdhjsfhsdjfhs</p>
          </div>
          

           <div className="emply-resume-info col-md-2">
            <span className= "job-is ft">fulltime</span>
            <span className= "job-is tp">parttime</span>
            <span className= "job-is fl">intership</span>
          </div>
          
        </div>
        
        </div>
        
      
    );
  }
}

export default Item;