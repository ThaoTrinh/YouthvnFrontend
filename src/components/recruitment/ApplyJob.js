import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import request from 'superagent';
import { codeGenerator } from '../../commons/share';
import async from 'async';
import _ from 'lodash';
import ApplicationForm from './ApplicationForm';
import swal from 'sweetalert2';
import { env } from "../../commons/env";

const $ = window.jQuery;
const MAX_NUMBER = 99;

class ApplyJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdatedUser: false,
            user: {},
            recruitment: {},
            isOnlineCV: true,
            files: [],
            otherFiles: [],
            fileUpload: {}
        }
        this.handleOnlineCVChanged = this.handleOnlineCVChanged.bind(this)
        this.getFiles = this.getFiles.bind(this)
        this.getOtherFiles = this.getOtherFiles.bind(this)
        this.handleUploadFile = this.handleUploadFile.bind(this)
    }

    getRecruitment = (id) => {
        request
            .get(env.serverUrl + '/api/recruitment/' + id)
            .end((error, res) => {
                this.setState({ recruitment: res.body.result });
            })
    }

    checkExistedUser = () => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            request
                .post(env.serverUrl + "/api/user/user-info")
                .set('x-access-token', token)
                .end((err, res) => {
                    if (res.body.success) {
                        let user = res.body.user;
                        if (new Date(user.createdDate).getTime() == new Date(user.updatedDate).getTime()) {
                            this.setState({ isUpdatedUser: false, user });
                        }
                        else {
                            this.setState({ isUpdatedUser: true, user });
                        }
                    }
                })
        }
        else {
            swal(
                '',
                'Bạn cần đăng nhập để tiếp tục',
                'warning'
            )
            browserHistory.goBack();
        }
    }

    newCVCode = (user) => {
        console.log(user.versions[user.versions.length - 1]);
        let oldCode = user.versions[user.versions.length - 1].cvCode;
        return codeGenerator(MAX_NUMBER, oldCode);
    }

    applyButton = () => {
        return <div className="row">
            <div className="col-sm-12 text-center recruitment-footer">
                <button className="ui large button recruitment-apply-btn" onClick={(e) => this.handleSubmited(e)}>Nộp hồ sơ</button>
            </div>
        </div>
    }

    handleOnlineCVChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isOnlineCV: value });
    }

    getFiles = (files) => {
        this.setState({ files });
    }

    getOtherFiles = (otherFiles) => {
        this.setState({ otherFiles });
    }

    updateCV = () => {
        browserHistory.push('/user');
    }

    handleUploadFile = (e) => {
        const data = e.target.files[0];
        const id = e.target.id;
        const { fileUpload } = this.state;
        fileUpload[id] = data;
        this.setState({ fileUpload });
    }

    handleSubmited = (e) => {
        e.preventDefault();
        const { user, isOnlineCV, fileUpload, recruitment } = this.state;
        const recruitmentId = this.props.params.id;
        const cvCode = this.newCVCode(user);
        if (cvCode === -1) {
            swal({
                title: 'Bạn đã ứng tuyển vượt quá số tin tuyển dụng trong ngày',
                text: '',
                type: 'warning',
                timer: 1500
            }).then((result) => {
                if (result.dismiss === 'timer') {
                    return;
                }
            })
        }
        if (cvCode === undefined) {
            swal({
                title: 'Lỗi hệ thống',
                text: '',
                type: 'error',
                timer: 1500
            }).then((result) => {
                if (result.dismiss === 'timer') {
                    return;
                }
            })
        }
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            const arr = [];
            const fileUploadArr = _.map(fileUpload, (elem, key) => {
                return elem;
            })
            const fileUploadKey = _.map(fileUpload, (elem, key) => {
                return key;
            })

            let isFullFiles = false;
            if (isOnlineCV) {
                let index = fileUploadKey.indexOf("Hồ sơ cá nhân");
                if (index != -1) fileUploadKey.splice(index, 1);
                isFullFiles = fileUploadKey.length == recruitment.applications.length - 1;
            }
            else {
                isFullFiles = fileUploadKey.length == recruitment.applications.length;
            }

            if (!isFullFiles) {
                swal({
                    title: 'Bạn chưa nộp đủ hồ sơ',
                    text: '',
                    type: 'warning',
                    timer: 1500
                }).then((result) => {
                    if (result.dismiss === 'timer') {
                        return;
                    }
                })
            }
            else {
                const itemList = $('.item-row');
                itemList.each(function () {
                    let id = $(this).attr('id');
                    let type = Number($(this).attr('data-type'));
                    let isPublic = ($(this).attr('data-state') == 'true');
                    arr.push({ id, type, isPublic, cvCode, recruitmentId });
                })

                let obj = {
                    recruitmentId: recruitmentId,
                    cvCode: cvCode,
                    newCV: [],
                    CVUrl: `/user/recruitment/${recruitmentId}/${user._id}`,
                    invitationId: (this.props.location.state && this.props.location.state.invitationId) ? this.props.location.state.invitationId : null
                };
                if (isOnlineCV) {
                    obj['newCV'] = arr;
                    obj['CVUrl'] = `/user/recruitment/${recruitmentId}/${user._id}/${cvCode}`
                }

                request
                    .post(env.serverUrl + "/api/recruitment/apply")
                    .send(obj)
                    .set('x-access-token', token)
                    .end((err, res) => {
                        if (err) console.log(err);
                        else {
                            const req = request
                                .post(env.serverUrl + '/api/file/attach-file/recruitment')
                                .field('fileUploadKey[]', JSON.stringify(fileUploadKey))
                                .field('itemId', recruitmentId)
                                .set('x-access-token', token);
                            fileUploadArr.forEach(item => {
                                req.attach('files', item)
                            });
                            req.end((err, res) => {
                                if (err) {
                                    console.log(err);
                                    swal({
                                        title: 'Lỗi hệ thống',
                                        text: '',
                                        type: 'error',
                                        timer: 1500
                                    }).then((result) => {
                                        if (result.dismiss === 'timer') {
                                            return;
                                        }
                                    })
                                }
                                else {
                                    swal({
                                        title: 'Ứng tuyển thành công',
                                        text: '',
                                        type: 'success',
                                        timer: 1500
                                    }).then((result) => {
                                        if (result.dismiss === 'timer') {
                                            window.location.reload();
                                        }
                                    })
                                }
                            })
                        }
                    })
            }
        }
    }

    componentWillMount() {
        this.checkExistedUser();
        this.getRecruitment(this.props.params.id);
    }

    render() {
        const { isUpdatedUser, recruitment, isOnlineCV, user, files, otherFiles, fileUpload } = this.state;
        return (
            <div className="container">
                <div className="push"></div>
                <div>
                    <p><strong>{(isUpdatedUser) ? "" : "Bạn chưa cập nhật hồ sơ online."} Mời bạn chọn đầy đủ các hồ sơ bên dưới</strong></p>
                    <hr />
                    <div>
                        {(recruitment.applications) ?
                            <ApplicationForm
                                applications={recruitment.applications}
                                isOnlineCV={isOnlineCV}
                                user={user}
                                files={files}
                                otherFiles={otherFiles}
                                getFiles={this.getFiles}
                                getOtherFiles={this.getOtherFiles}
                                handleCVSubmited={this.handleCVSubmited}
                                handleOnlineCVChanged={this.handleOnlineCVChanged}
                                handleUploadFile={this.handleUploadFile} />
                            : null
                        }
                        <div className="clearfix"></div>
                    </div>
                    <hr />
                </div>
                <div>
                    {this.applyButton()}
                </div>
            </div>
        )
    }
}

export default ApplyJob