import React, { Component } from 'react';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';
import request from 'superagent';
import { FILTER_TYPES, CHECKBOX_TYPES } from './OrganizationHolder';
import { organizationArr } from '../../commons/constants';
class OrganizationFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field1s: [],
      field2s: [],
      field3s: [],
      field1_filter: [],
      field3_filter: [],
    }
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
  handleCheckboxChange(e) {
    const value = {
      value: e.target.value,
      groupName: e.target.name,
      checked: e.target.checked
    }
    const checkboxType = 
    (value.groupName === CHECKBOX_TYPES.TYPE)
    ? FILTER_TYPES.TYPE
    : FILTER_TYPES.PROVINCE;
    this.props.watchFilterChange(value, checkboxType);
  }
  handleSearchInputChange(e) {
    this.props.getSearchInput(e.target.value);
  }
  componentDidMount () {
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
          onChange={(e) =>this.handleCheckboxChange(e)}/>
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
          onChange={(e) =>this.handleCheckboxChange(e)}/>
          {`${elem.type} ${elem.name}`} <span className="badge">{elem.count}</span>
        </label>
      </div>)
  }
  render () {
    const {field1s, field2s, field3s, field1_filter, field3_filter} = this.state;
    const {retrieveSearchResults, filterProvinces} = this.props;
    return (
      <div className="col-sm-4" style={{marginBottom: 20}}>
        <h2>Lọc tổ chức</h2>
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={(e) => {e.preventDefault(); retrieveSearchResults()}}>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Tìm tên công ty"
                  onChange={(e) => this.handleSearchInputChange(e)}/>
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
        <div className="col-sm-6" >
            <h5>Loại tổ chức</h5>
            {this.renderCheckboxGroup(organizationArr, CHECKBOX_TYPES.TYPE)}
          </div>
          <div className="col-sm-12">
            <h5>Tỉnh/ thành</h5>
            {this.renderProvinceGroup(filterProvinces, CHECKBOX_TYPES.PROVINCE)}
            
          </div>
        </div>
      </div>
    )
  }
}

export default OrganizationFilter;