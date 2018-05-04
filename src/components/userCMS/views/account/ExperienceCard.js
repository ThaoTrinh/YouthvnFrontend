import React from 'react';
import request from 'superagent';

import ItemTitle from './ItemTitle';
import { ItemModal } from './ItemModal';
import { ExperienceElement } from './ItemElement';
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

export default class ExperienceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      company_name: "",
      start: {
        month: "",
        year: ""
      },
      end: {
        month: "",
        year: ""
      },
      location: "",
      position: "",
      description: "",
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
    this.handleCompanyChanged = this.handleCompanyChanged.bind(this)
    this.handleDescriptionChanged = this.handleDescriptionChanged.bind(this)
    this.handleLocationChanged = this.handleLocationChanged.bind(this)
    this.handlePositionChanged = this.handlePositionChanged.bind(this)
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
      company_name: "",
      start: "",
      end: "",
      location: "",
      position: "",
      description: "",
      isPublic: true,
      isActive: false,
      file_url: "",
      file_name: "",
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
      company_name: item.company_name,
      start: item.start,
      end: item.end,
      location: item.location,
      position: item.position,
      description: item.description,
      isPublic: isPublic.isPublic,
      isActive: item.isActive,
      file_url: item.file_url,
      file_name: item.file_name,
      showModal: showModal
    })
  }

  handleCompanyChanged(e) {
    const value = e.target.value;
    this.setState({ company_name: value });
  }

  handlePositionChanged(e) {
    const value = e.target.value;
    this.setState({ position: value });
  }

  handleLocationChanged(e) {
    const value = e.target.value;
    this.setState({ location: value });
  }

  handleDescriptionChanged(e) {
    const value = e.target.value;
    this.setState({ description: value });
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
      case "company":
        this.handleCompanyChanged(e);
        break;
      case "position":
        this.handlePositionChanged(e);
        break;
      case "location":
        this.handleLocationChanged(e);
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
      case "description":
        this.handleDescriptionChanged(e);
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
    const { id, company_name, start, end, location, position, description, isPublic, isActive } = this.state;
    const cvCode = this.props.cvCode;
    const token = localStorage.getItem('token');
    const data = {
      company_name,
      start,
      end,
      position,
      location,
      description,
      isPublic: [{ isPublic, cvCode }],
      isActive
    };
    console.log(data);

    var url = "api/userCV/create-experience";
    const mode = (id) ? MODE.EDIT : MODE.CREATE;
    if (mode === MODE.EDIT) {
      url = "api/userCV/edit-experience?id=" + id;
    }
    console.log(data);
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
      url: "api/userCV/delete-experience",
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
        <ItemTitle title="Kinh nghiệm làm việc" create={this.create} />

        {(!$.isEmptyObject(detail)) ?
          detail.map(u => <ExperienceElement key={u._id} item={u} edit={this.edit} />)
          : null}

        <ItemModal showModal={showModal}
          close={this.closeModal}
          itemType={ITEM_TYPE.EXPERIENCE}
          title={title}
          handleChanged={this.handleChanged}
          handleSubmited={this.handleSubmited}
          handleDeleted={this.handleDeleted}
          item={item} />
      </div>
    )
  }
}