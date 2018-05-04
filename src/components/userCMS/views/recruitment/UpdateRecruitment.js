/* eslint-disable */
import React from 'react';
import { browserHistory } from 'react-router';
import { getProvinces, getDistricts } from '../../../../commons/share';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import request from 'superagent';

import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';

import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

import Datetime from 'react-datetime';
import moment from 'moment';

import TinyMCE from 'react-tinymce';

import Toggle from 'react-toggle'
import "react-toggle/style.css"

import { jobTypeArr, educationLevel, languageArr, genderArr } from '../../../../commons/constants';
import swal from 'sweetalert2';

const $ = window.jQuery;
const MIN_AGE = 18;
const MAX_AGE = 65;
const MIN_YEAR = 0;
const MAX_YEAR = 15;
const MIN_SALARY = 3;
const MAX_SALARY = 15;

export default class RecruitmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",

            quantity: 1,
            content: "",

            jobType: [],
            languages: [],
            gender: "Không yêu cầu",
            atLeastDegree: "Không yêu cầu",
            field1: "",
            fieldName: [],
            skills: [],
            positions: [],

            jobTypeOptions: [],
            languageOptions: [],
            genderOptions: [],
            atLeastDegreeOptions: [],
            field1Options: [],
            field2Options: [],
            fieldNameOptions: [],

            minAge: 25,
            maxAge: 40,
            age: [25, 40],

            minSalary: 4,
            maxSalary: 10,
            salary: [4, 10],

            minExperience: 1,
            benefit: "",
            startDate: "",
            endDate: "",
            applications: ["Hồ sơ cá nhân"],

            districtOptions: [],
            provinceOptions: [],
            isLoadingProvince: true,
            isLoadingDistrict: false,

            streetNumber: "",
            ward: "",
            district: "",
            province: "",

            organizationDistrictOptions: [],
            isLoadingOrganizationProvince: true,
            isLoadingOrganizationDistrict: false,
            organizationOptions: [],
            chosenOrganization: null,
            isToggleOrganization: true,
            organizationTitle: "",
            organizationDescription: "",
            organizationStreetNumber: "",
            organizationWard: "",
            organizationDistrict: "",
            organizationProvince: "",

            isReceivedEmail: false
        }
    }

    // index => 1: jobType, 2: language, 3: gender, 4: atLeastDegree
    setOptions = (arr, index) => {
        var options = [];
        arr.forEach(function (item) {
            var obj = {};
            obj.label = item;
            obj.value = item;
            options.push(obj);
        }, this);
        switch (index) {
            case 1:
                this.setState({ jobTypeOptions: options });
                break;
            case 2:
                this.setState({ languageOptions: options });
                break;
            case 3:
                this.setState({ genderOptions: options });
                break;
            case 4:
                this.setState({ atLeastDegreeOptions: options });
                break;
            default:
                break;
        }
    }

    mapOrganization = (organizations) => {
        const orgsMap = organizations.map(elem => {
            return { label: elem.name, value: elem._id };
        });
        this.setState({ organizationOptions: orgsMap });
    }

    

    

    getField1 = () => {
        request
            .get('/api/field/field1')
            .end((error, res) => {
                var data = [];
                res.body.results.forEach(function (item) {
                    var obj = {};
                    obj.label = item.viName;
                    obj.value = item.code;
                    data.push(obj);
                }, this);
                this.setState({ field1Options: data });
            })
    }

    getField2 = (parentCode) => {
        request
            .get('/api/field/field2?parentCode=' + parentCode)
            .end((error, res) => {
                var data = [];
                res.body.results.forEach(function (item) {
                    var obj = {};
                    obj.label = item.viName;
                    obj.value = item.code;
                    data.push(obj);
                }, this);
                this.setState({ field2Options: data }, () => {
                    var arr = this.state.field2Options;
                    for (var i = 0; i < arr.length; i++) {
                        this.getField3(arr[i].value, arr[i].label);
                    }
                });
            })
    }

    getField3 = (parentCode, parentViName) => {
        this.setState({ fieldNameOptions: [] }, () => {
            request
                .get('/api/field/field3?parentCode=' + parentCode)
                .end((error, res) => {
                    var data = [];
                    res.body.results.forEach(function (item) {
                        var obj = {};
                        obj.label = item.viName;
                        obj.value = item.code;
                        data.push(obj);
                    }, this);
                    var obj = { label: parentViName, options: data };
                    this.setState({ fieldNameOptions: this.state.fieldNameOptions.concat(obj) });
                })
        });
    }

    getRecruitment = (id) => {
        request
            .get(`/api/recruitment/${id}`)
            .query({ mode: "update" })
            .end((error, res) => {
                const recruitment = res.body.result;
                this.setState({
                    id: recruitment._id,
                    title: recruitment.title,
                    description: recruitment.description,
                    quantity: recruitment.requirement.quantity,
                    content: recruitment.content,
                    jobType: recruitment.requirement.jobType,
                    languages: recruitment.requirement.languages,
                    gender: recruitment.requirement.gender,
                    atLeastDegree: recruitment.requirement.atLeastDegree,
                    fieldName: recruitment.requirement.fieldName,
                    skills: recruitment.requirement.skills,
                    positions: recruitment.requirement.positions,

                    minAge: recruitment.requirement.minAge,
                    maxAge: recruitment.requirement.maxAge,
                    age: [recruitment.requirement.minAge, recruitment.requirement.maxAge],

                    minSalary: recruitment.requirement.minSalary,
                    maxSalary: recruitment.requirement.maxSalary,
                    salary: [recruitment.requirement.minSalary, recruitment.requirement.maxSalary],

                    minExperience: recruitment.requirement.minExperience,
                    benefit: recruitment.benefit,
                    startDate: recruitment.startDate,
                    endDate: recruitment.endDate,

                    streetNumber: recruitment.location.streetNumber,
                    ward: recruitment.location.ward,
                    district: recruitment.location.district,
                    province: recruitment.location.province,

                    applications: recruitment.applications,
                    chosenOrganization: (recruitment._organization.id) ? recruitment._organization.id._id : null,
                    isToggleOrganization: (recruitment._organization.id) ? true : false
                }, () => {
                    const { fieldName, province, content, benefit } = this.state;
                    getDistricts(province, this);
                    if (fieldName.length > 0)
                        this.getField1ByFieldName(fieldName[0]);
                    if (content)
                        tinymce.EditorManager.get('content').setContent(content);
                    if (benefit)
                        tinymce.EditorManager.get('benefit').setContent(benefit);
                })
            })
    }

    getField1ByFieldName = (item) => {
        const code = item.slice(0, 4);
        request
            .get('/api/field/field1/' + code)
            .end((error, res) => {
                this.setState({ field1: res.body.result.code }, () => {
                    this.getField2(this.state.field1);
                });
            })
    }

    // handleChanged
    handleTitleChanged = (e) => {
        this.setState({ title: e.target.value });
    }

    handleDescriptionChanged = (e) => {
        this.setState({ description: e.target.value });
    }

    handleContentChanged = (e) => {
        this.setState({ content: e.target.getContent() });
    }

    handleBenefitChanged = (e) => {
        this.setState({ benefit: e.target.getContent() });
    }

    handlePositionChanged = (e) => {
        this.setState({ positions: e });
    }

    handleQuantityChanged = (e) => {
        this.setState({ quantity: e.target.value });
    }

    handleGenderChanged = (e) => {
        if (e)
            this.setState({ gender: e.value });
        else
            this.setState({ gender: "Không yêu cầu" });
    }

    handleAtLeastDegreeChanged = (e) => {
        if (e)
            this.setState({ atLeastDegree: e.value });
        else
            this.setState({ atLeastDegree: "Không yêu cầu" });
    }

    handleJobTypeChanged = (e) => {
        var arr = e.map(function (item) {
            return item.value;
        });
        this.setState({ jobType: arr });
    }

    handleLanguageChanged = (e) => {
        var arr = e.map(function (item) {
            return item.value;
        });
        this.setState({ languages: arr });
    }

    handleExperienceChanged = (e) => {
        this.setState({ minExperience: e });
    }

    handleSalaryChanged = (e) => {
        this.setState({ salary: e, minSalary: e[0], maxSalary: e[1] });
    }

    handleAgeChanged = (e) => {
        this.setState({ age: e, minAge: e[0], maxAge: e[1] });
    }

    handleSkillChanged = (e) => {
        this.setState({ skills: e });
    }

    handleField1Changed = (e) => {
        this.setState({ field1: e }, () => {
            var arr = this.state.field1;
            this.getField2(arr.value);
        });
    }

    handleFieldNameChanged = (e) => {
        var arr = e.map(function (item) {
            return item.value;
        });
        this.setState({ fieldName: arr });
    }

    handleStartDateChanged = (e) => {
        this.setState({ startDate: new Date(e) });
    }

    handleEndDateChanged = (e) => {
        this.setState({ endDate: new Date(e) });
    }

    handleReceivedEmailChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isReceivedEmail: value });
    }

    handleStreetNumberChanged = (e) => {
        this.setState({ streetNumber: e.target.value });
    }

    handleWardChanged = (e) => {
        this.setState({ ward: e.target.value });
    }

    handleDistrictChanged = (e) => {
        this.setState({ district: e.value });
    }

    handleProvinceChanged = (e) => {
        this.setState({ province: e.value, isLoadingDistrict: true }, () => {
            const { province } = this.state;
            getDistricts(province, this);
        });
    }

    handleApplicationChanged = (e) => {
        if (e.length > 0) {
            this.setState({ applications: e });
        }
        else {
            this.setState({ applications: ["Hồ sơ cá nhân"] });
        }
    }

    handleToggleOrganizationChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isToggleOrganization: value });
    }

    handleOrganizationChanged = (e) => {
        this.setState({ chosenOrganization: e.value });
    }

    // handleSubmited
    handleSubmited = (e) => {
        e.preventDefault();
        var { title, description, content, quantity, jobType, languages, gender, atLeastDegree, skills,
            positions, fieldName, minAge, maxAge, minSalary, maxSalary, minExperience, benefit,
            startDate, endDate, isReceivedEmail, id, streetNumber, ward, district, province, applications, chosenOrganization } = this.state;
        var options = {
            title,
            description,
            content,
            benefit,
            startDate,
            endDate,
            isReceivedEmail,
            requirement: {
                fieldName,
                positions,
                quantity,
                skills,
                jobType,
                atLeastDegree,
                minSalary,
                maxSalary,
                minAge,
                maxAge,
                minExperience,
                languages,
                gender
            },
            location: {
                streetNumber,
                ward,
                district,
                province
            },
            applications,
            _organization: {
                id: chosenOrganization
            }
        };
        console.log(options);
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            request
                .put('/api/recruitment/' + id)
                .set('x-access-token', token)
                .send(options)
                .end((err, res) => {
                    if (res.body.success) {
                        swal({
                            title: 'Cập nhật thành công',
                            type: 'success',
                            timer: 1500,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        }).then((result) => {
                            if (result.dismiss === 'timer') {
                                browserHistory.push('/user/recruitment/list');
                            }
                        })
                    }
                    else {
                        swal({
                            title: 'Cập nhật thất bại',
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
    }

    componentWillMount() {
        this.setOptions(jobTypeArr, 1);
        this.setOptions(languageArr, 2);
        this.setOptions(genderArr, 3);
        this.setOptions(educationLevel, 4);
        this.getField1();
        getProvinces(this);
        this.getRecruitment(this.props.params.id);
        this.mapOrganization(this.props.user._organizations);
    }

    render() {
        const { age, salary, minExperience } = this.state;
        const { minAge, maxAge, minSalary, maxSalary } = this.state;
        const { title, description, benefit, quantity, content, startDate, endDate, isReceivedEmail, applications } = this.state;
        const { jobTypeOptions, languageOptions, genderOptions, atLeastDegreeOptions, field1Options, fieldNameOptions, districtOptions, organizationDistrictOptions, provinceOptions, organizationOptions } = this.state;
        const { jobType, languages, gender, atLeastDegree, field1, fieldName, skills, positions, chosenOrganization } = this.state;
        const { streetNumber, ward, district, province } = this.state;
        const { isLoadingDistrict, isLoadingProvince, isToggleOrganization } = this.state;
        return (
            <div className="container-fluid">
                <form action="" className="form-horizontal">
                    <div className="form-group">
                        <div className="col-sm-12">
                            <h1>Thông tin chung</h1>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="title" className="control-label col-sm-2">Tiêu đề</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="title"
                                value={title}
                                placeholder="Nhập tiêu đề"
                                className="form-control"
                                onChange={(e) => this.handleTitleChanged(e)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="control-label col-sm-2">Giới thiệu nhà tuyển dụng</label>
                        <div className="col-sm-10">
                            <textarea
                                name="description"
                                id="description"
                                value={description}
                                rows="5"
                                placeholder="Nhập vài dòng giới thiệu"
                                className="form-control"
                                onChange={(e) => this.handleDescriptionChanged(e)}>
                            </textarea>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="position" className="control-label col-sm-2">Vị trí</label>
                        <div className="col-sm-10">
                            <TagsInput
                                value={positions}
                                onChange={(e) => this.handlePositionChanged(e)}
                                addKeys={[9, 13, 188]}
                                maxTags={5}
                                onlyUnique={true}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="quantity" className="control-label col-sm-2">Số lượng</label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                id="quantity"
                                value={quantity}
                                placeholder="Nhập số lượng"
                                className="form-control"
                                onChange={(e) => this.handleQuantityChanged(e)}
                            />
                        </div>
                        <label htmlFor="jobType" className="control-label col-sm-3">Thời gian làm việc</label>
                        <div className="col-sm-3">
                            <Select
                                className="profile-select"
                                id="jobType"
                                value={jobType}
                                multi={true}
                                options={jobTypeOptions}
                                onChange={(e) => this.handleJobTypeChanged(e)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="content" className="control-label col-sm-2">Mô tả công việc</label>
                        {/* <div className="col-sm-10">
                            <textarea
                                name="content"
                                id="content"
                                value={content}
                                rows="5"
                                placeholder="Nhập nội dung công việc"
                                className="form-control"
                                onChange={(e) => this.handleContentChanged(e)}>
                            </textarea>
                        </div> */}
                        <div className="col-sm-10">
                            <TinyMCE
                                id="content"
                                content={content}
                                config={{
                                    plugins: 'link image code media lists imagetools insertdatetime table',
                                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist | code | image media link | lists | table',
                                    // file_browser_callback: function(field_name, url, type, win) {
                                    //     win.document.getElementById(field_name).value = 'my browser value';
                                    // }
                                }}
                                onChange={this.handleContentChanged}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="workingPlace" className="control-label col-sm-2">Nơi làm việc</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="province" className="control-label col-sm-2">Tỉnh/ Thành phố</label>
                        <div className="col-sm-4">
                            <Select
                                className="profile-select"
                                id="province"
                                value={province}
                                options={provinceOptions}
                                onChange={(e) => this.handleProvinceChanged(e)}
                                isLoading={isLoadingProvince}
                            />
                        </div>
                        <label htmlFor="district" className="control-label col-sm-2">Quận/ Huyện</label>
                        <div className="col-sm-4">
                            <Select
                                className="profile-select"
                                id="district"
                                value={district}
                                options={districtOptions}
                                onChange={(e) => this.handleDistrictChanged(e)}
                                isLoading={isLoadingDistrict}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ward" className="control-label col-sm-2">Phường/ Xã</label>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                id="ward"
                                value={ward}
                                onChange={(e) => this.handleWardChanged(e)}
                            />
                        </div>
                        <label htmlFor="streetNumber" className="control-label col-sm-2">Đường</label>
                        <div className="col-sm-4">
                            <input
                                className="form-control"
                                id="streetNumber"
                                value={streetNumber}
                                onChange={(e) => this.handleStreetNumberChanged(e)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="salary" className="control-label col-sm-2">Lương</label>
                        <div className="col-sm-4">
                            <Range
                                defaultValue={salary}
                                min={MIN_SALARY}
                                max={MAX_SALARY}
                                trackStyle={[{ backgroundColor: '#3FB8AF' }]}
                                onChange={(e) => this.handleSalaryChanged(e)}
                            />
                        </div>
                        <div className="col-sm-6">
                            <p>
                                Từ <strong><span id="min-salary-field">{minSalary}</span></strong> đến <strong><span id="max-salary-field">{maxSalary}</span></strong> triệu
                            </p>
                        </div>
                    </div>
                    <hr />

                    <div className="form-group">
                        <h1>Yêu cầu</h1>
                    </div>

                    <div className="form-group">
                        <label htmlFor="field1" className="control-label col-sm-2">Lĩnh vực</label>
                        <div className="col-sm-4">
                            <Select
                                className="profile-select"
                                id="field1"
                                value={field1}
                                options={field1Options}
                                onChange={(e) => this.handleField1Changed(e)}
                                placeholder="Chọn lĩnh vực"
                            />
                        </div>
                        <label htmlFor="fieldName" className="control-label col-sm-2">Chuyên ngành</label>
                        <div className="col-sm-4">
                            <Select
                                className="profile-select"
                                id="fieldName"
                                value={fieldName}
                                multi={true}
                                options={fieldNameOptions}
                                onChange={(e) => this.handleFieldNameChanged(e)}
                                placeholder="Chọn chuyên ngành"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="atLeastDegree" className="control-label col-sm-2">Bằng cấp</label>
                        <div className="col-sm-4">
                            <Select
                                className="profile-select"
                                id="atLeastDegree"
                                value={atLeastDegree}
                                options={atLeastDegreeOptions}
                                onChange={(e) => this.handleAtLeastDegreeChanged(e)}
                            />
                        </div>
                        <label htmlFor="gender" className="control-label col-sm-2">Giới tính</label>
                        <div className="col-sm-4">
                            <Select
                                className="profile-select"
                                id="gender"
                                value={gender}
                                options={genderOptions}
                                onChange={(e) => this.handleGenderChanged(e)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="experience" className="control-label col-sm-2">Kinh nghiệm</label>
                        <div className="col-sm-4">
                            <Slider
                                value={minExperience}
                                min={MIN_YEAR}
                                max={MAX_YEAR}
                                onChange={(e) => this.handleExperienceChanged(e)}
                            />
                        </div>
                        <div className="col-sm-6">
                            <p>
                                Từ <strong><span id="experience-field">{minExperience}</span></strong> năm trở lên
                            </p>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="age" className="control-label col-sm-2">Độ tuổi</label>
                        <div className="col-sm-4">
                            <Range
                                value={age}
                                min={MIN_AGE}
                                max={MAX_AGE}
                                trackStyle={[{ backgroundColor: '#3FB8AF' }]}
                                onChange={(e) => this.handleAgeChanged(e)}
                            />
                        </div>
                        <div className="col-sm-6">
                            <p>
                                Từ <strong><span id="min-age-field">{minAge}</span></strong> đến <strong><span id="max-age-field">{maxAge}</span></strong> tuổi
                            </p>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="language" className="control-label col-sm-2">Ngôn ngữ</label>
                        <div className="col-sm-10">
                            <Select
                                className="profile-select"
                                id="languages"
                                multi={true}
                                value={languages}
                                options={languageOptions}
                                placeholder="Chọn ngôn ngữ (nếu có)"
                                onChange={(e) => this.handleLanguageChanged(e)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="skills" className="control-label col-sm-2">Kỹ năng</label>
                        <div className="col-sm-10">
                            <TagsInput
                                value={skills}
                                onChange={(e) => this.handleSkillChanged(e)}
                                addKeys={[9, 13, 188]}
                                maxTags={9}
                                onlyUnique={true}
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="form-group">
                        <h1>Quyền lợi</h1>
                    </div>

                    <div className="form-group">
                        <label htmlFor="benefit" className="control-label col-sm-2">Chi tiết</label>
                        {/* <div className="col-sm-10">
                            <textarea
                                name="benefit"
                                id="benefit"
                                rows="5"
                                placeholder="Nhập quyền lợi của ứng viên"
                                className="form-control"
                                onChange={(e) => this.handleBenefitChanged(e)}>
                            </textarea>
                        </div> */}
                        <div className="col-sm-10">
                            <TinyMCE
                                id="benefit"
                                content={benefit}
                                config={{
                                    plugins: 'link image code media lists imagetools insertdatetime table',
                                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist | code | image media link | lists | table',
                                    // file_browser_callback: function(field_name, url, type, win) {
                                    //     win.document.getElementById(field_name).value = 'my browser value';
                                    // }
                                }}
                                onChange={this.handleBenefitChanged}
                            />
                        </div>
                    </div>

                    <hr />

                    <div className="form-group">
                        <h1>Hồ sơ</h1>
                    </div>

                    <div className="form-group">
                        <label htmlFor="recruitDate" className="control-label col-sm-2">Thời gian nhận</label>
                        <label htmlFor="startDate" className="control-label col-sm-1">Từ</label>
                        {/* <div className="col-sm-4">
                            <input
                                type="text"
                                id="startDate"
                                placeholder="Ngày bắt đầu"
                                className="form-control"
                                onChange={(e) => this.handleTitleChanged(e)}
                            />
                        </div> */}
                        <div className="col-sm-4">
                            <Datetime
                                value={new Date(startDate)}
                                defaultValue={new Date()}
                                open={false}
                                dateFormat="DD/MM/YYYY"
                                onChange={(e) => this.handleStartDateChanged(e)}
                            />
                        </div>
                        <label htmlFor="endDate" className="control-label col-sm-1">đến</label>
                        {/* <div className="col-sm-4">
                            <input
                                type="text"
                                id="endDate"
                                placeholder="Ngày kết thúc"
                                className="form-control"
                                onChange={(e) => this.handleTitleChanged(e)}
                            />
                        </div> */}
                        <div className="col-sm-4">
                            <Datetime
                                value={new Date(endDate)}
                                defaultValue={new Date()}
                                open={false}
                                dateFormat="DD/MM/YYYY"
                                onChange={(e) => this.handleEndDateChanged(e)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="detail" className="control-label col-sm-2">Hồ sơ bao gồm</label>
                        <div className="col-sm-10">
                            <TagsInput
                                value={applications}
                                onChange={(e) => this.handleApplicationChanged(e)}
                                addKeys={[9, 13, 188]}
                                maxTags={9}
                                onlyUnique={true}
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="form-group">
                        <h1>Thông tin tổ chức</h1> (tắt nếu không có)
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">
                            <Toggle
                                id="isToggleOrganization"
                                defaultChecked={isToggleOrganization}
                                onChange={(e) => this.handleToggleOrganizationChanged(e)} />
                        </label>
                        <label className="control-label col-sm-10 text-left" htmlFor="isToggleOrganization">Chọn tổ chức của tôi</label>
                    </div>

                    {(isToggleOrganization) ?
                        <div className="form-group">
                            <label htmlFor="organization" className="control-label col-sm-2">Tên tổ chức</label>
                            <div className="col-sm-10">
                                <Select
                                    className="profile-select"
                                    id="organization"
                                    value={chosenOrganization}
                                    options={organizationOptions}
                                    onChange={(e) => this.handleOrganizationChanged(e)}
                                />
                            </div>
                        </div>
                        :
                        null
                    }
                    <hr />

                    <div className="form-group">
                        <label className="col-sm-2 control-label">
                            <Toggle
                                id="isReceivedEmail"
                                defaultChecked={isReceivedEmail}
                                onChange={(e) => this.handleReceivedEmailChanged(e)} />
                        </label>
                        <label className="control-label col-sm-10 text-left" htmlFor="isReceivedEmail">Nhận thông tin ứng viên qua email</label>
                    </div>
                    <hr />

                    <div className="form-group">
                        <div className="col-sm-1">
                            <button type="submit" className="btn btn-primary btn-lg" onClick={(e) => this.handleSubmited(e)}>Lưu</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}