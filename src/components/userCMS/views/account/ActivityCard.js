import React from 'react';
import request from 'superagent';

import ItemTitle from './ItemTitle';
import { ItemModal } from './ItemModal';
import { ActivityElement } from './ItemElement';
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

export default class ActivityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      activity_name: "",
      start: {
        month: "",
        year: ""
      },
      end: {
        month: "",
        year: ""
      },
      role: "",
      isActive: false,
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
    this.handleActivityChanged = this.handleActivityChanged.bind(this)
    this.handleRoleChanged = this.handleRoleChanged.bind(this)
    this.handlePublicChanged = this.handlePublicChanged.bind(this)
    this.handleStartMonthChanged = this.handleStartMonthChanged.bind(this)
    this.handleStartYearChanged = this.handleStartYearChanged.bind(this)
    this.handleEndMonthChanged = this.handleEndMonthChanged.bind(this)
    this.handleEndYearChanged = this.handleEndYearChanged.bind(this)
    this.handleActiveChanged = this.handleActiveChanged.bind(this)
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
      activity_name: "",
      start: "",
      end: "",
      role: "",
      isPublic: true,
      isActive: false,
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
      activity_name: item.activity_name,
      start: item.start,
      end: item.end,
      role: item.role,
      isPublic: isPublic.isPublic,
      isActive: item.isActive,
      showModal: showModal
    })
  }

  handleActivityChanged(e) {
    const value = e.target.value;
    this.setState({ activity_name: value });
  }

  handleRoleChanged(e) {
    const value = e.target.value;
    this.setState({ role: value });
  }

  handleStartMonthChanged(e) {
    let start = {...this.state.start};
    start.month = e.value;
    this.setState({start});
  }

  handleStartYearChanged(e) {
    let start = {...this.state.start};
    start.year = e.value;
    this.setState({start});
  }

  handleEndMonthChanged(e) {
    let end = {...this.state.end};
    end.month = e.value;
    this.setState({end});
  }

  handleEndYearChanged(e) {
    let end = {...this.state.end};
    end.year = e.value;
    this.setState({end});
  }

  handlePublicChanged(e) {
    const value = e.target.checked;
    this.setState({ isPublic: value });
  }

  handleActiveChanged(e) {
    const value = e.target.checked;
    this.setState({ isActive: value, end: { month: "", year: "" } }, () => {
      if (this.state.isActive == true) {
        $('label[for="end"]').parent().hide();
      }
      else {
        $('label[for="end"]').parent().show();
      }
    });
  }

  handleChanged(e, name) {
    switch (name) {
      case "activity":
        this.handleActivityChanged(e);
        break;
      case "startMonth":
        this.handleStartMonthChanged(e);
        break;
      case "startYear":
        this.handleStartYearChanged(e);
        break;
      case "endMonth":
        this.handleEndMonthChanged(e);
        break;
      case "endYear":
        this.handleEndYearChanged(e);
        break;
      case "isPublic":
        this.handlePublicChanged(e);
        break;
      case "role":
        this.handleRoleChanged(e);
        break;
      case "isActive":
        this.handleActiveChanged(e);
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
    const { id, activity_name, start, end, role, isPublic, isActive } = this.state;
    const cvCode = this.props.cvCode;
    const token = localStorage.getItem('token');
    const data = {
      activity_name,
      start,
      end,
      role,
      isPublic: [{ isPublic, cvCode }],
      isActive
    };

    var url = "api/userCV/create-activity";
    const mode = (id) ? MODE.EDIT : MODE.CREATE;
    if (mode === MODE.EDIT) {
      url = "api/userCV/edit-activity?id=" + id;
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
      url: "api/userCV/delete-activity",
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
        <ItemTitle title="Hoạt động ngoại khóa" create={this.create} />

        {(!$.isEmptyObject(detail)) ?
          detail.map(u => <ActivityElement key={u._id} item={u} edit={this.edit} />)
          : null}

        <ItemModal showModal={showModal}
          close={this.closeModal}
          itemType={ITEM_TYPE.ACTIVITY}
          title={title}
          handleChanged={this.handleChanged}
          handleSubmited={this.handleSubmited}
          handleDeleted={this.handleDeleted}
          item={item} />
      </div>
    )
  }
}