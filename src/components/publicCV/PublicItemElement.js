import React from 'react';
import request from 'superagent';
import moment from 'moment';

export class PublicExperienceElement extends React.Component {
	render() {
		const { item } = this.props;
		const start_time = item.start.month + "/" + item.start.year;
		const end_time = (item.isActive === true) ? " - Hiện nay" : " - " + item.end.month + "/" + item.end.year;
		const time = start_time + end_time;
		return (
			<div>
				{(!item.isPublic) ? null :
					<div className="row padding-top-25" key={item._id}>
						<div className="col-md-1 col-sm-1 col-xs-1">

						</div>

						<div className="col-md-10 col-sm-10 col-xs-9">
							<div className="profile-school">{item.company_name}</div>
							<div>{item.position}</div>
							<div>{time}</div>
							<div>{item.description}</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

export class PublicEducationElement extends React.Component {
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
						const school = res.body.school;
						this.setState({ school_name: school.name });
					}
					else {
						alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
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
						const major = res.body.result;
						this.setState({ major: major.viName });
					}
					else {
						alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
					}
				})
		}
	}

	componentWillMount() {
		this.getSchool();
		this.getMajor();
	}

	render() {
		const { item } = this.props;
		const { school_name, major } = this.state;
		const start_time = item.start;
		const end_time = (item.isActive === true) ? " - Hiện nay" : " - " + item.end;
		const time = start_time + end_time;
		return (
			<div>
				{(!item.isPublic) ? null :
					<div className="row padding-top-25" key={item._id}>
						<div className="col-md-1 col-sm-1 col-xs-1">

						</div>

						<div className="col-md-10 col-sm-10 col-xs-9">
							<div className="profile-school">{school_name}</div>
							<div>{major}</div>
							{(item.grade) ? <div>Điểm: {item.grade}</div> : null}
							<div>{time}</div>
							<div>{item.description}</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

export class PublicProjectElement extends React.Component {
	render() {
		const { item } = this.props;
		const start_time = item.start.month + "/" + item.start.year;
		const end_time = (item.isActive === true) ? " - Hiện nay" : " - " + item.end.month + "/" + item.end.year;
		const time = start_time + end_time;
		return (
			<div>
				{(!item.isPublic) ? null :
					<div className="row padding-top-25" key={item._id}>
						<div className="col-md-1 col-sm-1 col-xs-1">

						</div>

						<div className="col-md-10 col-sm-10 col-xs-9">
							<div className="profile-school">{item.project_name}</div>
							<div>{item.position}</div>
							<div>{time}</div>
							<div>{item.description}</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

export class PublicLanguageElement extends React.Component {
	render() {
		const { item } = this.props;
		return (
			<div>
				{(!item.isPublic) ? null :
					<div className="row padding-top-25" key={item._id}>
						<div className="col-md-1 col-sm-1 col-xs-1">

						</div>

						<div className="col-md-10 col-sm-10 col-xs-9">
							<div className="profile-school">{item.language_name}</div>
							<div>{item.level}</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

export class PublicSkillElement extends React.Component {
	render() {
		const { item } = this.props;
		return (
			<div>
				{(!item.isPublic) ? null :
					<div className="row padding-top-25" key={item._id}>
						<div className="col-md-1 col-sm-1 col-xs-1">

						</div>

						<div className="col-md-10 col-sm-10 col-xs-9">
							<div className="profile-school">{item.skill_name.join(', ')}</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

export class PublicPublicationElement extends React.Component {
	render() {
		const { item } = this.props;
		return (
			<div>
				{(!item.isPublic) ? null :
					<div className="row padding-top-25" key={item._id}>
						<div className="col-md-1 col-sm-1 col-xs-1">

						</div>

						<div className="col-md-10 col-sm-10 col-xs-9">
							<div className="profile-school">{item.publication_name}</div>
							<div>Nhà xuất bản: {item.publisher}</div>
							<div>Ngày xuất bản: {moment(item.publishedDate).format("DD/MM/YYYY")}</div>
							<div>Tác giả đồng xuất bản: {item.coAuthor.join(" - ")}</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

export class PublicActivityElement extends React.Component {
	render() {
		const { item } = this.props;
		const start_time = item.start.month + "/" + item.start.year;
		const end_time = (item.end.year === "") ? " - Hiện nay" : " - " + item.end.month + "/" + item.end.year;
		const time = start_time + end_time;
		return (
			<div>
				{(!item.isPublic) ? null :
					<div className="row padding-top-25" key={item._id}>
						<div className="col-md-1 col-sm-1 col-xs-1">

						</div>

						<div className="col-md-10 col-sm-10 col-xs-9">
							<div className="profile-school">{item.activity_name}</div>
							<div>{item.position}</div>
							<div>{time}</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

export class PublicAwardElement extends React.Component {
	render() {
		const { item } = this.props;
		return (
			<div>
				{(!item.isPublic) ? null :
					<div className="row padding-top-25" key={item._id}>
						<div className="col-md-1 col-sm-1 col-xs-1">

						</div>

						<div className="col-md-10 col-sm-10 col-xs-9">
							<div className="profile-school">{item.award_name}</div>
							{(item.associateWith) ? <div>{item.associateWith}</div> : null}
							{(item.issuer) ? <div>{item.issuer}</div> : null}
							<div>{item.month}/{item.year}</div>
							<div>{item.description}</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

export class PublicCourseElement extends React.Component {
	render() {
		const { item } = this.props;
		return (
			<div>
				{(!item.isPublic) ? null :
					<div className="row padding-top-25" key={item._id}>
						<div className="col-md-1 col-sm-1 col-xs-1">

						</div>

						<div className="col-md-10 col-sm-10 col-xs-9">
							<div className="profile-school">{item.course_name}</div>
							<div>{item.associateWith}</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

export class PublicBasicInfoElement extends React.Component {
	constructor(props) {
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
					if (err) {
						console.log(err);
					}
					else {
						const district = res.body.result;
						const result = district.type.toLowerCase() + " " + district.name;
						this.setState({ district: result });
					}
				})
		}
	}

	getProvince = (province_id) => {
		if (province_id) {
			request
				.get(`/api/location/provinces/province/${province_id}`)
				.end((err, res) => {
					if (err) {
						console.log(err);
					}
					else {
						const province = res.body.result;
						const result = province.type.toLowerCase() + " " + province.name;
						this.setState({ province: result });
					}
				})
		}
	}

	componentWillMount() {
		const { item } = this.props;
		if (item.address) {
			this.getProvince(item.address.province);
			this.getDistrict(item.address.district);
		}
	}

	render() {
		const { item } = this.props;
		const { district, province } = this.state;
		console.log(item);
		return (
			<div>
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

export class PublicCertificateElement extends React.Component {
	render() {
		const { item } = this.props;
		return (
			<div>
				{(!item.isPublic) ? null :
					<div className="row padding-top-25" key={item._id}>
						<div className="col-md-1 col-sm-1 col-xs-1">

						</div>

						<div className="col-md-10 col-sm-10 col-xs-9">
							<div className="profile-school">{item.certificate_name}</div>
							{(item.associateWith) ? <div>Đơn vị cấp bằng: {item.associateWith}</div> : null}
							{(item.classification) ? <div>Xếp loại: {item.classification}</div> : null}
							<div>
								Ngày nhận: {moment(item.receiveDate).format("DD/MM/YYYY")}
							</div>
							{(item.result) ?
								<div>Kết quả: {item.result}</div>
								: null}
						</div>
					</div>
				}
			</div>
		)
	}
}

export class PublicMiddlemanElement extends React.Component {
	render() {
		const { item } = this.props;
		return (
			<div>
				{(!item.isPublic) ? null :
					<div className="row padding-top-25" key={item._id}>
						<div className="col-md-1 col-sm-1 col-xs-1">

						</div>

						<div className="col-md-10 col-sm-10 col-xs-9">
							<div className="profile-school">{item.fullName}</div>
							<div>{item.jobField}</div>
							<div>{item.email}</div>
							<div>{item.phoneNo}</div>
						</div>
					</div>
				}
			</div>
		)
	}
}