import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';

import ItemTitle from './ItemTitle';
import { ItemModal } from './ItemModal';
import { EducationElement } from './ItemElement';
import { ITEM_TYPE } from '../../../../commons/constants';
import { basename } from 'path';
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

export default class EducationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      school_name: "",
      start: "",
      end: "",
      location: "",
      major: "",
      description: "",
      grade: "",
      isPublic: true,
      isActive: false,
      file_url: "",
      file_name: "",

      showModal: false,

      detail: []
    }
    this.handleChanged = this.handleChanged.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmited = this.handleSubmited.bind(this);
    this.handleDeleted = this.handleDeleted.bind(this)
    this.edit = this.edit.bind(this);
    this.create = this.create.bind(this);
    this.handleSchoolChanged = this.handleSchoolChanged.bind(this)
    this.handleDescriptionChanged = this.handleDescriptionChanged.bind(this)
    this.handleLocationChanged = this.handleLocationChanged.bind(this)
    this.handleMajorChanged = this.handleMajorChanged.bind(this)
    this.handlePublicChanged = this.handlePublicChanged.bind(this)
    this.handleStartChanged = this.handleStartChanged.bind(this)
    this.handleEndChanged = this.handleEndChanged.bind(this)
    this.handleActiveChanged = this.handleActiveChanged.bind(this)
    this.handleGradeChanged = this.handleGradeChanged.bind(this)
  }

  componentWillMount() {
    try {
      this.setState({
        detail: this.props.detail
      })
    } catch (error) {
      console.log(error);
    }
  }

  create(showModal) {
    this.setState({
      id: "",
      school_name: "",
      start: "",
      end: "",
      location: "",
      major: "",
      description: "",
      grade: "",
      isPublic: true,
      isActive: false,
      file_url: "",
      file_name: "",
      showModal: showModal
    })
  }

  edit(id, showModal) {
    const { detail } = this.state;
    const { cvCode } = this.props;
    const item = detail.find((elem) => {
      return elem._id == id;
    })
    const isPublic = item.isPublic.find((elem) => {
      return elem.cvCode == cvCode;
    })
    this.setState({
      id: item._id,
      school_name: item.school_name,
      start: item.start,
      end: item.end,
      location: item.location,
      major: item.major,
      description: item.description,
      grade: item.grade,
      isPublic: isPublic.isPublic,
      isActive: item.isActive,
      file_url: item.file_url,
      file_name: item.file_name,
      showModal: showModal
    })
  }

  handleSchoolChanged(e) {
    const value = (e)? e.value : "";
    this.setState({ school_name: value });
  }

  handleMajorChanged(e) {
    const value = (e)? e.value : "";
    this.setState({ major: value });
  }

  handleLocationChanged(e) {
    const value = e.target.value;
    this.setState({ location: value });
  }

  handleDescriptionChanged(e) {
    const value = e.target.value;
    this.setState({ description: value });
  }

  handleStartChanged(e) {
    console.log(e);
    this.setState({ start: e });
  }

  handleEndChanged(e) {
    console.log(e);
    this.setState({ end: e });
  }

  handleGradeChanged(e) {
    const value = e.target.value;
    this.setState({ grade: value });
  }

  handlePublicChanged(e) {
    const value = e.target.checked;
    this.setState({ isPublic: value });
  }

  handleActiveChanged(e) {
    const value = e.target.checked;
    this.setState({ isActive: value, end: "" }, () => {
      if (this.state.isActive == true) {
        $('#end').hide();
        $('label[for="end"]').hide();
      }
      else {
        $('#end').show();
        $('label[for="end"]').show();
      }
    });
  }

  handleChanged(e, name) {
    switch (name) {
      case "school":
        this.handleSchoolChanged(e);
        break;
      case "major":
        this.handleMajorChanged(e);
        break;
      case "location":
        this.handleLocationChanged(e);
        break;
      case "start":
        this.handleStartChanged(e);
        break;
      case "end":
        this.handleEndChanged(e);
        break;
      case "isPublic":
        this.handlePublicChanged(e);
        break;
      case "description":
        this.handleDescriptionChanged(e);
        break;
      case "isActive":
        this.handleActiveChanged(e);
        break;
      case "grade":
        this.handleGradeChanged(e);
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
    const { id, school_name, start, end, location, major, description, isPublic, isActive, grade } = this.state;
    const cvCode = this.props.cvCode;
    const token = localStorage.getItem('token');
    const data = {
      school_name,
      start: (start.value)? start.value : start,
      end: (end.value)? end.value : end,
      major,
      location,
      description,
      isPublic: [{ isPublic, cvCode }],
      isActive,
      grade
    };
    console.log(data);
    var url = "api/userCV/create-education";
    const mode = (id) ? MODE.EDIT : MODE.CREATE;
    if (mode == MODE.EDIT) {
      url = "api/userCV/edit-education?id=" + id;
    }
    request
      .post(url)
      .set('x-access-token', token)
      .send(data)
      .end((error, res) => {
        if (res.body.success) {
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

  handleDeleted(e) {
    e.preventDefault();
    const { id } = this.state;
    const token = localStorage.getItem('token');

    $.ajax({
      method: "POST",
      url: "api/userCV/delete-education",
      headers: {
        'x-access-token': token
      },
      data: {
        id,
      }
    }).done(response => {
      if (response.success) {
        swal({
          title: response.message,
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
          title: response.message,
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
    const { id, showModal } = this.state;
    const { detail } = this.props;
    const item = { ...this.state };
    const title = (id) ? TITLE_MODAL.EDIT : TITLE_MODAL.CREATE;
    return (
      <div className="content profile-border">
        <ItemTitle title="Học vấn" create={this.create} />

        {(!$.isEmptyObject(detail)) ?
          detail.map(u => <EducationElement key={u._id} item={u} edit={this.edit} />)
          : null}

        <ItemModal showModal={showModal}
          close={this.closeModal}
          itemType={ITEM_TYPE.EDUCATION}
          title={title}
          handleChanged={this.handleChanged}
          handleSubmited={this.handleSubmited}
          handleDeleted={this.handleDeleted}
          item={item} />
      </div>
    )
  }
}