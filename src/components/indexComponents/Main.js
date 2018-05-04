import React from 'react';
import MainSlider from './MainSlider';
import PopularCategory from './PopularCategory';
import HowItWork from './HowItWork';
import ListOrganizations from './ListOrganizations'
import ListRecruitment from './ListRecruitment';
import ListCV from './ListCV';
class Main extends React.Component {
  
  componentWillMount () {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div>
        <MainSlider />
        <PopularCategory />
        <hr/>
        <HowItWork />
        <div className ="container-fluid section">
         
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
        <div className="container">
          <div className="push"></div>
          
          <ListRecruitment />
          
          
          <hr />
        
        </div>
      </div>
    )
  }
}

export default Main;
