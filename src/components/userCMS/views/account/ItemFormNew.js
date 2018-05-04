import React, { Component } from 'react';
import request from 'superagent';
import { monthOptions, yearOptions } from '../../../../commons/constants';

// import Select, { Creatable } from 'react-select';
// import 'react-select/dist/react-select.css';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

import Toggle from 'react-toggle'
import "react-toggle/style.css"

import { languageArr } from '../../../../commons/constants';
import swal from 'sweetalert2';

const $ = window.jQuery;

const MIN_YEAR = 0;
const MAX_YEAR = 15;

export class EducationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobFieldOptions: [],
            school_name: [],
            isLoadingField3: true,
            isLoadingSchool: true,
        }
    }

    getSchools = () => {
        const token = localStorage.getItem('token');
        if (token) {
            request
                .get('/api/school/')
                .end((error, res) => {
                    if (!error) {
                        var data = res.body.schools;
                        this.setState({ school_name: data, isLoadingSchool: false });
                    }
                    else {
                        swal({
                            title: 'Có lỗi xảy ra. Vui lòng thử lại sau.',
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

    getField3 = () => {
        request
            .get('/api/field/field3Options')
            .end((err, res) => {
                var data = [];
                res.body.results.forEach(function (item) {
                    var obj = {};
                    obj.label = item.viName;
                    obj.value = item.code;
                    data.push(obj);
                }, this);
                this.setState({ jobFieldOptions: data, isLoadingField3: false });
            })
    }

    hiddenEnd = (isActive) => {
        if (isActive) {
            $('#end').hide();
            $('label[for="end"]').hide();
        }
    }

    componentDidMount() {
        const { item } = this.props;
        this.getSchools();
        this.getField3();
        this.hiddenEnd(item.isActive);
    }

    render() {
        const { item, handleChanged } = this.props;
        const { jobFieldOptions, school_name, isLoadingField3, isLoadingSchool } = this.state;
        return (
            <div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <h1>Học vấn</h1>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Trường</label>
                    <div className="col-sm-10">
                        <Select
                            className="profile-select"
                            value={item.school_name}
                            options={school_name}
                            onChange={(e) => handleChanged(e, "school")}
                            placeholder="Chọn trường"
                            isLoading={isLoadingSchool}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Chuyên ngành</label>
                    <div className="col-sm-10">
                        <Select
                            className="profile-select"
                            value={item.major}
                            options={jobFieldOptions}
                            onChange={(e) => handleChanged(e, "major")}
                            placeholder="Chọn chuyên ngành"
                            isLoading={isLoadingField3}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Điểm</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="grade"
                            value={item.grade}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "grade")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Năm bắt đầu</label>
                    <div className="col-sm-4">
                        <Select
                            className="profile-select"
                            value={item.start}
                            options={yearOptions()}
                            onChange={(e) => handleChanged(e, "start")}
                            placeholder="Chọn năm"
                        />
                    </div>

                    <label className="col-sm-2 control-label" htmlFor="end">Năm kết thúc</label>
                    <div className="col-sm-4" id="end">
                        <Select
                            className="profile-select"
                            value={item.end}
                            options={yearOptions()}
                            onChange={(e) => handleChanged(e, "end")}
                            placeholder="Chọn năm"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isActive"
                            defaultChecked={item.isActive}
                            onChange={(e) => handleChanged(e, "isActive")} />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isActive">Tôi đang học tại đây</label>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Giới thiệu</label>
                    <div className="col-sm-10">
                        <textarea rows="5"
                            name="description"
                            value={item.description}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "description")}>
                        </textarea>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isPublic"
                            defaultChecked={item.isPublic}
                            onChange={(e) => handleChanged(e, "isPublic")} />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isPublic">Tôi muốn công khai thông tin này</label>
                </div>
            </div>
        )
    }
}

export class ExperienceForm extends Component {
    hiddenEnd = (isActive) => {
        if (isActive) {
            $('label[for="end"]').parent().hide();
        }
    }

    componentDidMount() {
        const { item } = this.props;
        this.hiddenEnd(item.isActive);
    }

    render() {
        const { item, handleChanged } = this.props;
        var start = (item.start) ? item.start : { month: "", year: "" };
        var end = (item.end) ? item.end : { month: "", year: "" };
        return (
            <div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <h1>Kinh nghiệm làm việc</h1>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Vị trí</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="title"
                            value={item.position}
                            className="form-control"
                            placeholder="Vị trí công việc"
                            onChange={(e) => handleChanged(e, "position")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Công ty</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="company"
                            value={item.company_name}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "company")} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Địa điểm</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="location"
                            value={item.location}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "location")} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Bắt đầu</label>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={start.month}
                            options={monthOptions}
                            onChange={(e) => handleChanged(e, "startMonth")}
                            placeholder="Chọn tháng"
                        />
                    </div>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={start.year}
                            options={yearOptions()}
                            onChange={(e) => handleChanged(e, "startYear")}
                            placeholder="Chọn năm"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="end">Kết thúc</label>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={end.month}
                            options={monthOptions}
                            onChange={(e) => handleChanged(e, "endMonth")}
                            placeholder="Chọn tháng"
                        />
                    </div>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={end.year}
                            options={yearOptions()}
                            onChange={(e) => handleChanged(e, "endYear")}
                            placeholder="Chọn năm"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isActive"
                            defaultChecked={item.isActive}
                            onChange={(e) => handleChanged(e, "isActive")} />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isActive">Tôi đang làm việc tại đây</label>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Giới thiệu</label>
                    <div className="col-sm-10">
                        <textarea rows="5"
                            name="description"
                            value={item.description}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "description")}>
                        </textarea>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isPublic"
                            defaultChecked={item.isPublic}
                            onChange={(e) => handleChanged(e, "isPublic")} />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isPublic">Tôi muốn công khai thông tin này</label>
                </div>
            </div>
        )
    }
}

export class ProjectForm extends Component {
    hiddenEnd = (isActive) => {
        if (isActive) {
            $('label[for="end"]').parent().hide();
        }
    }

    componentDidMount() {
        const { item } = this.props;
        this.hiddenEnd(item.isActive);
    }

    render() {
        const { item, handleChanged } = this.props;
        var start = (item.start) ? item.start : { month: "", year: "" };
        var end = (item.end) ? item.end : { month: "", year: "" };
        return (
            <div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <h1>Dự án</h1>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Dự án</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="project"
                            value={item.project_name}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "project")} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Vai trò</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="project"
                            value={item.position}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "position")} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Bắt đầu</label>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={start.month}
                            options={monthOptions}
                            onChange={(e) => handleChanged(e, "startMonth")}
                            placeholder="Chọn tháng"
                        />
                    </div>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={start.year}
                            options={yearOptions()}
                            onChange={(e) => handleChanged(e, "startYear")}
                            placeholder="Chọn năm"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="end">Kết thúc</label>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={end.month}
                            options={monthOptions}
                            onChange={(e) => handleChanged(e, "endMonth")}
                            placeholder="Chọn tháng"
                        />
                    </div>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={end.year}
                            options={yearOptions()}
                            onChange={(e) => handleChanged(e, "endYear")}
                            placeholder="Chọn năm"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isActive"
                            defaultChecked={item.isActive}
                            onChange={(e) => handleChanged(e, "isActive")} />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isActive">Tôi đang tham gia dự án này</label>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Giới thiệu</label>
                    <div className="col-sm-10">
                        <textarea rows="5"
                            name="description"
                            value={item.description}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "description")}>
                        </textarea>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isPublic"
                            defaultChecked={item.isPublic}
                            onChange={(e) => handleChanged(e, "isPublic")} />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isPublic">Tôi muốn công khai thông tin này</label>
                </div>
            </div>
        )
    }
}

export class ActivityForm extends Component {
    hiddenEnd = (isActive) => {
        if (isActive) {
            $('label[for="end"]').parent().hide();
        }
    }

    componentDidMount() {
        const { item } = this.props;
        this.hiddenEnd(item.isActive);
    }

    render() {
        const { item, handleChanged } = this.props;
        var start = (item.start) ? item.start : { month: "", year: "" };
        var end = (item.end) ? item.end : { month: "", year: "" };
        return (
            <div>
                <div className="form-group">
                    <h1>Hoạt động</h1>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Vai trò</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="role"
                            value={item.role}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "role")} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Tên hoạt động</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="activity"
                            value={item.activity_name}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "activity")} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Bắt đầu</label>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={start.month}
                            options={monthOptions}
                            onChange={(e) => handleChanged(e, "startMonth")}
                            placeholder="Chọn tháng"
                        />
                    </div>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={start.year}
                            options={yearOptions()}
                            onChange={(e) => handleChanged(e, "startYear")}
                            placeholder="Chọn năm"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="end">Kết thúc</label>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={end.month}
                            options={monthOptions}
                            onChange={(e) => handleChanged(e, "endMonth")}
                            placeholder="Chọn tháng"
                        />
                    </div>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={end.year}
                            options={yearOptions()}
                            onChange={(e) => handleChanged(e, "endYear")}
                            placeholder="Chọn năm"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isActive"
                            defaultChecked={item.isActive}
                            onChange={(e) => handleChanged(e, "isActive")} />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isActive">Tôi đang tham gia hoạt động</label>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isPublic"
                            defaultChecked={item.isPublic}
                            onChange={(e) => handleChanged(e, "isPublic")} />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isPublic">Tôi muốn công khai thông tin này</label>
                </div>
            </div>
        )
    }
}

export class CourseForm extends Component {
    render() {
        const { item, handleChanged } = this.props;
        return (
            <div>
                <div className="form-group">
                    <h1>Khóa học</h1>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Đơn vị tổ chức</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="associateWith"
                            value={item.associateWith}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "associateWith")} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Tên khóa học</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="course"
                            value={item.course_name}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "course")} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isPublic"
                            defaultChecked={item.isPublic}
                            onChange={(e) => handleChanged(e, "isPublic")} />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isPublic">Tôi muốn công khai thông tin này</label>
                </div>
            </div>
        )
    }
}

export class PublicationForm extends Component {
    render() {
        const { item, handleChanged } = this.props;
        return (
            <div>
                <div className="form-group">
                    <h1>Báo xuất bản</h1>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Nhà xuất bản</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="publisher"
                            value={item.publisher}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "publisher")} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Tên báo</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="publication"
                            value={item.publication_name}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "publication")} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Ngày xuất bản</label>
                    <div className="col-sm-10">
                        <Datetime
                            value={new Date(item.publishedDate)}
                            defaultValue={new Date()}
                            dateFormat="DD/MM/YYYY"
                            timeFormat={false}
                            onChange={(e) => handleChanged(e, "publishedDate")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Đồng xuất bản</label>
                    <div className="col-sm-10">
                        <TagsInput
                            value={item.coAuthor}
                            onChange={(e) => handleChanged(e, "coAuthor")}
                            addKeys={[9, 13, 188]}
                            maxTags={9}
                            onlyUnique={true}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isPublic"
                            defaultChecked={item.isPublic}
                            onChange={(e) => handleChanged(e, "isPublic")} />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isPublic">Tôi muốn công khai thông tin này</label>
                </div>
            </div>
        )
    }
}

export class SkillForm extends Component {
    render() {
        const { item, handleChanged } = this.props;
        return (
            <div>
                <div className="form-group">
                    <h1>Kỹ năng</h1>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Kỹ năng</label>
                    <div className="col-sm-10">
                        <TagsInput
                            value={item.skill_name}
                            onChange={(e) => handleChanged(e, "skill")}
                            addKeys={[9, 13, 188]}
                            maxTags={9}
                            onlyUnique={true}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isPublic"
                            defaultChecked={item.isPublic}
                            onChange={(e) => handleChanged(e, "isPublic")} />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isPublic">Tôi muốn công khai thông tin này</label>
                </div>
            </div>
        )
    }
}

export class AwardForm extends Component {
    render() {
        const { item, handleChanged } = this.props;
        return (
            <div>
                <div className="form-group">
                    <h1>Giải thưởng</h1>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Tên giải thưởng</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="award_name"
                            value={item.award_name}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "award")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Nơi tổ chức</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="associateWith"
                            value={item.associateWith}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "associateWith")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Đơn vị tổ chức</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="issuer"
                            value={item.issuer}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "issuer")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Thời gian nhận</label>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={item.month}
                            options={monthOptions}
                            onChange={(e) => handleChanged(e, "month")}
                            placeholder="Chọn tháng"
                        />
                    </div>
                    <div className="col-sm-5">
                        <Select
                            className="profile-select"
                            value={item.year}
                            options={yearOptions()}
                            onChange={(e) => handleChanged(e, "year")}
                            placeholder="Chọn năm"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Giới thiệu</label>
                    <div className="col-sm-10">
                        <textarea rows="5"
                            name="description"
                            value={item.description}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "description")}>
                        </textarea>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isPublic"
                            defaultChecked={item.isPublic}
                            onChange={(e) => handleChanged(e, "isPublic")}
                        />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isPublic">Tôi muốn công khai thông tin này</label>
                </div>
            </div>
        )
    }
}

export class LanguageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languageOptions: []
        }
    }

    setOptions = (arr) => {
        var options = [];
        arr.forEach(function (item) {
            var obj = {};
            obj.label = item;
            obj.value = item;
            options.push(obj);
        }, this);
        this.setState({ languageOptions: options });
    }

    componentWillMount() {
        this.setOptions(languageArr);
    }

    render() {
        const { item, handleChanged } = this.props;
        const { languageOptions } = this.state;
        return (
            <div>
                <div className="form-group">
                    <h1>Ngôn ngữ</h1>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Ngôn ngữ</label>
                    <div className="col-sm-10">
                        <Select
                            className="profile-select"
                            id="language"
                            value={item.language_name}
                            options={languageOptions}
                            placeholder="Chọn ngôn ngữ"
                            onChange={(e) => handleChanged(e, "language")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Trình độ</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="level"
                            value={item.level}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "level")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isPublic"
                            defaultChecked={item.isPublic}
                            onChange={(e) => handleChanged(e, "isPublic")}
                        />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isPublic">Tôi muốn công khai thông tin này</label>
                </div>
            </div>
        )
    }
}

export class BasicInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobFieldOptions: [],
            isLoadingJobField: true
        }
    }

    getField3 = () => {
        request
            .get('/api/field/field3Options')
            .end((err, res) => {
                var data = [];
                res.body.results.forEach(function (item) {
                    var obj = {};
                    obj.label = item.viName;
                    obj.value = item.code;
                    data.push(obj);
                }, this);
                this.setState({ jobFieldOptions: data, isLoadingJobField: false });
            })
    }

    componentWillMount() {
        this.getField3();
    }

    render() {
        const { item, handleChanged } = this.props;
        const { jobFieldOptions, isLoadingJobField } = this.state;
        return (
            <div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <h1>Thông tin chung</h1>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="email"
                            value={item.email}
                            className="form-control"
                            disabled
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Họ</label>
                    <div className="col-sm-4">
                        <input type="text"
                            name="lastname"
                            value={item.lastname}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "lastname")}
                        />
                    </div>

                    <label className="col-sm-2 control-label">Tên</label>
                    <div className="col-sm-4">
                        <input type="text"
                            name="firstname"
                            value={item.firstname}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "firstname")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Tỉnh/ Thành phố</label>
                    <div className="col-sm-4">
                        <Select
                            className="profile-select"
                            value={item.province}
                            options={item.provinceOptions}
                            onChange={(e) => handleChanged(e, "province")}
                            placeholder="Tỉnh/ thành phố"
                            isLoading={item.isLoadingProvince}
                        />
                    </div>

                    <label className="col-sm-2 control-label">Quận/ Huyện</label>
                    <div className="col-sm-4">
                        <Select
                            className="profile-select"
                            value={item.district}
                            options={item.districtOptions}
                            onChange={(e) => handleChanged(e, "district")}
                            placeholder="Quận/ huyện"
                            isLoading={item.isLoadingDistrict}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Phường/ Xã</label>
                    <div className="col-sm-4">
                        <input type="text"
                            name="ward"
                            value={item.ward}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "ward")}
                            placeholder="Ví dụ: phường 3"
                        />
                    </div>

                    <label className="col-sm-2 control-label">Đường</label>
                    <div className="col-sm-4">
                        <input type="text"
                            name="streetNo"
                            value={item.streetNo}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "streetNo")}
                            placeholder="Ví dụ: 15 Nguyễn Thái Học"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Website</label>
                    <div className="col-sm-4">
                        <input type="text"
                            name="website"
                            value={item.website}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "website")}
                        />
                    </div>

                    <label className="col-sm-2 control-label">Số điện thoại</label>
                    <div className="col-sm-4">
                        <input type="text"
                            name="phone"
                            value={item.phone}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "phone")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="gender" className="col-sm-2 control-label">Giới tính</label>
                    <div className="col-sm-10">
                        <label className="radio-inline">
                            <input type="radio" checked={item.gender === "Không xác định"} name="optradio" value="Không xác định" onChange={(e) => handleChanged(e, "gender")} />Không xác định
                        </label>
                        <label className="radio-inline">
                            <input type="radio" checked={item.gender === "Nam"} name="optradio" value="Nam" onChange={(e) => handleChanged(e, "gender")} />Nam
                            </label>
                        <label className="radio-inline">
                            <input type="radio" checked={item.gender === "Nữ"} name="optradio" value="Nữ" onChange={(e) => handleChanged(e, "gender")} />Nữ
                            </label>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Ngày sinh</label>
                    <div className="col-sm-10">
                        <Datetime
                            value={new Date(item.birthdate)}
                            defaultValue={new Date()}
                            dateFormat="DD/MM/YYYY"
                            timeFormat={false}
                            onChange={(e) => handleChanged(e, "birthdate")}
                        />
                    </div>
                </div>
                <hr />

                <div className="form-group">
                    <div className="col-sm-12">
                        <h1>Công việc hiện tại</h1>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Chuyên ngành</label>
                    <div className="col-sm-10">
                        <Select
                            className="profile-select"
                            value={item.jobField}
                            options={jobFieldOptions}
                            onChange={(e) => handleChanged(e, "jobField")}
                            placeholder="Chọn chuyên ngành"
                            isLoading={isLoadingJobField}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Vị trí</label>
                    <div className="col-sm-10">
                        <TagsInput
                            value={item.positions}
                            onChange={(e) => handleChanged(e, "position")}
                            addKeys={[9, 13, 188]}
                            maxTags={5}
                            onlyUnique={true}
                        />
                        <p>Nhấn nút "Enter", "Tab" hoặc "," để lưu tag phía trên</p>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Kinh nghiệm</label>
                    <div className="col-sm-5">
                        <Slider
                            value={item.experience}
                            min={MIN_YEAR}
                            max={MAX_YEAR}
                            onChange={(e) => handleChanged(e, "experience")}
                        />
                    </div>
                    <div className="col-sm-5">
                        <p>
                            <strong><span id="experience-field">{(item.experience) ? item.experience : 0}</span></strong> năm
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export class CertificateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            degreeOptions: []
        }
    }

    getDegrees = () => {
        const token = localStorage.getItem('token');
        if (token) {
            request
                .get('api/userCV/get-degrees')
                .end((error, res) => {
                    if (res.body.success) {
                        var data = [];
                        res.body.degrees.forEach(function (item) {
                            var obj = {};
                            obj.label = item.name;
                            obj.value = item._id.toString();
                            data.push(obj);
                        }, this);
                        this.setState({ degreeOptions: data });
                    }
                    else {
                        swal({
                            title: 'Có lỗi xảy ra. Vui lòng thử lại sau.',
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

    componentWillMount() {
        this.getDegrees();
    }

    render() {
        const { item, handleChanged } = this.props;
        const { degreeOptions } = this.state;
        console.log(item.associateWith);
        return (
            <div>
                <div className="form-group">
                    <h1>Bằng cấp</h1>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Đơn vị cấp bằng</label>
                    <div className="col-sm-9">
                        <input type="text"
                            name="associateWith"
                            value={item.associateWith}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "associateWith")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Tên bằng cấp</label>
                    <div className="col-sm-9">
                        <input type="text"
                            name="certificate"
                            value={item.certificate_name}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "certificate")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Loại bằng cấp</label>
                    <div className="col-sm-9">
                        <Select
                            className="profile-select"
                            value={item.degree}
                            options={degreeOptions}
                            onChange={(e) => handleChanged(e, "degree")}
                            placeholder="Chọn loại bằng"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Ngày nhận</label>
                    <div className="col-sm-9">
                        <Datetime
                            value={new Date(item.receivedDate)}
                            defaultValue={new Date()}
                            dateFormat="DD/MM/YYYY"
                            timeFormat={false}
                            onChange={(e) => handleChanged(e, "receivedDate")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Kết quả (hoặc điểm)</label>
                    <div className="col-sm-9">
                        <input type="text"
                            name="result"
                            value={item.result}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "result")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Xếp loại</label>
                    <div className="col-sm-9">
                        <input type="text"
                            name="classification"
                            value={item.classification}
                            className="form-control"
                            onChange={(e) => handleChanged(e, "classification")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">
                        <Toggle
                            id="isPublic"
                            defaultChecked={item.isPublic}
                            onChange={(e) => handleChanged(e, "isPublic")} />
                    </label>
                    <label className="control-label col-sm-9 text-left" htmlFor="isPublic">Tôi muốn công khai thông tin này</label>
                </div>
            </div>
        )
    }
}

export class MiddlemanForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            jobFieldOptions: []
        }
    }
    
    getField3 = () => {
        request
            .get('/api/field/field3Options')
            .end((err, res) => {
                var data = [];
                res.body.results.forEach(function (item) {
                    var obj = {};
                    obj.label = item.viName;
                    obj.value = item.code;
                    data.push(obj);
                }, this);
                this.setState({ jobFieldOptions: data });
            })
    }

    render() {
        const { item, handleChanged } = this.props;
        const { jobFieldOptions } = this.state;
        return (
            <div>
                <div className="form-group">
                    <h1>Người giới thiệu</h1>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Họ và tên</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="fullName"
                            value={item.fullName}
                            className="form-control"
                            placeholder="Họ và tên"
                            onChange={(e) => handleChanged(e, "fullName")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Nghề nghiệp</label>
                    <div className="col-sm-10">
                        <Select
                            className="profile-select"
                            value={item.jobField}
                            options={jobFieldOptions}
                            onChange={(e) => handleChanged(e, "jobField")}
                            placeholder="Nghề nghiệp"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="email"
                            value={item.email}
                            className="form-control"
                            placeholder="Email"
                            onChange={(e) => handleChanged(e, "email")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Điện thoại</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="phoneNo"
                            value={item.phoneNo}
                            className="form-control"
                            placeholder="Số điện thoại"
                            onChange={(e) => handleChanged(e, "phoneNo")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">
                        <Toggle
                            id="isPublic"
                            defaultChecked={item.isPublic}
                            onChange={(e) => handleChanged(e, "isPublic")} />
                    </label>
                    <label className="control-label col-sm-10 text-left" htmlFor="isPublic">Tôi muốn công khai thông tin này</label>
                </div>
            </div>
        )
    }
}

export class EventOrgForm extends Component {
    render() {
        
        return (
            <div>
                <p> Thời gian sự kiện :  {this.props.time} </p>
                <p> Nội dung sự kiện : {this.props.content}</p>
            </div>
        )
    }
}
