import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';

import { ItemModal } from './ItemModal';
import { BasicInfoElement } from './ItemElement';
import { ITEM_TYPE } from '../../../../commons/constants';
import { getProvinces, getDistricts } from '../../../../commons/share';
import JobSearch from './jobSearch/JobSearch';
import swal from 'sweetalert2';

const $ = window.jQuery;
const MODE = {
  CREATE: 0,
  EDIT: 1
};
const TITLE_MODAL = {
  CREATE: "Thêm",
  EDIT: "Cập nhật"
};

export default class BasicInfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      website: "",
      
      streetNo: "",
      ward: "",
      district: "",
      province: "",

      gender: "",
      birthdate: new Date(),
      field1: "",
      fieldName: "",
      positions: [],
      experience: 0,
      jobField: "",

      showModal: false,

      detail: [],

      districtOptions: [],
      provinceOptions: [],
      jobFieldOptions: [],
      isLoadingDistrict: false,
      isLoadingProvince: true,
      isLoadingJobField: true
    }
    this.handleChanged = this.handleChanged.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmited = this.handleSubmited.bind(this);
    this.edit = this.edit.bind(this);
    this.handleFirstnameChanged = this.handleFirstnameChanged.bind(this)
    this.handleLastnameChanged = this.handleLastnameChanged.bind(this)
    this.handlePhoneChanged = this.handlePhoneChanged.bind(this)
    this.handleWebsiteChanged = this.handleWebsiteChanged.bind(this)
    this.handleBirthdateChanged = this.handleBirthdateChanged.bind(this)
    this.handleGenderChanged = this.handleGenderChanged.bind(this)

    this.handleJobFieldChanged = this.handleJobFieldChanged.bind(this)
    this.handlePositionChanged = this.handlePositionChanged.bind(this)
    this.handleExperienceChanged = this.handleExperienceChanged.bind(this)

    this.handleDistrictChanged = this.handleDistrictChanged.bind(this)
    this.handleStreetNoChanged = this.handleStreetNoChanged.bind(this)
    this.handleProvinceChanged = this.handleProvinceChanged.bind(this)
    this.handleWardChanged = this.handleWardChanged.bind(this)
  }

  componentWillMount() {
    try {
      getProvinces(this);
      this.setState({
        detail: this.props.detail,
        email: this.props.detail.email
      })
    } catch (error) {
      console.log(error);
    }
  }

  edit(id, showModal) {
    const { detail } = this.state;
    const item = detail;
    this.setState({
      id: item._id,
      lastname: item.lastname,
      firstname: item.firstname,
      phone: item.phone,
      website: item.website,
      streetNo: item.address.streetNo,
      ward: item.address.ward,
      district: item.address.district,
      province: item.address.province,
      gender: item.gender,
      birthdate: (item.birthdate) ? item.birthdate : new Date(),
      positions: item.positions,
      experience: item.experience,
      jobField: item.jobField,
      showModal: showModal
    }, () => {
      const { province } = this.state;
      getDistricts(province, this);
    });
  }

  handleFirstnameChanged(e) {
    const value = e.target.value;
    this.setState({ firstname: value });
  }

  handleLastnameChanged(e) {
    const value = e.target.value;
    this.setState({ lastname: value });
  }

  handleGenderChanged(e) {
    const value = e.target.value;
    this.setState({ gender: value });
  }

  handleBirthdateChanged(e) {
    this.setState({ birthdate: new Date(e) });
  }

  handlePhoneChanged(e) {
    const value = e.target.value;
    this.setState({ phone: value });
  }

  handleWebsiteChanged(e) {
    const value = e.target.value;
    this.setState({ website: value });
  }

  handleStreetNoChanged(e) {
    this.setState({ streetNo: e.target.value });
  }

  handleWardChanged(e) {
    this.setState({ ward: e.target.value });
  }

  handleDistrictChanged(e) {
    this.setState({ district: e.value });
  }

  handleProvinceChanged(e) {
    this.setState({ province: e.value, isLoadingDistrict: true }, () => {
      const { province } = this.state;
      getDistricts(province, this);
    });
  }

  handleJobFieldChanged(e) {
    this.setState({ jobField: e.value });
  } 

  handlePositionChanged(e) {
    this.setState({ positions: e });
  }

  handleExperienceChanged(e) {
    this.setState({ experience: e });
  }

  handleChanged(e, name) {
    switch (name) {
      case "firstname":
        this.handleFirstnameChanged(e);
        break;
      case "lastname":
        this.handleLastnameChanged(e);
        break;
      case "phone":
        this.handlePhoneChanged(e);
        break;
      case "website":
        this.handleWebsiteChanged(e);
        break;
      case "streetNo":
        this.handleStreetNoChanged(e);
        break;
      case "ward":
        this.handleWardChanged(e);
        break;
      case "district":
        this.handleDistrictChanged(e);
        break;
      case "province":
        this.handleProvinceChanged(e);
        break;
      case "gender":
        this.handleGenderChanged(e);
        break;
      case "birthdate":
        this.handleBirthdateChanged(e);
        break;
      case "experience":
        this.handleExperienceChanged(e);
        break;
      case "position":
        this.handlePositionChanged(e);
        break;
      case "jobField":
        this.handleJobFieldChanged(e);
        break;
      default:
        break;
    }
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  handleSubmited(e) {
    e.preventDefault();
    const { id, lastname, firstname, phone, website, streetNo, ward, district, province, 
      gender, birthdate, positions, experience, jobField } = this.state;
    const token = localStorage.getItem('token');
    const data = {
      lastname,
      firstname,
      phone,
      website,
      address: {
        streetNo,
        ward,
        district,
        province 
      },
      gender,
      birthdate,
      positions,
      experience,
      jobField
    };

    request
      .post("/api/userCV/edit-basic-info")
      .set('x-access-token', token)
      .send(data)
      .end((error, res) => {
        if (!error) {
          swal({
            title: res.body.message,
            type: 'success',
            timer: 1500,
            showConfirmButton: false,
            allowOutsideClick: false
          }).then((result) => {
            if (result.dismiss === 'timer') {
              this.setState({ showModal: false });
              window.location.reload();
            }
          })
        }
        else {
          swal({
            title: res.body.message,
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

  render() {
    const { id, showModal, showJobSearchModal } = this.state;
    const { detail, jobSearch } = this.props;
    const item = { ...this.state };
    const title = TITLE_MODAL.EDIT;
    return (
      <div className="content profile-border">
        <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <h2 className="profile-title">Thông tin chung</h2>
          </div>

          <div className="col-md-1 col-sm-1 col-xs-2">
            <Link onClick={(e) => this.edit(id, true)}><i className="large write icon pull-right"></i></Link>
          </div>
        </div>

        <BasicInfoElement key={detail._id} item={detail} />
        <br />
        <JobSearch jobSearch={jobSearch} />

        <ItemModal showModal={showModal}
          close={this.closeModal}
          itemType={ITEM_TYPE.BASICINFO}
          title={title}
          handleChanged={this.handleChanged}
          handleSubmited={this.handleSubmited}
          item={item} />
      </div>
    )
  }
}