import React from 'react';
import $ from 'jquery'
import Jobhead from'./Jobhead';
import Jobdetail from './Jobdetail';
import Joboverview from './Joboverview';



class Job extends React.Component {
    constructor(props) {
        super(props);
               
    }
  
    render() {
        const {FullTime,major,mapPosition,monthlySalary,amount,certi,exp,age,gender,language,skill,postDate,endDate,profileLink,jobDes,roles}= this.props;
        return (
            <div className="col-lg-8 column">
            <div className="job-single-sec">
              <Jobhead 
                    FullTime={FullTime}
                    major={major}
                    mapPosition={mapPosition}
                    monthlySalary={monthlySalary}
                    amount={amount}
                    certi={certi}
                    exp={exp}
                    age={age}
                    gender={gender}
                    language={language}
                    skill={skill}
                    postDate={postDate}
                    endDate={endDate}
                    profileLink={profileLink}
                    roles={roles}
                />
               <Jobdetail jobDes={jobDes}/>
               <Joboverview />
               <div className="share-bar">
                    <span>Share</span><a href="#" title="" className="share-fb"><i className="fa fa-facebook"></i></a><a href="#" title="" className="share-twitter"><i className="fa fa-twitter"></i></a>
               </div>
            </div>
        </div>
        );
    }
}
export default Job;