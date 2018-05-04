import React, { Component } from 'react';
import request from 'superagent';
import { getProvinces, getDistricts } from '../../../../commons/share';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';
import Dropzone from 'react-dropzone';
import no_image from '../../../../assets/img/no-image-icon-13.png';
import _ from 'lodash';
import async from 'async';
import ButtonGroup from '../share/ButtonGroup';
import { browserHistory } from 'react-router';
import TinyMCE from 'react-tinymce';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import swal from 'sweetalert2';
const STATUS = {
  ACTIVE: 1
}
const TYPE = {
  SCHOOL: 'Trường',
  OTHER: 'Khác'
}
class CreateOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //loading
      fieldsLoading: false,
      // field
      field3Options: [],
      // basic info
      name: "",
      logo: {},
      banner: {},
      slogan: "",
      phone: "",
      email: "",
      description: "",
      strongPoints: "",
      mission: "",
      vision: "",
      fields: [],
      tags: [],
      status: STATUS.ACTIVE,
      type: TYPE.SCHOOL,

      // location
      provinceOptions: [],
      districtOptions: [],
      isLoadingDistrict: false,
      isLoadingProvince: true,
      streetNumber: "",
      ward: "",
      district: "",
      province: "",
      lat: 0,
      lng: 0,

      
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleSloganChange(e) {
    this.setState({ slogan: e.target.value });
  }
  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }
  handleStrongPointsChange(e) {
    this.setState({ strongPoints: e.target.value });
  }
  handleMissionChange = (e) => {
    this.setState({ mission: e.target.getContent() }, () => { console.log(this.state.mission); });
  }
  handleVisionChange = (e) => {
    this.setState({ vision: e.target.getContent() });
  }
  handleFieldsChange(e) {
    const arr = e.map((item) => item.value);
    this.setState({ fields: arr });
  }
  handleStreetNumberChange(e) {
    this.setState({ streetNumber: e.target.value });
  }
  handleWardChange(e) {
    this.setState({ ward: e.target.value });
  }
  handleDistrictChange(e) {
    this.setState({ district: e.value });
  }
  handleProvinceChange(e) {
    this.setState({ province: e.value }, () => {
      const { province } = this.state;
      getDistricts(province, this);
    })
  }
  handleTypeChange(e) {
    this.setState({ type: e.target.value })
  }
  handleTagsChanged = (e) => {
    this.setState({ tags: e });
  }
  getField3() {
    this.setState({ fieldsLoading: true }, () => {
      request
        .get('/api/field/field3Options')
        .end((err, res) => {
          if (err) console.log(err);
          else {
            const field3Options = res.body.results.map(elem => {
              return { value: elem.code, label: elem.viName }
            })

            this.setState({ field3Options, fieldsLoading: false });
          }
        })
    })

  }
  onDropLogo(acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles[0]);
    this.setState({ logo: acceptedFiles[0] });
  }
  onDropBanner(acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles[0]);
    this.setState({ banner: acceptedFiles[0] });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name, slogan, phone, email, description, strongPoints,
      mission, vision, fields, status, type, streetNumber, ward, district, province, lat, lng,
      logo, banner, tags } = this.state;
    const data = {
      name, slogan, phone, email, description, strongPoints,
      mission, vision, fields, status, type, location: { streetNumber, ward, district, province, lat, lng },
      tags
    }

    const token = localStorage.getItem('token');
    if (!token) return;
    request
      .post('/api/organization')
      .set('x-access-token', token)
      .send(data)
      .end((err, res) => {
        if (err) console.log(err);
        else {
          request
            .post('/api/file/image/organization/basic-info')
            .set('x-access-token', token)
            .field('itemId', res.body.organizationId)
            .attach('org_logo', logo)
            .attach('org_banner', banner)
            .end((err, res) => {
              if (err) console.log(err);
              else {
                swal({
                  title: 'Tạo thành công',
                  text: '',
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
            })
        }
      })

  }

  handleBack = () => {
    browserHistory.goBack();
  }

  handleReset = () => {
    window.location.reload();
  }

  componentWillMount() {
    getProvinces(this);
    this.getField3();
  }

  render() {
    const { district, districtOptions, province, provinceOptions, fields, field3Options, fieldsLoading,
      ward, streetNumber, isLoadingDistrict, isLoadingProvince, logo, banner, vision, mission, tags } = this.state;
    return (
      <div className="container-fluid">
        <form action="" className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12">
              <h2>Thông tin chung</h2>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name" className="control-label col-sm-2">Loại tổ chức</label>
            <div className="col-sm-10">
              <select className="form-control" onChange={(e) => this.handleTypeChange(e)}>
                <option value={TYPE.SCHOOL}>Trường</option>
                <option value={TYPE.OTHER}>Khác</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name" className="control-label col-sm-2">Tên tổ chức</label>
            <div className="col-sm-10">
              <input
                type="text"
                id="name"
                placeholder="Nhập tên tổ chức"
                className="form-control"
                onChange={(e) => this.handleNameChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name" className="control-label col-sm-2">Logo</label>
            <div className="col-sm-3">
              <Dropzone className="dropzone-logo-organization"
                onDrop={this.onDropLogo.bind(this)}
                multiple={false}
                accept="image/*"

              >
                {(!_.isEmpty(logo))
                  ? (<div>
                    <div key={logo.lastModified}>
                      <img src={logo.preview} key={logo.lastModified} width="100%" height="100%" alt="no image" />
                    </div>
                  </div>)
                  : (<div>
                    <img src={no_image} width="50%" height="50%" className="dropzone-logo-organization-icon" />
                  </div>
                  )
                }
              </Dropzone>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name" className="control-label col-sm-2">Banner</label>
            <div className="col-sm-8">
              <Dropzone className="dropzone"
                onDrop={this.onDropBanner.bind(this)}
                multiple={false}
                accept="image/*"
              >
                {(!_.isEmpty(banner))
                  ? (<div>
                    <div key={banner.lastModified}>
                      <img src={banner.preview} key={banner.lastModified} width="100%" height="250px" alt="no image" />
                    </div>
                  </div>)
                  : (<div>
                    <img src={no_image} width="20%" height="50%" className="dropzone-icon" />
                  </div>
                  )
                }
              </Dropzone>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="fields" className="control-label col-sm-2">Lĩnh vực</label>
            <div className="col-sm-10">
              <Select
                className="profile-select"
                id="fields"
                value={fields}
                multi={true}
                options={field3Options}
                isLoading={fieldsLoading}
                onChange={(e) => this.handleFieldsChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="control-label col-sm-2">Email</label>
            <div className="col-sm-10">
              <input
                type="text"
                id="email"
                placeholder="Nhập email"
                className="form-control"
                onChange={(e) => this.handleEmailChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="control-label col-sm-2">Số điện thoại</label>
            <div className="col-sm-10">
              <input
                type="text"
                id="phone"
                placeholder="Nhập số điện thoại"
                className="form-control"
                onChange={(e) => this.handlePhoneChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="slogan" className="control-label col-sm-2">Slogan</label>
            <div className="col-sm-10">
              <input
                type="text"
                id="slogan"
                placeholder="Nhập slogan"
                className="form-control"
                onChange={(e) => this.handleSloganChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description" className="control-label col-sm-2">Giới thiệu tổ chức</label>
            <div className="col-sm-10">
              <textarea
                id="description"
                rows="5"
                placeholder="Nhập giới thiệu"
                className="form-control"
                onChange={(e) => this.handleDescriptionChange(e)}>
              </textarea>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="vision" className="control-label col-sm-2">Tầm nhìn</label>
            <div className="col-sm-10">
              
              <TinyMCE
                content={vision}
                config={{
                  plugins: 'link image code media lists imagetools insertdatetime table',
                  toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist | code | image media link | lists | table',
                }}
                onChange={this.handleVisionChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="mission" className="control-label col-sm-2">Sứ mệnh</label>
            <div className="col-sm-10">
              
              <TinyMCE
                content={mission}
                config={{
                  plugins: 'link image code media lists imagetools insertdatetime table',
                  toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist | code | image media link | lists | table',
                }}
                onChange={this.handleMissionChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="strongPoints" className="control-label col-sm-2">Điểm mạnh</label>
            <div className="col-sm-10">
              <textarea
                id="strongPoints"
                rows="5"
                placeholder="Nhập điểm mạnh"
                className="form-control"
                onChange={(e) => this.handleStrongPointsChange(e)}>
              </textarea>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="workingPlace" className="control-label col-sm-2">Địa chỉ tổ chức</label>
          </div>

          <div className="form-group">
            <label htmlFor="province" className="control-label col-sm-2">Tỉnh/ Thành phố</label>
            <div className="col-sm-4">
              <Select
                className="profile-select"
                id="province"
                value={province}
                options={provinceOptions}
                onChange={(e) => this.handleProvinceChange(e)}
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
                onChange={(e) => this.handleDistrictChange(e)}
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
                placeholder="Ví dụ: phường Đa Kao"
                onChange={(e) => this.handleWardChange(e)}
              />
            </div>
            <label htmlFor="streetNumber" className="control-label col-sm-2">Đường</label>
            <div className="col-sm-4">
              <input
                className="form-control"
                id="streetNumber"
                value={streetNumber}
                placeholder="Ví dụ: 49 Nguyễn Đình Chiểu"
                onChange={(e) => this.handleStreetNumberChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="" className="control-label col-sm-2">Tag</label>
            <div className="col-sm-10">
              <TagsInput
                value={tags}
                onChange={(e) => this.handleTagsChanged(e)}
                addKeys={[9, 13, 188]}
                maxTags={5}
                onlyUnique={true}
              />
            </div>
          </div>
          
          <ButtonGroup
            handleSubmited={this.handleSubmit}
            handleBack={this.handleBack}
            handleReset={this.handleReset} />
        </form>
      </div>
    )
  }
}

export default CreateOrganization