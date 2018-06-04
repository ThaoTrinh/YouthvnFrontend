import React from 'react';
import $ from 'jquery';
import CompanyName from'./CompanyName';
import CompanyInfoCard from './CompanyInfoCard';
import Job from './Job';
/*import '../assets/oldcss/css/style.css';
import '../assets/oldcss/css/responsive.css';
import '../assets/oldcss/css/animate.min.css';
import '../assets/oldcss/css/bootstrap-grid.css';
import '../assets/oldcss/css/icons.css';
import '../assets/oldcss/css/colors/colors.css';*/


class Recruitment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heart_color: '#B8B8B8',

            companyName:'Company',

            companyAddress:"Nguyễn Đình Chiểu, Đa Kao, quận 1, thành phố Hồ Chí Minh",

            link:"jobhunt.com",

            profileLink:"abc@gmail.com",
                            
            phoneNumber:"0123456789",
                            
            email:"jobhunt@mail.com",
                            
            jobDes:"Company is a 2016 Iowa City-born start-up that develops consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.\n\nSed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien",
                            
            roles:"UX/UI Designer, Web Designer, Graphic Designer",
                            
            monthlySalary:"$3000 - $5000",
                            
            postDate:"July 29, 2017",
                            
            endDate:"August 29, 2017",
                            
            companyAvatar:"http://placehold.it/124x124",
                            
            FullTime:"True",
                            
            mapPosition:"Ho Chi Minh City, Viet Nam",
                            
            amount:3,
                            
            gender:"Not required",
                            
            exp:"2 years and above",
                            
            certi:"College degree",
                            
            major:["Computer Science", "IT geeks", "Marketing", "Mad guys", "Artist"],
                            
            age:"From 23 to 30 years old",
                            
            language:["English", "French", "Chinese", "Japanese"],
                            
            skill:["10 fingers typing", "Leadership"]

        }
    }
  
    render() {
    const{companyName,companyAddress,companyAvatar,link,phoneNumber,email,jobDes,roles,monthlySalary,postDate,endDate,FullTime,mapPosition,amount,gender,exp,certi,major,language,age,skill,profileLink}= this.state;
        return (
            <div>
                <CompanyName companyName={this.props.companyName} companyImage={this.props.companyImage} />
                <section>
                    <div className="job-single-block">
                        <div className="job-single-container">
                            <div className="row no-gape">
                                <Job
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
                                    jobDes={jobDes}
                                />
                                                             
                                <CompanyInfoCard 
                                  companyName={companyName}
                                  companyAvatar={companyAvatar} 
                                  companyAddress={companyAddress}
                                  phoneNumber={phoneNumber}
                                  email={email}
                                  link={link}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Recruitment;