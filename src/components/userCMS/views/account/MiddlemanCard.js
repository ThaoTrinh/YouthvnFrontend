import React from 'react';
import request from 'superagent';

import ItemTitle from './ItemTitle';
import { ItemModal } from './ItemModal';
import { MiddlemanElement } from './ItemElement';
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

export default class MiddlemanCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      fullName: "",
      jobType: "",
      email: "",
      phoneNo: "",
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
    this.handleFullNameChanged = this.handleFullNameChanged.bind(this)
    this.handleJobTypeChanged = this.handleJobTypeChanged.bind(this)
    this.handleEmailChanged = this.handleEmailChanged.bind(this)
    this.handlePhoneChanged = this.handlePhoneChanged.bind(this)
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
      fullName: "",
      jobType: "",
      email: "",
      phoneNo: "",
      isPublic: true,
      showModal: showModal
    })
  }

  edit(id, showModal) {
    const { detail } = this.state;
    const item = detail.find((elem) => {
      return elem._id == id;
    })
    const { cvCode } = this.props;
    const isPublic = item.isPublic.find((elem) => {
      return elem.cvCode == cvCode;
    })
    this.setState({
      id: item._id,
      fullName: item.fullName,
      jobType: item.jobType,
      email: item.email,
      phoneNo: item.phoneNo,
      isPublic: isPublic.isPublic,
      showModal: showModal
    })
  }

  handleFullNameChanged(e) {
    this.setState({ fullName: e.target.value });
  }

  handleJobTypeChanged(e) {
    const value = e.target.value;
    this.setState({ jobType: value });
  }

  handleEmailChanged(e) {
      this.setState({ email: e.target.value });
  }

  handlePhoneChanged(e) {
      this.setState({ phoneNo: e.target.value });
  }

  handlePublicChanged(e) {
    const value = e.target.checked;
    this.setState({ isPublic: value });
  }

  handleChanged(e, name, context = null) {
    switch (name) {
      case "fullName":
        this.handleFullNameChanged(e);
        break;
      case "jobType":
        this.handleJobTypeChanged(e);
        break;
      case "email":
        this.handleEmailChanged(e);
        break;
      case "phone":
        this.handlePhoneChanged(e);
        break;
      case "isPublic":
        this.handlePublicChanged(e);
        break;
      case "level":
        this.handleLevelChanged(e);
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
    const { id, fullName, jobType, email, phoneNo, isPublic } = this.state;
    const cvCode = this.props.cvCode;
    const token = localStorage.getItem('token');
    const data = {
      fullName, 
      jobType, 
      email, 
      phoneNo,
      isPublic: [{ isPublic, cvCode }]
    };
    console.log(data);

    var url = "api/userCV/create-middleman";
    const mode = (id) ? MODE.EDIT : MODE.CREATE;
    if (mode === MODE.EDIT) {
      url = "api/userCV/edit-middleman?id=" + id;
    }
    request
      .post(url)
      .set('x-access-token', token)
      .send(data)
      .end((error, res) => {
        if (res.body.success) {
          swal({
            title: 'Cập nhật thành công',
            type: 'success',
            timer: 1200,
            showConfirmButton: false,
            allowOutsideClick: false
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

  handleDeleted(e) {
    e.preventDefault();
    const { id } = this.state;
    const token = localStorage.getItem('token');

    $.ajax({
      method: "POST",
      url: "api/userCV/delete-middleman",
      headers: {
        'x-access-token': token
      },
      data: {
        id,
      }
    }).done(response => {
      if (response.success) {
        swal({
          title: 'Cập nhật thành công',
          type: 'success',
          timer: 1200,
          showConfirmButton: false,
          allowOutsideClick: false
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

  render() {
    const { id, showModal } = this.state;
    const { detail } = this.props;
    const item = { ...this.state };
    const title = (id) ? TITLE_MODAL.EDIT : TITLE_MODAL.CREATE;
    return (
      <div className="content profile-border">
        <ItemTitle title="Người giới thiệu" create={this.create} />

        {(!$.isEmptyObject(detail)) ?
          detail.map(u => <MiddlemanElement key={u._id} item={u} edit={this.edit} />)
          : null}

        <ItemModal showModal={showModal}
          close={this.closeModal}
          itemType={ITEM_TYPE.Middleman}
          title={title}
          handleChanged={this.handleChanged}
          handleSubmited={this.handleSubmited}
          handleDeleted={this.handleDeleted}
          item={item} />
      </div>
    )
  }
}