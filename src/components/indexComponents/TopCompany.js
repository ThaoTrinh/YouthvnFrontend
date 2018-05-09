import React from 'react';


class TopCompany extends React.Component {
  constructor(props){
    super(props);
    this.state ={
     company : [
      {
        logo:'/logo/amazon.png'
      },
      {
        logo:'/logo/facebook.png'
      },
      {
        logo:'/logo/Gameloft.png'
      },
      {
        logo:'/logo/KMS.png'
      },
      {
        logo:'/logo/VNG.png'
      }
   

     ]
    }
  }
  
  
  render() {
   var elm = this.state.company.map((value,key)=>{
    return (
          <div className="company-img">
                <a href="#" title=""><img src="http://placehold.it/180x80" alt="" /></a>
          </div>
      )
   })
    return (
      <div className ="TopCompany">
            
      
        <h2>Top Comapany</h2>
        <p>Some of the companies we've helped recruit excellent applicants over the years.</p>
          <div className="Top-list container">
              
             {elm}
          </div>
                
      </div>
      
    )
  }
}

export default TopCompany;
