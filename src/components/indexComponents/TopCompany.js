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
      }
     
   

     ]
    }
  }
  
  
  render() {
   var elm = this.state.company.map((value,key)=>{
    return (
          <div key={key} className="company-img col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="#" title=""><img src={value.logo} alt="" /></a>
          </div>
      )
   })
    return (
      <div className ="TopCompany container-fluid">
                 
        <h2>Top Comapany</h2>
        <p>Some of the companies we've helped recruit excellent applicants over the years.</p>
          <div className="Top-list  row">
                    {elm}
          </div>
        </div>
      
    )
  }
}

export default TopCompany;
