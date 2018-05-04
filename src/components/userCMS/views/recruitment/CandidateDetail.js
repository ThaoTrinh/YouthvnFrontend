import React, { Component } from 'react'
import request from 'superagent';
import UserCV from '../../../share/UserCV';
import { EvaluateModal } from './EvaluateModal';
import _ from 'lodash';
import StarRatingComponent from 'react-star-rating-component';
import swal from 'sweetalert2';
const TYPE = {
    ACCEPT: 1,
    REJECT: 0
};
const RATED_FIELD = {
    appearance: "Ngoại hình",
    qualification: "Trình độ chuyên môn",
    communication: "Kỹ năng giao tiếp",
    experience: "Kinh nghiệm làm việc"
}
class CandidateDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: {},
            recruitment: {},
            note: "",
            appearance: 0,
            qualification: 0,
            communication: 0,
            experience: 0,
            showModal: false,
            isAccepted: -1,
            isCandidate: false, // false: nhà tuyển dụng, true: ứng viên
            files: []
        }
        this.handleNoteChanged = this.handleNoteChanged.bind(this)
        this.handleappearanceRatingChanged = this.handleappearanceRatingChanged.bind(this)
        this.handleQualificationRatingChanged = this.handleQualificationRatingChanged.bind(this)
        this.handleCommunicationRatingChanged = this.handleCommunicationRatingChanged.bind(this)
        this.handleExperienceRatingChanged = this.handleExperienceRatingChanged.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.handleSubmited = this.handleSubmited.bind(this)
    }
    
    getUser = (userId) => {
        if (localStorage.getItem('token')) {
            request
            .get('/api/user/get-one/'+userId)
            .end((err, res) => {
                if (!err) {
                    this.setState({ user: res.body.user });
                }
                else {
                    console.log(err);
                }
            })
        }
    }

    getRecruitment = (recruitmentId) => {
        if (localStorage.getItem('token')) {
            request
            .get(`/api/recruitment/${recruitmentId}`)
            .end((err, res) => {
                if (!err) {
                    this.setState({ recruitment: res.body.result });
                }
                else {
                    console.log(err);
                }
            })
        }
    }

    getAttachFiles = (recruitmentId, userId) => {
        const token = localStorage.getItem('token');
        if (!token) return;
        request
        .get(`/api/file/attach-file/${recruitmentId}/${userId}`)
        .set('x-access-token', token)
        .end((err, res) => {
            if (err) 
                console.log(err);
            else 
                this.setState({ files: res.body.files });
        })
    }

    accept = () => {
        this.setState({ isAccepted: 1 }, () => {
            const token = localStorage.getItem('token');
            if (token) {
                const { isAccepted } = this.state;
                const options = {
                    recruitmentId: this.props.params.recruitmentId,
                    userId: this.props.params.userId,
                    cvCode: this.props.params.cvCode,
                    isAccepted
                };
                request
                .post('/api/recruitment/recruit')
                .set('x-access-token', token)
                .send(options)
                .end((err, res) => {
                    if (!err) {
                        swal({
                            title: 'Thành công',
                            type: 'success',
                            timer: 1500,
                            showConfirmButton: false,
                            allowOutsideClick: false
                          }).then((result) => {
                            if (result.dismiss === 'timer') {
                              window.location.reload();
                            }
                          })
                    }
                    else {
                        console.log(err);
                        swal({
                            title: 'Thất bại',
                            type: 'error',
                            timer: 1500,
                          }).then((result) => {
                            if (result.dismiss === 'timer') {
                              return;
                            }
                          })
                    }
                })
            }
        });
    }

    reject = () => {
        this.setState({ isAccepted: 0 }, () => {
            const token = localStorage.getItem('token');
            if (token) {
                const { isAccepted } = this.state;
                const options = {
                    recruitmentId: this.props.params.recruitmentId,
                    userId: this.props.params.userId,
                    cvCode: this.props.params.cvCode,
                    isAccepted
                };
                request
                .post('/api/recruitment/recruit')
                .set('x-access-token', token)
                .send(options)
                .end((err, res) => {
                    if (!err) {
                        swal({
                            title: 'Thành công',
                            type: 'success',
                            timer: 1500,
                            showConfirmButton: false,
                            allowOutsideClick: false
                          }).then((result) => {
                            if (result.dismiss === 'timer') {
                              window.location.reload();
                            }
                          })
                    }
                    else {
                        console.log(err);
                        swal({
                            title: 'Thất bại',
                            type: 'error',
                            timer: 1500,
                          }).then((result) => {
                            if (result.dismiss === 'timer') {
                              return;
                            }
                          })
                    }
                })
            }
            
        });
    }

    evaluate = () => {
        this.setState({ showModal: true });
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }
    
    componentWillMount () {
        this.getUser(this.props.params.userId);
        this.getRecruitment(this.props.params.recruitmentId);
        this.getAttachFiles(this.props.params.recruitmentId, this.props.params.userId);
    }

    handleNoteChanged = (e) => {
        const value = e.target.value;
        this.setState({ note: value });
    }

    handleappearanceRatingChanged = (nextValue, prevValue, name) => {
        this.setState({appearance: nextValue});
    }

    handleQualificationRatingChanged = (nextValue, prevValue, name) => {
        this.setState({qualification: nextValue});
    }

    handleCommunicationRatingChanged = (nextValue, prevValue, name) => {
        this.setState({communication: nextValue});
    }

    handleExperienceRatingChanged = (nextValue, prevValue, name) => {
        this.setState({experience: nextValue});
    }

    handleRatingChanged = (nextValue, prevValue, name) => {
        switch (name) {
            case 'appearance':
                this.handleappearanceRatingChanged(nextValue, prevValue, name);
                break;
            case 'qualification':
                this.handleQualificationRatingChanged(nextValue, prevValue, name);
                break;
            case 'communication':
                this.handleCommunicationRatingChanged(nextValue, prevValue, name);
                break;
            case 'experience':
                this.handleExperienceRatingChanged(nextValue, prevValue, name);
                break;
            default:
                break;
        }
    }

    handleSubmited = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (token) {
            const { note, appearance, qualification, communication, experience, isAccepted } = this.state;
            const options = {
                recruitmentId: this.props.params.recruitmentId,
                userId: this.props.params.userId,
                cvCode: this.props.params.cvCode,
                rating: {
                    appearance,
                    qualification,
                    communication,
                    experience,
                    note,
                    isRated: true
                },
                
            };
            request
            .post('/api/recruitment/rate')
            .set('x-access-token', token)
            .send(options)
            .end((err, res) => {
                if (!err) {
                    swal({
                        title: 'Thành công',
                        text: 'Trang web sẽ refresh trong 1 giây.',
                        type: 'success',
                        timer: 1500,
                        onOpen: () => {
                          swal.showLoading()
                        }
                    }).then((result) => {
                        if (result.dismiss === 'timer') {
                          window.location.reload();
                        }
                    })
                }
                else {
                    swal({
                        title: 'Thất bại',
                        text: 'Trang web sẽ refresh trong 1 giây.',
                        type: 'error',
                        timer: 1500,
                        onOpen: () => {
                          swal.showLoading()
                        }
                    }).then((result) => {
                        if (result.dismiss === 'timer') {
                          console.log(err);
                        }
                    })
                }
            })
        }
    }

    handleDownload = (url) => {
        const arr = url.split('/');
        const fileUrl =  '/' + [arr[arr.length-2], arr[arr.length-1]].join('/');
        // window.open(fileUrl);
        return fileUrl;
    }

    renderRating = (title, name, rated) => {
        return (
            <div className="row" style={{lineHeight: 5+'px', marginBottom: 15+'px'}}>
                <label className="col-sm-4">{title}</label>
                <div className="col-sm-8" style={{fontSize: 24}}>
                    <StarRatingComponent
                        name={name}
                        starCount={5}
                        value={rated}
                        editing={false}
                        starColor={"#33cc33"}
                        emptyStarColor={"grey"}
                    />
                </div>
            </div>
        )
    }
    
    render () {
        const { user, isAccepted, note, showModal, appearance, qualification, communication, experience, isCandidate, recruitment, files } = this.state;
        const basicInfo = {
            _id: user._id,
            lastname: user.lastname,
            firstname: user.firstname,
            address: user.address,
            website: user.website
        };
        const rating = {
            appearance,
            qualification,
            communication,
            experience
        };
        
        const ratedInfo = (recruitment._candidates)? 
            recruitment._candidates.find(elem => elem.userId == this.props.params.userId)
            : {};
        var avatar = '';
        try {
            avatar = "<img class='ui small circular image' src=" + '/' + user.image_name + " alt=\"avatar image\" width=\"50\" height=\"50\" />";
        } catch (error) {
            avatar = "<img class='ui small circular image' src=\"\" alt=\"avatar image\" width=\"50\" height=\"50\" />";
        }
        return (
            <div className="container-fluid">
                {(this.props.params.cvCode)? 
                    <UserCV user={user} basicInfo={basicInfo} avatar={avatar} cvCode={this.props.params.cvCode}/>
                    : null }
                {/* <div>
                    <ul class="list-group">
                        <li class="list-group-item">New <span class="badge">12</span></li>
                        <li class="list-group-item">Deleted <span class="badge">5</span></li> 
                        <li class="list-group-item">Warnings <span class="badge">3</span></li> 
                    </ul>
                </div> */}
                
                <div className="row">
                    <div className="col-sm-5">
                        <h3>Các file đính kèm</h3>
                        <div className="ui middle aligned divided list">
                            {(files)?
                                files.map((file) => {
                                    return (
                                        <div className="item" style={{fontSize:"15px"}}>
                                            <div className="content">
                                                {file.title}
                                                <a className="header pull-right" 
                                                    // onClick={() => this.handleDownload(file.url)}>
                                                    href={this.handleDownload(file.url)} download>
                                                    {file.originalName}
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                                : null
                            }
                        </div>
                    </div>
                    
                    <div className="col-sm-offset-1 col-sm-6">
                        <h3>Đánh giá</h3>
                        {(ratedInfo.rating && ratedInfo.rating.isRated)?
                            _.map(RATED_FIELD, (elem, key) => {
                                return this.renderRating(elem, key, ratedInfo.rating[key]);
                            })
                        : <span>Chưa được đánh giá</span> }
                        {(ratedInfo.rating && ratedInfo.rating.isRated)?
                            <div className="row" style={{lineHeight: 5+'px'}}>
                                <label className="col-sm-4">Nhận xét</label>
                                <div className="col-sm-8">
                                    <p>{ratedInfo.rating.note}</p>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                </div>
                <div className="clearfix"></div>
                <br/>

                {(isCandidate)? null :
                    <div className="row">
                        <div className="col-sm-12 text-center recruitment-footer">
                            <button className="ui large button recruitment-apply-btn" onClick={() => this.accept()}>Chấp nhận</button>
                            <button className="ui large button recruitment-apply-btn" onClick={() => this.reject()}>Từ chối</button>
                            <button className="ui large button recruitment-apply-btn" onClick={() => this.evaluate()}>Đánh giá</button>
                        </div>
                    </div>
                }

                <EvaluateModal showModal={showModal}
                    close={this.closeModal}
                    handleNoteChanged={this.handleNoteChanged}
                    handleRatingChanged={this.handleRatingChanged}
                    handleSubmited={this.handleSubmited}
                    note={note}
                    rating={rating} />
            </div>
        )
    }
}

export default CandidateDetail