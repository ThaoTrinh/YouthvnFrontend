import React from 'react';
import moment from 'moment';
import request from 'superagent';
import Toggle from 'react-toggle'
import { ITEM_TYPE } from '../../commons/constants';
import "react-toggle/style.css"
import swal from 'sweetalert2';

export class ExperienceElement extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isPublic: this.props.item.isPublic[0].isPublic
        }
    }
    
    handlePublicChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isPublic: value });
    }

    render() {
        const { item } = this.props;
        const { isPublic } = this.state;
        const start_time = item.start.month + "/" + item.start.year;
        const end_time = (item.isActive === true) ? " - Hiện nay" : " - " + item.end.month + "/" + item.end.year;
        const time = start_time + end_time;
        return (
            <div className="item-row" id={item._id} data-state={isPublic} data-type={ITEM_TYPE.EXPERIENCE}>
                <div className="row padding-top-25" key={item._id}>
                    <div className="col-md-1 col-sm-1 col-xs-1">

                    </div>

                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <div className="profile-school">{item.company_name}</div>
                        <div>{item.position}</div>
                        <div>{time}</div>
                        <div>{item.description}</div>
                    </div>

                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <label>
                            <Toggle
                                id="isPublic"
                                defaultChecked={isPublic}
                                onChange={(e) => this.handlePublicChanged(e)} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export class EducationElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            major: "",
            school_name: "",
            isPublic: this.props.item.isPublic[0].isPublic
        }
    }

    getSchool = () => {
        const { item } = this.props;
        const token = localStorage.getItem('token');
        if (token && item.school_name) {
            request
                .get(`/api/school/${item.school_name}`)
                .end((error, res) => {
                    if (!error) {
                        var school = res.body.school;
                        this.setState({ school_name: school.name });
                    }
                    else {
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
                });
        }
    }

    getMajor = () => {
        const { item } = this.props;
        const token = localStorage.getItem('token');
        if (token && item.major) {
            request
                .get('/api/field/field3/' + item.major)
                .end((error, res) => {
                    if (!error) {
                        var major = res.body.result;
                        this.setState({ major: major.viName });
                    }
                    else {
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
                })
        }
    }

    handlePublicChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isPublic: value });
    }

    componentWillMount() {
        this.getSchool();
        this.getMajor();
    }

    render() {
        const { item } = this.props;
        const { isPublic } = this.state;
        const { school_name, major } = this.state;
        const start_time = item.start;
        const end_time = (item.isActive === true) ? " - Hiện nay" : " - " + item.end;
        const time = start_time + end_time;
        return (
            <div className="item-row" id={item._id} data-state={isPublic} data-type={ITEM_TYPE.EDUCATION}>
                <div className="row padding-top-25" key={item._id}>
                    <div className="col-md-1 col-sm-1 col-xs-1">

                    </div>

                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <div className="profile-school">{school_name}</div>
                        <div>{major}</div>
                        <div>{time}</div>
                        <div>{item.description}</div>
                    </div>

                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <label>
                            <Toggle
                                id="isPublic"
                                defaultChecked={isPublic}
                                onChange={(e) => this.handlePublicChanged(e)} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export class ProjectElement extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isPublic: this.props.item.isPublic[0].isPublic
        }
    }
    
    handlePublicChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isPublic: value });
    }

    render() {
        const { item } = this.props;
        const { isPublic } = this.state;
        const start_time = item.start.month + "/" + item.start.year;
        const end_time = (item.isActive === true) ? " - Hiện nay" : " - " + item.end.month + "/" + item.end.year;
        const time = start_time + end_time;
        return (
            <div className="item-row" id={item._id} data-state={isPublic} data-type={ITEM_TYPE.PROJECT}>
                <div className="row padding-top-25" key={item._id}>
                    <div className="col-md-1 col-sm-1 col-xs-1">

                    </div>

                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <div className="profile-school">{item.project_name}</div>
                        <div>{item.position}</div>
                        <div>{time}</div>
                        <div>{item.description}</div>
                    </div>

                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <label>
                            <Toggle
                                id="isPublic"
                                defaultChecked={isPublic}
                                onChange={(e) => this.handlePublicChanged(e)} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export class LanguageElement extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isPublic: this.props.item.isPublic[0].isPublic
        }
    }
    
    handlePublicChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isPublic: value });
    }
    
    render() {
        const { item } = this.props;
        const { isPublic } = this.state;
        return (
            <div className="item-row" id={item._id} data-state={isPublic} data-type={ITEM_TYPE.LANGUAGE}>
                <div className="row padding-top-25" key={item._id}>
                    <div className="col-md-1 col-sm-1 col-xs-1">

                    </div>

                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <div className="profile-school">{item.language_name}</div>
                        <div>{item.level}</div>
                    </div>

                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <label>
                            <Toggle
                                id="isPublic"
                                defaultChecked={isPublic}
                                onChange={(e) => this.handlePublicChanged(e)} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export class SkillElement extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isPublic: this.props.item.isPublic[0].isPublic
        }
    }
    
    handlePublicChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isPublic: value });
    }
    
    render() {
        const { item } = this.props;
        const { isPublic } = this.state;
        return (
            <div className="item-row" id={item._id} data-state={isPublic} data-type={ITEM_TYPE.SKILL}>
                <div className="row padding-top-25" key={item._id}>
                    <div className="col-md-1 col-sm-1 col-xs-1">

                    </div>

                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <div className="profile-school">{item.skill_name.join(', ')}</div>
                    </div>

                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <label>
                            <Toggle
                                id="isPublic"
                                defaultChecked={isPublic}
                                onChange={(e) => this.handlePublicChanged(e)} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export class PublicationElement extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isPublic: this.props.item.isPublic[0].isPublic
        }
    }
    
    handlePublicChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isPublic: value });
    }
    
    render() {
        const { item } = this.props;
        const { isPublic } = this.state;
        return (
            <div className="item-row" id={item._id} data-state={isPublic} data-type={ITEM_TYPE.PUBLICATION}>
                <div className="row padding-top-25" key={item._id}>
                    <div className="col-md-1 col-sm-1 col-xs-1">

                    </div>

                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <div className="profile-school">{item.publication_name}</div>
                        <div>{item.publisher}</div>
                        <div>{moment(item.publishedDate).format("DD/MM/YYYY")}</div>
                        <div>Tác giả đồng xuất bản: {item.coAuthor.join(" - ")}</div>
                    </div>

                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <label>
                            <Toggle
                                id="isPublic"
                                defaultChecked={isPublic}
                                onChange={(e) => this.handlePublicChanged(e)} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export class ActivityElement extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isPublic: this.props.item.isPublic[0].isPublic
        }
    }
    
    handlePublicChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isPublic: value });
    }
    
    render() {
        const { item } = this.props;
        const { isPublic } = this.state;
        const start_time = item.start.month + "/" + item.start.year;
        const end_time = (item.end.year === "") ? " - Hiện nay" : " - " + item.end.month + "/" + item.end.year;
        const time = start_time + end_time;
        return (
            <div className="item-row" id={item._id} data-state={isPublic} data-type={ITEM_TYPE.ACTIVITY}>
                <div className="row padding-top-25" key={item._id}>
                    <div className="col-md-1 col-sm-1 col-xs-1">

                    </div>

                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <div className="profile-school">{item.activity_name}</div>
                        <div>{item.position}</div>
                        <div>{time}</div>
                    </div>

                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <label>
                            <Toggle
                                id="isPublic"
                                defaultChecked={isPublic}
                                onChange={(e) => this.handlePublicChanged(e)} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export class AwardElement extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isPublic: this.props.item.isPublic[0].isPublic
        }
    }
    
    handlePublicChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isPublic: value });
    }
    
    render() {
        const { item } = this.props;
        const { isPublic } = this.state;
        return (
            <div className="item-row" id={item._id} data-state={isPublic} data-type={ITEM_TYPE.AWARD}>
                <div className="row padding-top-25" key={item._id}>
                    <div className="col-md-1 col-sm-1 col-xs-1">

                    </div>

                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <div className="profile-school">{item.award_name}</div>
                        <div>{item.associateWith}</div>
                        <div>{item.issuer}</div>
                        <div>{item.month}/{item.year}</div>
                        <div>{item.description}</div>
                    </div>

                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <label>
                            <Toggle
                                id="isPublic"
                                defaultChecked={isPublic}
                                onChange={(e) => this.handlePublicChanged(e)} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export class CourseElement extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isPublic: this.props.item.isPublic[0].isPublic
        }
    }
    
    handlePublicChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isPublic: value });
    }
    
    render() {
        const { item } = this.props;
        const { isPublic } = this.state;
        return (
            <div className="item-row" id={item._id} data-state={isPublic} data-type={ITEM_TYPE.COURSE}>
                <div className="row padding-top-25" key={item._id}>
                    <div className="col-md-1 col-sm-1 col-xs-1">

                    </div>

                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <div className="profile-school">{item.course_name}</div>
                        <div>{item.associateWith}</div>
                    </div>

                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <label>
                            <Toggle
                                id="isPublic"
                                defaultChecked={isPublic}
                                onChange={(e) => this.handlePublicChanged(e)} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export class BasicInfoElement extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isPublic: this.props.item.isPublic[0].isPublic
        }
    }
    
    handlePublicChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isPublic: value });
    }
    
    render() {
        const { item } = this.props;
        const { isPublic } = this.state;
        return (
            <div className="item-row" id={item._id} data-state={isPublic} data-type={ITEM_TYPE.BASICINFO}>
                <div className="row padding-top-25">
                    <div className="col-sm-6 col-xs-12">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-4">
                                Email
                </div>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                {item.email}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-4">
                                Địa chỉ
                </div>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                {(item.address) ?
                                    (<span>{item.address.streetNumber} {item.address.ward} {item.address.district} {item.address.province}</span>)
                                    : ""}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-4">
                                Ngày sinh
                </div>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                {moment(item.birthdate).format("DD/MM/YYYY")}
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-xs-12">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-4">
                                Website
                </div>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                {item.website}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-4">
                                Số điện thoại
                </div>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                {item.phone}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-4">
                                Giới tính
                </div>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                {item.gender}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class CertificateElement extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isPublic: this.props.item.isPublic[0].isPublic
        }
    }
    
    handlePublicChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isPublic: value });
    }
    
    render() {
        const { item } = this.props;
        const { isPublic } = this.state;
        return (
            <div className="item-row" id={item._id} data-state={isPublic} data-type={ITEM_TYPE.CERTIFICATE}>
                <div className="row padding-top-25" key={item._id}>
                    <div className="col-md-1 col-sm-1 col-xs-1">

                    </div>

                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <div className="profile-school">{item.certificate_name}</div>
                        <div>{item.classification}</div>
                    </div>

                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <label>
                            <Toggle
                                id="isPublic"
                                defaultChecked={isPublic}
                                onChange={(e) => this.handlePublicChanged(e)} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export class MiddlemanElement extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isPublic: this.props.item.isPublic[0].isPublic
        }
    }
    
    handlePublicChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isPublic: value });
    }
    
    render() {
        const { item } = this.props;
        const { isPublic } = this.state;
        return (
            <div className="item-row" id={item._id} data-state={isPublic} data-type={ITEM_TYPE.MIDDLEMAN}>
                <div className="row padding-top-25" key={item._id}>
                    <div className="col-md-1 col-sm-1 col-xs-1">

                    </div>

                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <div className="profile-school">{item.fullName}</div>
                        <div>{item.jobField}</div>
                        <div>{item.email}</div>
                        <div>{item.phoneNo}</div>
                    </div>

                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <label>
                            <Toggle
                                id="isPublic"
                                defaultChecked={isPublic}
                                onChange={(e) => this.handlePublicChanged(e)} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}