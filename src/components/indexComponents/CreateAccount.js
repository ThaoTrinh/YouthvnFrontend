import React from 'react';

class CreateAccount extends React.Component {
  constructor(props){
    super(props);
   
  }

  
  render() {
  
    return (
    <div className ="container-fluid section" style={{marginTop:0, height:"auto"}}>
        <div className="block double-gap-top double-gap-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="simple-text-block">
                  <h3>Make a Difference with Your Online Resume!</h3>
                  <span>YouthVN will accompany with you</span>
                  <a href="#" title="">Create an Account</a>
                </div>
              </div>
            </div>
          </div>  
        </div>
    </div>
    )
  }
}

export default CreateAccount;
