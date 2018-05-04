import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';

import ItemTitle from './ItemTitle';
import { ItemModal } from './ItemModal';
import { PublicationElement } from './ItemElement';
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

export default class PublicationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      publication_name: "",
      publisher: "",
      publishedDate: new Date(),
      coAuthor: [],
      publication_url: "",
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
    this.handlePublicationChanged = this.handlePublicationChanged.bind(this)
    this.handlePublisherChanged = this.handlePublisherChanged.bind(this)
    this.handlePublicChanged = this.handlePublicChanged.bind(this)
    this.handlePublishedDateChanged = this.handlePublishedDateChanged.bind(this)
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
      publication_name: "",
      publisher: "",
      publishedDate: new Date(),
      coAuthor: [],
      publication_url: "",
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
      publication_name: item.publication_name,
      publisher: item.publisher,
      publishedDate: item.publishedDate,
      coAuthor: item.coAuthor,
      publication_url: item.publication_url,
      isPublic: isPublic.isPublic,
      showModal: showModal
    })
  }

  handlePublicationChanged(e) {
    const value = e.target.value;
    this.setState({ publication_name: value });
  }

  handlePublisherChanged(e) {
    const value = e.target.value;
    this.setState({ publisher: value });
  }

  handlePublishedDateChanged(e) {
    console.log(new Date(e));
    this.setState({ publishedDate: new Date(e) });
  }

  handleCoAuthorChanged(e) {
    this.setState({ coAuthor: e });
  }

  handleUrlChanged(e) {
    const value = e.target.value;
    this.setState({ publication_url: value });
  }

  handlePublicChanged(e) {
    const value = e.target.checked;
    this.setState({ isPublic: value });
  }

  handleChanged(e, name) {
    switch (name) {
      case "publication":
        this.handlePublicationChanged(e);
        break;
      case "publisher":
        this.handlePublisherChanged(e);
        break;
      case "publishedDate":
        this.handlePublishedDateChanged(e);
        break;
      case "coAuthor":
        this.handleCoAuthorChanged(e);
        break;
      case "url":
        this.handleUrlChanged(e);
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
    const { id, publication_name, publisher, publishedDate, coAuthor, publication_url, isPublic } = this.state;
    const cvCode = this.props.cvCode;
    const token = localStorage.getItem('token');
    const data = {
      publication_name,
      publisher,
      publishedDate,
      coAuthor,
      publication_url,
      isPublic: [{ isPublic, cvCode }]
    };

    var url = "api/userCV/create-publication";
    const mode = (id) ? MODE.EDIT : MODE.CREATE;
    if (mode === MODE.EDIT) {
      url = "api/userCV/edit-publication?id=" + id;
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
      url: "api/userCV/delete-publication",
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
        <ItemTitle title="Báo xuất bản" create={this.create} />

        {(!$.isEmptyObject(detail)) ?
          detail.map(u => <PublicationElement key={u._id} item={u} edit={this.edit} />)
          : null}

        <ItemModal showModal={showModal}
          close={this.closeModal}
          itemType={ITEM_TYPE.PUBLICATION}
          title={title}
          handleChanged={this.handleChanged}
          handleSubmited={this.handleSubmited}
          handleDeleted={this.handleDeleted}
          item={item} />
      </div>
    )
  }
}