import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';
import moment from 'moment';
import swal from 'sweetalert2';

export class ExperienceElement extends React.Component {
  render() {
    const { item, edit } = this.props;
    const start_time = item.start.month + "/" + item.start.year;
    const end_time = (item.isActive === true) ? " - Hiện nay" : " - " + item.end.month + "/" + item.end.year;
    const time = start_time + end_time;
    const isPublic = item.isPublic.find((elem) => {
      return elem.recruitmentId == null;
    });
    return (
      <div>
        <div className="row padding-top-25" key={item._id}>
          <div className="col-md-1 col-sm-1 col-xs-1">

          </div>

          <div className="col-md-10 col-sm-10 col-xs-9">
            <div className="profile-school">{item.company_name}</div>
            <div>{item.position}</div>
            <div>{time}</div>
            <div>{item.description}</div>
            <div>
                {(isPublic.isPublic)? 
                  <div style={{color:"green"}}><i className="fa fa-check-circle-o"></i> Công khai</div> 
                  : <div style={{color:"#990000"}}><i className="fa fa-times-circle-o"></i> Ẩn</div> 
                }
              </div>
          </div>

          <div className="col-md-1 col-sm-1 col-xs-2">
            <Link onClick={() => edit(item._id, true)}><i className="large write icon pull-right"></i></Link>
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
      school_name: ""
    }
  }

  getSchool = () => {
    const { item } = this.props;
    const token = localStorage.getItem('token');
    if (token && item.school_name !== null) {
      request
      .get(`/api/school/${item.school_name}`)
      .end((error, res) => {
        if (!error) {
          var school = res.body.school;
          this.setState({school_name: school.name});
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

  getMajor = () => {
    const { item } = this.props;
    const token = localStorage.getItem('token');
    if (token && item.major) {
      request
      .get('/api/field/field3/' + item.major)
      .end((error, res) => {
        if (!error) {
          var major = res.body.result;
          this.setState({major: major.viName});
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
    this.getSchool();
    this.getMajor();
  }

  render() {
    const { item, edit } = this.props;
    const { school_name, major } = this.state;
    const start_time = item.start;
    const end_time = (item.isActive === true) ? " - Hiện nay" : " - " + item.end;
    const time = start_time + end_time;
    const isPublic = item.isPublic.find((elem) => {
      return elem.recruitmentId == null;
    });
    return (
      <div>
          <div className="row padding-top-25" key={item._id}>
            <div className="col-md-1 col-sm-1 col-xs-1">

            </div>

            <div className="col-md-10 col-sm-10 col-xs-9">
              <div className="profile-school">{school_name}</div>
              <div>{major}</div>
              {(item.grade)? <div>Điểm: {item.grade}</div> : null}
              <div>{time}</div>
              <div>{item.description}</div>
              <div>
                {(isPublic.isPublic)? 
                  <div style={{color:"green"}}><i className="fa fa-check-circle-o"></i> Công khai</div> 
                  : <div style={{color:"#990000"}}><i className="fa fa-times-circle-o"></i> Ẩn</div> 
                }
              </div>
            </div>

            <div className="col-md-1 col-sm-1 col-xs-2">
              <Link onClick={() => edit(item._id, true)}><i className="write large icon pull-right"></i></Link>
            </div>
          </div>
      </div>
    )
  }
}

export class ProjectElement extends React.Component {
  render() {
    const { item, edit } = this.props;
    const start_time = item.start.month + "/" + item.start.year;
    const end_time = (item.isActive === true) ? " - Hiện nay" : " - " + item.end.month + "/" + item.end.year;
    const time = start_time + end_time;
    const isPublic = item.isPublic.find((elem) => {
      return elem.recruitmentId == null;
    });
    return (
      <div>
        <div className="row padding-top-25" key={item._id}>
            <div className="col-md-1 col-sm-1 col-xs-1">

            </div>

            <div className="col-md-10 col-sm-10 col-xs-9">
              <div className="profile-school">{item.project_name}</div>
              <div>{item.position}</div>
              <div>{time}</div>
              <div>{item.description}</div>
              <div>
                {(isPublic.isPublic)? 
                  <div style={{color:"green"}}><i className="fa fa-check-circle-o"></i> Công khai</div> 
                  : <div style={{color:"#990000"}}><i className="fa fa-times-circle-o"></i> Ẩn</div> 
                }
              </div>
            </div>

            <div className="col-md-1 col-sm-1 col-xs-2">
              <Link onClick={() => edit(item._id, true)}><i className="write large icon pull-right"></i></Link>
            </div>
          </div>
      </div>
    )
  }
}

export class LanguageElement extends React.Component {
  render() {
    const { item, edit } = this.props;
    const isPublic = item.isPublic.find((elem) => {
      return elem.recruitmentId == null;
    });
    return (
      <div>
        <div className="row padding-top-25" key={item._id}>
            <div className="col-md-1 col-sm-1 col-xs-1">

            </div>

            <div className="col-md-10 col-sm-10 col-xs-9">
              <div className="profile-school">{item.language_name}</div>
              <div>{item.level}</div>
              <div>
                {(isPublic.isPublic)? 
                  <div style={{color:"green"}}><i className="fa fa-check-circle-o"></i> Công khai</div> 
                  : <div style={{color:"#990000"}}><i className="fa fa-times-circle-o"></i> Ẩn</div> 
                }
              </div>
            </div>

            <div className="col-md-1 col-sm-1 col-xs-2">
              <Link onClick={() => edit(item._id, true)}><i className="write large icon pull-right"></i></Link>
            </div>
          </div>
      </div>
    )
  }
}

export class SkillElement extends React.Component {
  render() {
    const { item, edit } = this.props;
    const isPublic = item.isPublic.find((elem) => {
      return elem.recruitmentId == null;
    });
    return (
      <div>
        <div className="row padding-top-25" key={item._id}>
            <div className="col-md-1 col-sm-1 col-xs-1">

            </div>

            <div className="col-md-10 col-sm-10 col-xs-9">
              <div className="profile-school">{item.skill_name.join(', ')}</div>
              <div>
                {(isPublic.isPublic)? 
                  <div style={{color:"green"}}><i className="fa fa-check-circle-o"></i> Công khai</div> 
                  : <div style={{color:"#990000"}}><i className="fa fa-times-circle-o"></i> Ẩn</div> 
                }
              </div>
            </div>

            <div className="col-md-1 col-sm-1 col-xs-2">
              <Link onClick={() => edit(item._id, true)}><i className="write large icon pull-right"></i></Link>
            </div>
          </div>
      </div>
    )
  }
}

export class PublicationElement extends React.Component {
  render() {
    const { item, edit } = this.props;
    const isPublic = item.isPublic.find((elem) => {
      return elem.recruitmentId == null;
    });
    return (
      <div>
        <div className="row padding-top-25" key={item._id}>
            <div className="col-md-1 col-sm-1 col-xs-1">

            </div>

            <div className="col-md-10 col-sm-10 col-xs-9">
              <div className="profile-school">{item.publication_name}</div>
              <div>{item.publisher}</div>
              <div>{moment(item.publishedDate).format("DD/MM/YYYY")}</div>
              <div>Tác giả đồng xuất bản: {item.coAuthor.join(" - ")}</div>
              <div>
                {(isPublic.isPublic)? 
                  <div style={{color:"green"}}><i className="fa fa-check-circle-o"></i> Công khai</div> 
                  : <div style={{color:"#990000"}}><i className="fa fa-times-circle-o"></i> Ẩn</div> 
                }
              </div>
            </div>

            <div className="col-md-1 col-sm-1 col-xs-2">
              <Link onClick={() => edit(item._id, true)}><i className="write large icon pull-right"></i></Link>
            </div>
          </div>
      </div>
    )
  }
}

export class ActivityElement extends React.Component {
  render() {
    const { item, edit } = this.props;
    const start_time = item.start.month + "/" + item.start.year;
    const end_time = (item.end.year === "") ? " - Hiện nay" : " - " + item.end.month + "/" + item.end.year;
    const time = start_time + end_time;
    const isPublic = item.isPublic.find((elem) => {
      return elem.recruitmentId == null;
    });
    return (
      <div>
        <div className="row padding-top-25" key={item._id}>
            <div className="col-md-1 col-sm-1 col-xs-1">

            </div>

            <div className="col-md-10 col-sm-10 col-xs-9">
              <div className="profile-school">{item.activity_name}</div>
              <div>{item.position}</div>
              <div>{time}</div>
              <div>
                {(isPublic.isPublic)? 
                  <div style={{color:"green"}}><i className="fa fa-check-circle-o"></i> Công khai</div> 
                  : <div style={{color:"#990000"}}><i className="fa fa-times-circle-o"></i> Ẩn</div> 
                }
              </div>
            </div>

            <div className="col-md-1 col-sm-1 col-xs-2">
              <Link onClick={() => edit(item._id, true)}><i className="write large icon pull-right"></i></Link>
            </div>
          </div>
      </div>
    )
  }
}

export class AwardElement extends React.Component {
  render() {
    const { item, edit } = this.props;
    const isPublic = item.isPublic.find((elem) => {
      return elem.recruitmentId == null;
    });
    return (
      <div>
        <div className="row padding-top-25" key={item._id}>
            <div className="col-md-1 col-sm-1 col-xs-1">

            </div>

            <div className="col-md-10 col-sm-10 col-xs-9">
              <div className="profile-school">{item.award_name}</div>
              {(item.associateWith)? <div>{item.associateWith}</div> : null}
              {(item.issuer)? <div>{item.issuer}</div> : null}
              <div>{item.month}/{item.year}</div>
              <div>{item.description}</div>
              <div>
                {(isPublic.isPublic)? 
                  <div style={{color:"green"}}><i className="fa fa-check-circle-o"></i> Công khai</div> 
                  : <div style={{color:"#990000"}}><i className="fa fa-times-circle-o"></i> Ẩn</div> 
                }
              </div>
            </div>

            <div className="col-md-1 col-sm-1 col-xs-2">
              <Link onClick={() => edit(item._id, true)}><i className="write large icon pull-right"></i></Link>
            </div>
          </div>
      </div>
    )
  }
}

export class CourseElement extends React.Component {
  render() {
    const { item, edit } = this.props;
    const isPublic = item.isPublic.find((elem) => {
      return elem.recruitmentId == null;
    });
    return (
      <div>
        <div className="row padding-top-25" key={item._id}>
            <div className="col-md-1 col-sm-1 col-xs-1">

            </div>

            <div className="col-md-10 col-sm-10 col-xs-9">
              <div className="profile-school">{item.course_name}</div>
              <div>{item.associateWith}</div>
              <div>
                {(isPublic.isPublic)? 
                  <div style={{color:"green"}}><i className="fa fa-check-circle-o"></i> Công khai</div> 
                  : <div style={{color:"#990000"}}><i className="fa fa-times-circle-o"></i> Ẩn</div> 
                }
              </div>
            </div>

            <div className="col-md-1 col-sm-1 col-xs-2">
              <Link onClick={() => edit(item._id, true)}><i className="write large icon pull-right"></i></Link>
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
      district: "",
      province: ""
    }  
  }
  
  getDistrict = (district_id) => {
    if (district_id) {
      request
      .get(`/api/location/districts/district/${district_id}`)
      .end((err, res) => {
        const district = res.body.result;
        const result = district.type.toLowerCase() + " " + district.name;
        this.setState({ district: result });
      })
    }
  }

  getProvince = (province_id) => {
    if (province_id) {
      request
      .get(`/api/location/provinces/province/${province_id}`)
      .end((err, res) => {
        const province = res.body.result;
        const result = province.type.toLowerCase() + " " + province.name;
        this.setState({ province: result });
      })
    }
  }
  
  componentWillMount () {
    const { item } = this.props;
    if (item.address) {
      this.getProvince(item.address.province);
      this.getDistrict(item.address.district);
    }
  }
  
  render() {
    const { item } = this.props;
    const { district, province } = this.state;
    return (
      <div>
        <div className="row">
					<div className="col-md-2 col-sm-4 col-xs-4">
						<div className="padding-top-15">
							Email
						</div>
					</div>
					<div className="col-md-4 col-sm-8 col-xs-8">
						<div className="padding-top-15">
							{item.email}
						</div>
					</div>

					<div className="col-md-2 col-sm-4 col-xs-4">
						<div className="padding-top-15">
							Điện thoại
						</div>
					</div>
					<div className="col-md-4 col-sm-8 col-xs-8">
						<div className="padding-top-15">
							{item.phone}
						</div>
					</div>
        </div>

        <div className="row">
          <div className="col-md-2 col-sm-4 col-xs-4">
						<div className="padding-top-15">
							Địa chỉ
						</div>
					</div>
					<div className="col-md-4 col-sm-8 col-xs-8">
						<div className="padding-top-15">
							{(item.address) ?
								(<span>{item.address.streetNo} {item.address.ward} {district} {province}</span>)
								: ""}
						</div>
					</div>

					<div className="col-md-2 col-sm-4 col-xs-4">
						<div className="padding-top-15">
							Ngày sinh
						</div>
					</div>
					<div className="col-md-4 col-sm-8 col-xs-8">
						<div className="padding-top-15">
							{moment(item.birthdate).format("DD/MM/YYYY")}
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-2 col-sm-4 col-xs-4">
						<div className="padding-top-15">
							Website
						</div>
					</div>
					<div className="col-md-4 col-sm-8 col-xs-8">
						<div className="padding-top-15">
							{item.website}
						</div>
					</div>

					<div className="col-md-2 col-sm-4 col-xs-4">
						<div className="padding-top-15">
							Giới tính
						</div>
					</div>
					<div className="col-md-4 col-sm-8 col-xs-8">
						<div className="padding-top-15">
							{(item.gender == "Không xác định")? "" : item.gender}
						</div>
					</div>
        </div>
      </div>
    )
  }
}

export class CertificateElement extends React.Component {
  render() {
    const { item, edit } = this.props;
    const isPublic = item.isPublic.find((elem) => {
      return elem.recruitmentId == null;
    });
    return (
      <div>
        <div className="row padding-top-25" key={item._id}>
            <div className="col-md-1 col-sm-1 col-xs-1">

            </div>

            <div className="col-md-10 col-sm-10 col-xs-9">
              <div className="profile-school">{item.certificate_name}</div>
              {(item.associateWith)? <div>Đơn vị cấp bằng: {item.associateWith}</div> : null}
              {(item.classification)? <div>Xếp loại: {item.classification}</div> : null}
              <div>
                {moment(item.receiveDate).format("DD/MM/YYYY")}
              </div>
              {(item.result)? <div>Kết quả: {item.result}</div> : null}
              <div>
                {(isPublic.isPublic)? 
                  <div style={{color:"green"}}><i className="fa fa-check-circle-o"></i> Công khai</div> 
                  : <div style={{color:"#990000"}}><i className="fa fa-times-circle-o"></i> Ẩn</div> 
                }
              </div>
            </div>

            <div className="col-md-1 col-sm-1 col-xs-2">
              <Link onClick={() => edit(item._id, true)}><i className="write large icon pull-right"></i></Link>
            </div>
          </div>
      </div>
    )
  }
}

export class MiddlemanElement extends React.Component {
  render() {
    const { item, edit } = this.props;
    const isPublic = item.isPublic.find((elem) => {
      return elem.recruitmentId == null;
    });
    return (
      <div>
        <div className="row padding-top-25" key={item._id}>
            <div className="col-md-1 col-sm-1 col-xs-1">

            </div>

            <div className="col-md-10 col-sm-10 col-xs-9">
              <div className="profile-school">{item.fullName}</div>
              <div>{item.jobField}</div>
              <div>{item.email}</div>
              <div>{item.phoneNo}</div>
              <div>
                {(isPublic.isPublic)? 
                  <div style={{color:"green"}}><i className="fa fa-check-circle-o"></i> Công khai</div> 
                  : <div style={{color:"#990000"}}><i className="fa fa-times-circle-o"></i> Ẩn</div> 
                }
              </div>
            </div>

            <div className="col-md-1 col-sm-1 col-xs-2">
              <Link onClick={() => edit(item._id, true)}><i className="write large icon pull-right"></i></Link>
            </div>
          </div>
      </div>
    )
  }
}