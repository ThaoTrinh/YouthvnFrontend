import React from 'react';
import request from 'superagent';

import ItemTitle from './ItemTitle';
import { ItemModal } from './ItemModal';
import { SkillElement } from './ItemElement';
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

export default class SkillCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      skill_name: [],
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
    this.handleSkillChanged = this.handleSkillChanged.bind(this)
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
      skill_name: [],
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
      skill_name: item.skill_name,
      isPublic: isPublic.isPublic,
      showModal: showModal
    })
  }

  handleSkillChanged(e) {
    this.setState({ skill_name: e });
  }

  handlePublicChanged(e) {
    const value = e.target.checked;
    this.setState({ isPublic: value });
  }

  handleChanged(e, name) {
    switch (name) {
      case "skill":
        this.handleSkillChanged(e);
        break;
      case "isPublic":
        this.handlePublicChanged(e);
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
    const { id, skill_name, isPublic } = this.state;
    const cvCode = this.props.cvCode;
    const token = localStorage.getItem('token');
    const data = {
      skill_name,
      isPublic: [{ isPublic, cvCode }]
    };
    console.log(data);
    var url = "api/userCV/create-skill";
    const mode = (id) ? MODE.EDIT : MODE.CREATE;
    if (mode === MODE.EDIT) {
      url = "api/userCV/edit-skill?id=" + id;
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
      url: "api/userCV/delete-skill",
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
        <ItemTitle title="Kỹ năng" create={this.create} />

        {(!$.isEmptyObject(detail)) ?
          detail.map(u => <SkillElement key={u._id} item={u} edit={this.edit} />)
          : null}

        <ItemModal showModal={showModal}
          close={this.closeModal}
          itemType={ITEM_TYPE.SKILL}
          title={title}
          handleChanged={this.handleChanged}
          handleSubmited={this.handleSubmited}
          handleDeleted={this.handleDeleted}
          item={item} />
      </div>
    )
  }
}