import React from 'react';
import MainSlider from './MainSlider';
import PopularCategory from './PopularCategory';
import HowItWork from './HowItWork';
import ListRecruitment from './ListRecruitment';
import FeatureCandidate from './FeatureCandidate';
import TopCompany from './TopCompany';
import CreateAccount from './CreateAccount';
class Main extends React.Component {
  
  componentWillMount () {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div>
        <MainSlider />
        <PopularCategory />
        <div className="container">      
          <ListRecruitment />         
        </div>
        <HowItWork />
        <CreateAccount />
        <TopCompany />
       <FeatureCandidate />
      </div>
    )
  }
}

export default Main;
