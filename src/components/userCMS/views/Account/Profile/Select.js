import React from 'react';

class Select extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        selectChosen: false,
        value:"Education"
    }
  }
  toggleSelect =()=>{
    this.setState({selectChosen: !this.state.selectChosen}); 
  }
  setLocation =(string)=>{
    this.setState({selectChosen: !this.state.selectChosen, value: string})
    
  }
  
  
  render() {
    const elm = this.props.selection.map((value,key)=>{
        return(
            <div onClick={()=>{this.setLocation(value)}} className="item">{value}</div>
        )
    })
    return (
    <div>
      <div className="col-lg-12 search2">
                
         <div className="select" onClick={()=>{this.toggleSelect()}}>{this.state.value}<span className={this.props.icon}></span></div>   
         <div className={this.state.selectChosen?"display-select row":"hidden-select row"} >
         <div className="search-chosen">
            {elm}
         </div>
      </div>           
     </div>
      
     
    </div>
      
    )
  }
}

export default Select;
