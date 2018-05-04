import React, { Component } from 'react'
import Slider, { Range, createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';
import request from 'superagent';
import { educationLevel, jobTypeArr, genderArr } from '../../commons/constants';
import { FILTER_TYPES, CHECKBOX_TYPES, AGE_VALUES, EXPERIENCE_VALUES } from './CVHolder';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
class CVFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field1s: [],
      field2s: [],
      field3s: [],
      field1_filter: [],
      field3_filter: [],
    }
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleExpChange = this.handleExpChange.bind(this);
  }
  getField1 = () => {
    request
      .get('api/field/field1')
      .end((error, res) => {
        var data = [];
        res.body.results.forEach(function (item) {
          var obj = {};
          obj.label = item.viName;
          obj.value = item.code;
          data.push(obj);
        }, this);
        this.setState({ field1s: data });
      })
  }

  getField2 = (parentCode) => {
    request
      .get('api/field/field2?parentCode=' + parentCode)
      .end((error, res) => {
        var data = [];
        res.body.results.forEach(function (item) {
          var obj = {};
          obj.label = item.viName;
          obj.value = item.code;
          data.push(obj);
        }, this);
        this.setState({ field2s: data }, () => {
          var arr = this.state.field2s;
          for (var i = 0; i < arr.length; i++) {
            this.getField3(arr[i].value, arr[i].label);
          }
        });
      })
  }

  getField3 = (parentCode, parentViName) => {
    request
      .get('api/field/field3?parentCode=' + parentCode)
      .end((error, res) => {
        var data = [];
        res.body.results.forEach(function (item) {
          var obj = {};
          obj.label = item.viName;
          obj.value = item.code;
          data.push(obj);
        }, this);
        var obj = { label: parentViName, options: data };
        this.setState({ field3s: this.state.field3s.concat(obj) });
      })
  }
  handleField1Changed(e) {

    this.setState({ field1_filter: e }, () => {
      var arr = this.state.field1_filter;
      for (var i = 0; i < arr.length; i++) {
        this.getField2(arr[i].value);
      }
    });
  }
  handleField3Changed(e) {
    const values = e.map(elem => elem.value);
    this.setState({ field3_filter: e },
      () => this.props.watchFilterChange(values, FILTER_TYPES.FIELDS));
  }
  handleAgeChange(value) {
    this.props.watchFilterChange(value, FILTER_TYPES.AGE);
  }
  handleExpChange(value) {
    this.props.watchFilterChange(value, FILTER_TYPES.EXPERIENCE);
  }
  handleIsJobSearchOnChanged(e) {
    this.props.watchFilterChange(e.target.checked, FILTER_TYPES.IS_JOB_SEARCH_ON)
  }
  handleCheckboxChange(e) {
    const value = {
      value: e.target.value,
      groupName: e.target.name,
      checked: e.target.checked
    }
    const checkboxType =
      (value.groupName === CHECKBOX_TYPES.DEGREE)
        ? FILTER_TYPES.DEGREE
        : (value.groupName === CHECKBOX_TYPES.GENDER)
          ? FILTER_TYPES.GENDER
          : (value.groupName === CHECKBOX_TYPES.PROVINCE)
            ? FILTER_TYPES.PROVINCE
            : FILTER_TYPES.JOB_TYPE;

    this.props.watchFilterChange(value, checkboxType);
  }
  handleSearchInputChange(e) {
    this.props.getSearchInput(e.target.value);
  }
  componentDidMount() {
    this.getField1();
  }

  renderCheckboxGroup(valueArr, groupName) {
    return valueArr.map(elem =>
      <div className="checkbox" key={elem}>
        <label>
          <input
            type="checkbox"
            value={elem}
            name={groupName}
            onChange={(e) => this.handleCheckboxChange(e)} />
          {elem}
        </label>
      </div>)
  }
  renderProvinceGroup(valueArr, groupName) {
    return valueArr.map(elem =>
      <div className="checkbox" key={elem.province_id}>
        <label>
          <input
            type="checkbox"
            value={elem.province_id}
            name={groupName}
            onChange={(e) => this.handleCheckboxChange(e)} />
          {`${elem.type} ${elem.name}`} <span className="badge">{elem.count}</span>
        </label>
      </div>)
  }
  render() {
    const { field1s, field2s, field3s, field1_filter, field3_filter } = this.state;
    const { age, experience, retrieveSearchResults, filterProvinces, isJobSearchOn } = this.props;
    return (
      <div className="col-sm-4" style={{ marginBottom: 20 }}>
        <h2>Lọc hồ sơ</h2>
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={(e) => { e.preventDefault(); retrieveSearchResults() }}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm tên, kỹ năng, ngôn ngữ"
                  onChange={(e) => this.handleSearchInputChange(e)} />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <h5>Lĩnh vực</h5>
            <Select
              className="profile-select"
              value={field1_filter}
              options={field1s}
              multi={true}
              onChange={(e) => this.handleField1Changed(e)}
              placeholder="Chọn lĩnh vực" />
            <h5>Chuyên ngành</h5>
            <Select
              className="profile-select"
              value={field3_filter}
              options={field3s}
              multi={true}
              onChange={(e) => this.handleField3Changed(e)}
              placeholder="Chọn chuyên ngành" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <h5>Đang tìm việc</h5>
            <Toggle
              id="isJobSearchOn"
              defaultChecked={isJobSearchOn}
              onChange={(e) => this.handleIsJobSearchOnChanged(e)} />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <h5>Tuổi</h5>

            <div className="col-xs-6 no-padding">
              <Range
                defaultValue={[age[0], age[1]]}
                min={AGE_VALUES.MIN}
                max={AGE_VALUES.MAX}
                allowCross={false}
                step={1}
                onChange={this.handleAgeChange}
                trackStyle={[{ backgroundColor: '#3FB8AF' }]}
              />
            </div>
            <div className="col-xs-6">
              Từ <strong>{age[0]}</strong> đến <strong>{age[1]}</strong> tuổi
          </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <h5>Kinh nghiệm</h5>
            <div className="col-xs-6 no-padding">
              <Slider
                defaultValue={experience}
                min={EXPERIENCE_VALUES.MIN}
                max={EXPERIENCE_VALUES.MAX}
                step={1}
                onChange={this.handleExpChange}
              />
            </div>
            <div className="col-xs-6">
              Từ <strong><span>{experience}</span></strong> năm trở lên
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-6">
            <h5>Giới tính</h5>
            {this.renderCheckboxGroup(genderArr, CHECKBOX_TYPES.GENDER)}
          </div>
          <div className="col-sm-6" >
            <h5>Bằng cấp</h5>
            {this.renderCheckboxGroup(educationLevel, CHECKBOX_TYPES.DEGREE)}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <h5>Tỉnh/ thành</h5>
            {this.renderProvinceGroup(filterProvinces, CHECKBOX_TYPES.PROVINCE)}

          </div>
        </div>
      </div>
    )
  }
}

export default CVFilter