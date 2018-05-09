import React from 'react';
import MainSlider from './MainSlider';
import ListOrganizations from './ListOrganizations'
import ListRecruitment from './ListRecruitment';
import ListCV from './ListCV';
class PopularCategory extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      Jobs: [
       {
        name:"Android",
        logo:"fa fa-android",
        numJob:15,
        
       },
       {
        name:"IOS dev",
        logo:"fa fa-apple",
        numJob:8,
        
       },
        {
        name:"Automobile Engineer",
        logo:"fa fa-automobile",
        numJob:5,
        },
        {
        name:"Front End",
        logo:"fa fa-html5",
        numJob:10,
        },
        

      ]
    }
  }
  componentWillMount () {
    window.scrollTo(0, 0);
  }
  
  render() {
    var elms = this.state.Jobs.map((value,key)=>{

      return(
         <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
         <div className="Job-item">
               
          <div className="logo text-center">
            <i className ={value.logo}> </i>
          </div>
          <div className="text">
            <h3>{value.name}</h3>
            <h5>{value.numJob+' Jobs Opened'} </h5>
          </div>
        </div>
        </div>

        )
    })
    return (
      <div className ="container PopularCategory ">
      <br/>
      <br/>
      <br/>
      <div>
        <h2 className="text-center"style={{fontFamily: "Quicksand Regular", marginTop: 5,marginBottom:40, fontWeight: 900}}> Popular Category </h2>
      </div>
      <div className="container">
      <div className="row no-gape">
        {elms}
       
      </div>
      </div>
           <div className="browse-all-cat">
              <a href="#" title="">Browse All Categories</a>
            </div>
      </div>
    )
  }
}

export default PopularCategory;
