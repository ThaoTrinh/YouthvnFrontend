import React from 'react';

class Selectlocation extends React.Component {
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

    return (
    <div>
      <div className="col-xs-12 col-sm-4 col-md-2 col-lg-4 search2">
                
         <div className="select" onClick={()=>{this.toggleSelect()}}>{this.state.location}<span className="fa fa-map-marker"></span></div>   
         <div className={this.state.selectChosen?"display-select row":"hidden-select row"} >
           
        <div className="search-chosen">
                <div onClick={()=>{this.setLocation("Saigon")}} className="item"> Saigon</div>
                <div onClick={()=>{this.setLocation("Danang")}} className="item"> Danang</div>
                <div onClick={()=>{this.setLocation("Hanoi")}} className="item"> Hanoi</div>
                <div onClick={()=>{this.setLocation("Others")}} className="item"> Others</div>
         </div>
      </div>           
     </div>
      
     
    </div>
      
    )
  }
}

export default Selectlocation;
