import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import Requirement from './Requirement';
import JobDescription from './JobDescription';
import AboutCompany from './AboutCompany';
import SimRecruitments from './SimRecruitments';
import Spinner from 'react-spinkit';
import moment from 'moment';
import async from 'async';
import request from 'superagent';
import _ from 'lodash';
import swal from 'sweetalert2';
import loading from '../../assets/icon/Rolling.gif';
class PublicRecruitment extends Component {
  constructor(props) {
    super(props);
    this.startViewTime = 0;
    this.endTime = 0;
    this.state = {
      recruitment: {},
      simRecruitments: [],
    }
  }

  getRecruitment = (id) => {
    request
      .get('/api/recruitment/' + id)
      .end((error, res) => {
        this.setState({ recruitment: res.body.result });
      })
  }

  applyButton = () => {
    return <div className="row">
      <div className="col-sm-12 text-center recruitment-footer" style={{marginTop:"20px"}}>
        <button className="ui large button recruitment-apply-btn" onClick={() => this.applyJob()}>Ứng tuyển</button>
      </div>
    </div>
  }

  applyJob = () => {
    const token = localStorage.getItem("token");
    if (token) {
      browserHistory.push('/recruitments/apply/' + this.props.params.id);
    }
    else {
      swal(
        '',
        'Bạn cần đăng nhập để tiếp tục',
        'warning'
      )
      return false;
    }
  }

  positionList = (positions) => {
    const result = positions.map(function(item) {
      return (
        <a className="ui label" key={item}>
          {item}
        </a>
      )
    });
    return result;
  }
  postToServerUserView() {
    this.endViewTime = Date.now();
    this.timePeriod = this.endViewTime - this.startViewTime;
    const data = {
      recruitmentId: this.props.params.id,
      timePeriod: this.timePeriod,
      type: 'recruitment'
    }
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      request
      .post('/api/history/user-view-history')
      .set('x-access-token', token)
      .send(data)
      .end((err, res) => {
        if (err) console.log(err);
      })
    }
  }
  getSimRecruitments(callback) {
    request
    .get(`/api/recruitment/sim-recruitment/${localStorage.getItem('recruitmentId')}`)
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
      else {
        const { simRecruitments } = res.body;
        const flatten = simRecruitments.map(elem => {return {...elem.col, similarity: elem.similarity}});
        
        callback(null, flatten);
      }
    })
  }
  getPersonalRecommendRecruitments(callback) {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      request
      .get('/api/recruitment/sim-recruitment')
      .query({recruitmentId: localStorage.getItem('recruitmentId')})
      .set('x-access-token', token)
      .end((err, res) => {
        if (err) {
          console.log(err);
        }
        else {
          const { simRecruitments } = res.body;
          const flatten = simRecruitments.map(elem => {return {...elem.col, point: elem.point}});
          callback(null, flatten);
        }
      })
    }
    else {
      callback(null, []);
    }
  }
  recommender() {
    async.parallel({
        personal: this.getPersonalRecommendRecruitments,
        general: this.getSimRecruitments,
      },
      (err, results) => {
        if (err) console.log(err);
        const { personal, general } = results;
        console.log(general);
        var merged = [...general];
        personal.forEach(elem => {
          const index = _.random(2, general.length);
          merged.splice(index, 0, elem);
        })
        const uniqArr = _.uniqBy(merged, '_id');
        this.setState({simRecruitments: uniqArr});
      }
    )
  }
  countView (id) {
    request
    .post('/api/recruitment/view')
    .send({id})
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
    })
  }
  handleLikeClick() {
    const token = localStorage.getItem('token');
    if (token) {
      request
      .post(`/api/recruitment/like/${this.props.params.id}`)
      .set('x-access-token', token)
      .send({data: 1})
      .end((err, res) => {
        if (err) console.log(err);
        else {
          const { recruitment } = this.state;
          const { likes } = res.body;
          recruitment._likes = likes;
          
          this.setState({recruitment});

        }
      })      
    }
  }
  handleFollowClick() {
    const token = localStorage.getItem('token');
    if (token) {
      request
      .post(`/api/recruitment/follow/${this.props.params.id}`)
      .set('x-access-token', token)
      .send({data: 1})
      .end((err, res) => {
        if (err) console.log(err);
        else {
          const { recruitment } = this.state;
          const { follows } = res.body;
          recruitment._follows = follows;
          
          this.setState({recruitment});

        }
      })      
    }
  }
  componentWillMount () {
    this.startViewTime = Date.now();
    localStorage.setItem('recruitmentId', this.props.params.id);
    this.getRecruitment(this.props.params.id);
    this.recommender();
    this.countView(this.props.params.id);
  }
  componentWillUnmount () {
    this.postToServerUserView();
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.postToServerUserView();
      //this.countView(nextProps.params.id);
      window.scrollTo(0, 0);
      window.location.reload();
    }
  }
  
  render() {
    const { recruitment, simRecruitments } = this.state;
    if (_.isEmpty(recruitment)) {
      return (
        <div className="container">
          <div className="push"></div>
          <div className="row">
            <div className="loading-icon">
                <img src={ loading } />
            </div>
          </div>
          <div className="push"></div>
        </div>
      ) 
    }
    return (
      <div className="container">
        <div className="push"></div>
        <section id="title">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>{recruitment.title}</h1>
              <div style={{ color: '#b3b3b3', margin: 15, fontSize: 16 }}>Cập nhật {moment(new Date(recruitment.updatedDate), "YYYYMMDD").fromNow()}</div>
              <div className="ui blue labels">
                {(recruitment.requirement)? this.positionList(recruitment.requirement.positions) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <button className="ui circular facebook icon button">
                <i className="facebook icon"></i>
              </button>
              <button className="ui circular twitter icon button">
                <i className="twitter icon"></i>
              </button>
              <button className="ui circular linkedin icon button">
                <i className="linkedin icon"></i>
              </button>
              <button className="ui circular google plus icon button">
                <i className="google plus icon"></i>
              </button>
            </div>
          </div>
          <div className="row" style={{marginTop: 5}}>
            <div className="col-sm-12 text-center recruitment-attribute">
              <span><i className="fa fa-eye" data-toggle="tooltip" title="Lượt xem"></i> {(recruitment.view)? recruitment.view.total: 0}</span>
              <span><i
              className="fa fa-thumbs-up public-recruitment-icon" 
              aria-hidden="true" 
              data-toggle="tooltip" title={((recruitment._likes.find(elem => this.props.user._id === elem._author)? 'Bỏ thích': 'Thích'))}
              style={{color: ((recruitment._likes.find(elem => this.props.user._id === elem._author)? '#2185d0': ''))}}
              onClick={(e) => this.handleLikeClick(e)}></i> {(recruitment._likes)? recruitment._likes.length: 0 }</span>
              <span><i className="fa fa-share-alt" aria-hidden="true" data-toggle="tooltip" title="Lượt chia sẻ"></i> 2</span>
              <span>
                <i 
                className="fa fa-plus public-recruitment-icon" 
                aria-hidden="true"
                data-toggle="tooltip" title={((recruitment._follows.find(elem => this.props.user._id === elem._author)? 'Bỏ theo dõi': 'Theo dõi'))}
                style={{color: ((recruitment._follows.find(elem => this.props.user._id === elem._author)? 'green': ''))}}
                onClick={(e) => this.handleFollowClick(e)}>
                </i> {(recruitment._follows)? recruitment._follows.length: 0 }
              </span>
            </div>
          </div>
          <hr />
        </section>
        <section id="job">
          <div className="row">
            {(recruitment.requirement)? <Requirement requirement={recruitment.requirement} applications={recruitment.applications} /> : null }
            {(recruitment.requirement)? <JobDescription recruitment={recruitment} /> : null }
            {(recruitment._organization && recruitment._organization.id)? <AboutCompany organization={recruitment._organization}/>: null}
          </div>
          {this.applyButton()}
        </section>
        <hr />
        <section id="similar-recruitment">
          <SimRecruitments recruitments={simRecruitments} title="Tin tuyển dụng liên quan"/>
        </section>
      </div>
    )
  }
}

export default PublicRecruitment