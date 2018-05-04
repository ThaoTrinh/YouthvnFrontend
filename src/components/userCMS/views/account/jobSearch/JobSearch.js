import React from 'react';
import {Link} from 'react-router';
import request from 'superagent';

import { JobSearchModal } from './JobSearchModal';
import { getProvinces, getDistricts } from '../../../../../commons/share';
import swal from 'sweetalert2';

const MIN_SALARY = 3;
const MAX_SALARY = 15;

export default class JobSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            jobType: [],
            district: "",
            province: "",
            minSalary: MIN_SALARY,
            maxSalary: MAX_SALARY,
            salary: [MIN_SALARY, MAX_SALARY],
            isOn: false,

            districtOptions: [],
            provinceOptions: [],
            isLoadingDistrict: false,
            isLoadingProvince: true
        }
        this.handleChanged = this.handleChanged.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmited = this.handleSubmited.bind(this);
        this.edit = this.edit.bind(this);
        this.handleDistrictChanged = this.handleDistrictChanged.bind(this)
        this.handleProvinceChanged = this.handleProvinceChanged.bind(this)
        this.handleJobTypeChanged = this.handleJobTypeChanged.bind(this)
        this.handleSalaryChanged = this.handleSalaryChanged.bind(this)
        this.handleIsOnChanged = this.handleIsOnChanged.bind(this)
    }

    componentWillMount() {
        try {
            getProvinces(this);
            const { jobSearch } = this.props;
            this.setState({
                jobType: jobSearch.jobType,
                district: jobSearch.location.district,
                province: jobSearch.location.province,
                minSalary: jobSearch.minSalary,
                maxSalary: jobSearch.maxSalary,
                salary: [jobSearch.minSalary, jobSearch.maxSalary],
                isOn: jobSearch.isOn
            }, () => {
                const { province } = this.state;
                getDistricts(province, this);
            })
        } catch (error) {
            console.log(error);
        }
    }

    edit = () => {
        this.setState({ showModal: true });
    }

    handleJobTypeChanged = (e) => {
        var arr = e.map(function(item) {
            return item.value;
        });
        this.setState({ jobType: arr });
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

    handleSalaryChanged = (e) => {
        this.setState({ salary: e, minSalary: e[0], maxSalary: e[1] });
    }

    handleIsOnChanged = (e) => {
        const value = e.target.checked;
        this.setState({ isOn: value });
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }

    handleSubmited = (e) => {
        e.preventDefault();
        const { jobType, district, province, minSalary, maxSalary, isOn } = this.state;
        const token = localStorage.getItem('token');
        const data = {
            jobType,
            location: {
                district,
                province
            },
            minSalary,
            maxSalary,
            isOn
        };

        request
            .post("api/userCV/edit-jobSearch")
            .set('x-access-token', token)
            .send(data)
            .end((error, res) => {
                if (res.body.success) {
                    swal({
                        title: 'Cập nhật thành công',
                        text: '',
                        type: 'success',
                        timer: 1500
                      }).then((result) => {
                        if (result.dismiss === 'timer') {
                            window.location.reload();
                        }
                      })
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

    handleChanged = (e, name) => {
        switch (name) {
            case "jobType":
                this.handleJobTypeChanged(e);
                break;
            case "district":
                this.handleDistrictChanged(e);
                break;
            case "province":
                this.handleProvinceChanged(e);
                break;
            case "salary":
                this.handleSalaryChanged(e);
                break;
            case "isOn":
                this.handleIsOnChanged(e);
                break;
            default:
                break;
        }
    }

    render() {
        const { showModal } = this.state;
        const item = {...this.state};
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <button className="ui button recruitment-apply-btn" onClick={() => this.edit()}>{(item.isOn)? "Tôi đang tìm việc" : "Chưa bật tìm việc"}</button>
                        {(item.isOn)? <Link to="/user/account/recommended-recruitments">Xem các tin tuyển dụng phù hợp</Link>: null}
                    </div>
                </div>

                <JobSearchModal showModal={showModal}
                    close={this.closeModal}
                    handleChanged={this.handleChanged}
                    handleSubmited={this.handleSubmited}
                    item={item} />
            </div>
        )
    }
}