import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';

import ItemTitle from './ItemTitle';
import { ItemModal } from './ItemModal';
import { CourseElement } from './ItemElement';
import { ITEM_TYPE } from '../../../../commons/constants';
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

export default class CourseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      course_name: "",
      associateWith: "",
      isPublic: true,

      showModal: false,

      detail: []
    }
    this.handleChanged = this.handleChanged.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmited = this.handleSubmited.bind(this);
    this.handleDeleted = this.handleDeleted.bind(this)
    this.edit = this.edit.bind(this);
    this.create = this.create.bind(this);
    this.handleCourseChanged = this.handleCourseChanged.bind(this)
    this.handleAssociateWithChanged = this.handleAssociateWithChanged.bind(this)
    this.handlePublicChanged = this.handlePublicChanged.bind(this)
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
      course_name: "",
      associateWith: "",
      isPublic: true,
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
      course_name: item.course_name,
      associateWith: item.associateWith,
      isPublic: isPublic.isPublic,
      showModal: showModal
    })
  }

  handleCourseChanged(e) {
    const value = e.target.value;
    this.setState({ course_name: value });
  }

  handleAssociateWithChanged(e) {
    const value = e.target.value;
    this.setState({ associateWith: value });
  }

  handlePublicChanged(e) {
    const value = e.target.checked;
    this.setState({ isPublic: value });
  }

  handleChanged(e, name, context = null) {
    switch (name) {
      case "course":
        this.handleCourseChanged(e);
        break;
      case "isPublic":
        this.handlePublicChanged(e);
        break;
      case "associateWith":
        this.handleAssociateWithChanged(e);
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
    const { id, course_name, associateWith, isPublic } = this.state;
    const cvCode = this.props.cvCode;
    const token = localStorage.getItem('token');
    const data = {
      course_name,
      associateWith,
      isPublic: [{ isPublic, cvCode }]
    };

    var url = "api/userCV/create-course";
    const mode = (id) ? MODE.EDIT : MODE.CREATE;
    if (mode == MODE.EDIT) {
      url = "api/userCV/edit-course?id=" + id;
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
      url: "api/userCV/delete-course",
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
        <ItemTitle title="Khóa học" create={this.create} />

        {(!$.isEmptyObject(detail)) ?
          detail.map(u => <CourseElement key={u._id} item={u} edit={this.edit} />)
          : null}

        <ItemModal showModal={showModal}
          close={this.closeModal}
          itemType={ITEM_TYPE.COURSE}
          title={title}
          handleChanged={this.handleChanged}
          handleSubmited={this.handleSubmited}
          handleDeleted={this.handleDeleted}
          item={item} />
      </div>
    )
  }
}