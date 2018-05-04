import React, { Component } from 'react';

import { jobTypeArr } from '../../../../../commons/constants';

import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';

import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import Toggle from 'react-toggle'
import "react-toggle/style.css"

const MIN_SALARY = 3;
const MAX_SALARY = 15;

export default class JobSearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTypeOptions: [],
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
        this.setState({ jobTypeOptions: options });
    }

    componentWillMount() {
        this.setOptions(jobTypeArr);
    }

    render() {
        const { item, handleChanged } = this.props;
        const { jobTypeOptions } = this.state;
        return (
            <div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <h1>Đặc điểm công việc</h1>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Tỉnh/ Thành phố</label>
                    <div className="col-sm-9">
                        <Select
                            className="profile-select"
                            value={item.province}
                            options={item.provinceOptions}
                            onChange={(e) => handleChanged(e, "province")}
                            placeholder="Tỉnh/ thành phố"
                            isLoading={item.isLoadingProvince}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Quận/ Huyện</label>
                    <div className="col-sm-9">
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
                    <label className="col-sm-3 control-label">Loại công việc</label>
                    <div className="col-sm-9">
                        <Select
                            className="profile-select"
                            value={item.jobType}
                            multi={true}
                            options={jobTypeOptions}
                            onChange={(e) => handleChanged(e, "jobType")}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Kinh nghiệm</label>
                    <div className="col-sm-5">
                        <Range
                            defaultValue={item.salary}
                            min={MIN_SALARY}
                            max={MAX_SALARY}
                            trackStyle={[{ backgroundColor: '#3FB8AF' }]}
                            onChange={(e) => handleChanged(e, "salary")}
                        />
                    </div>
                    <div className="col-sm-4">
                        <p>
                        Từ <strong><span id="min-salary-field">{item.minSalary}</span></strong> đến <strong><span id="max-salary-field">{item.maxSalary}</span></strong> triệu
                        </p>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">
                        <Toggle
                            id="isOn"
                            defaultChecked={item.isOn}
                            onChange={(e) => handleChanged(e, "isOn")} />
                    </label>
                    <label className="control-label col-sm-9 text-left" htmlFor="isOn">Tôi đang tìm việc</label>
                </div>
            </div>
        )
    }
}