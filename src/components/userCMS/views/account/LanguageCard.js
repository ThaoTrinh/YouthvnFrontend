import React from 'react';
import request from 'superagent';

import ItemTitle from './ItemTitle';
import { ItemModal } from './ItemModal';
import { LanguageElement } from './ItemElement';
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

export default class LanguageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      language_name: [],
      level: "",
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
    this.handleLanguageChanged = this.handleLanguageChanged.bind(this)
    this.handleLevelChanged = this.handleLevelChanged.bind(this)
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
      language_name: [],
      level: "",
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
      language_name: item.language_name,
      level: item.level,
      isPublic: isPublic.isPublic,
      showModal: showModal
    })
  }

  handleLanguageChanged(e) {
    this.setState({ language_name: e.value });
  }

  handleLevelChanged(e) {
    const value = e.target.value;
    this.setState({ level: value });
  }

  handlePublicChanged(e) {
    const value = e.target.checked;
    this.setState({ isPublic: value });
  }

  handleChanged(e, name, context = null) {
    switch (name) {
      case "language":
        this.handleLanguageChanged(e);
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
    const { id, language_name, level, isPublic } = this.state;
    const cvCode = this.props.cvCode;
    const token = localStorage.getItem('token');
    const data = {
      language_name,
      level,
      isPublic: [{ isPublic, cvCode }]
    };

    var url = "api/userCV/create-language";
    const mode = (id) ? MODE.EDIT : MODE.CREATE;
    if (mode === MODE.EDIT) {
      url = "api/userCV/edit-language?id=" + id;
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
      url: "api/userCV/delete-language",
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
        <ItemTitle title="Ngôn ngữ" create={this.create} />

        {(!$.isEmptyObject(detail)) ?
          detail.map(u => <LanguageElement key={u._id} item={u} edit={this.edit} />)
          : null}

        <ItemModal showModal={showModal}
          close={this.closeModal}
          itemType={ITEM_TYPE.LANGUAGE}
          title={title}
          handleChanged={this.handleChanged}
          handleSubmited={this.handleSubmited}
          handleDeleted={this.handleDeleted}
          item={item} />
      </div>
    )
  }
}