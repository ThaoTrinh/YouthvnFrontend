import React from 'react';
const $ = window.jQuery;

class Intro extends React.Component {
  render() {
    return (
      <div>
        <div className="pre-title">
          <div className="title">
            <h3>GIỚI THIỆU</h3>
          </div>
        </div>
        <div className="row video-content">
          <div className="col-sm-4 video-intro">
            <h3>VỀ CHÚNG TÔI</h3>
            <p className="">{this.props.content}</p>
          </div>
          <div className="col-sm-8 video-illustration">
            <iframe src={this.props.src}></iframe>
          </div>
        </div>
      </div>
    )
  }
}

class MissionVision extends React.Component {
  render() {
    return (
      <div className="col-sm-6 col-xs-12">
        <div id="mission" className="mission-vision">
          <h3>{this.props.children}</h3>
          <p>{this.props.content}</p>
        </div>
      </div>
    )
  }
}

class Image extends React.Component {
  render() {
    return (
      <div className="col-sm-4 col-xs-12 box-image ratio-16-9">
        <div className="absolute-class">
          <img src={this.props.img}/>
        </div>
      </div>
    )
  }
}

class IntroMissionVision extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description:"",
      mission:"",
      vision:"",
      video:"",
      image:["","","","","","",""]
    }
  }
  // getOrganization(id) {
  //   $.ajax({
  //     method: "GET",
  //     url: "/api/organization/get-organization?id=" + id ,
  //   }).done(response => {
  //     if (response.success) {
  //       const organization = response.organization;
  //       this.setState({
  //         intro_content: organization.intro_content,
  //         intro_video: organization.intro_video,
  //         mission: organization.mission,
  //         vision: organization.vision,
  //         image: organization.image
  //       });
  //     }
  //     else {
  //       alert(response.message);
  //     }
  //   })
  // }


  componentWillMount(){  
    const {description, mission, vision, video} = this.props ;
    this.setState({description, mission, vision, video});
  }
  render() {
    return (
      <div id="intro-mission-vision">
        <Intro content={this.state.description} src={this.state.video}/>
        <div className="row">
          <MissionVision content={this.state.mission}>SỨ MỆNH</MissionVision>
          <MissionVision content={this.state.vision}>TẦM NHÌN</MissionVision>
        </div>
        <div className="image-show">
          <div className="row">
            <Image img={this.state.image[0]}/>
            <Image img={this.state.image[1]}/>
            <Image img={this.state.image[2]}/>
          </div>
          <div className="row">
            <Image img={this.state.image[3]}/>
            <div className="col-sm-4 col-xs-12 box-image ratio-16-9">
              <div className="absolute-class">
                <h3>HÌNH ẢNH</h3>
              </div>
            </div>
            <Image img={this.state.image[4]}/>
          </div>
          <div className="row">
            <Image img={this.state.image[5]}/>
            <Image img={this.state.image[6]}/>
            <Image img={this.state.image[7]}/>
          </div>
        </div>
      </div>
    )
  }
}
export default IntroMissionVision