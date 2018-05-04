import React from 'react';
import request from 'superagent';

import ItemTitle from './ItemTitle';
import { ItemModal } from './ItemModal';
import { CertificateElement } from './ItemElement';
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

export default class CertificateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            associateWith: "",
            certificate_name: "",
            receivedDate: new Date(),
            degree: "",
            classification: "",
            result: "",
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
        this.handleCertificateChanged = this.handleCertificateChanged.bind(this)
        this.handlePublicChanged = this.handlePublicChanged.bind(this)
        this.handleClassificationChanged = this.handleClassificationChanged.bind(this)
        this.handleDegreeChanged = this.handleDegreeChanged.bind(this)
        this.handleResultChanged = this.handleResultChanged.bind(this)
        this.handleReceivedDateChanged = this.handleReceivedDateChanged.bind(this)
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
            associateWith: "",
            certificate_name: "",
            receivedDate: new Date(),
            degree: "",
            classification: "",
            result: "",
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
            associateWith: item.associateWith,
            certificate_name: item.certificate_name,
            receivedDate: item.receivedDate,
            degree: item.degree,
            classification: item.classification,
            result: item.result,
            isPublic: isPublic.isPublic,
            showModal: showModal
        })
    }

    handleAssociateWithChanged(e) {
        const value = e.target.value;
        this.setState({ associateWith: value });
    }

    handleCertificateChanged(e) {
        const value = e.target.value;
        this.setState({ certificate_name: value });
    }

    handleClassificationChanged(e) {
        const value = e.target.value;
        this.setState({ classification: value });
    }

    handleResultChanged(e) {
        const value = e.target.value;
        this.setState({ result: value });
    }

    handleDegreeChanged(e) {
        const value = e.target.value;
        this.setState({ degree: value });
    }

    handleReceivedDateChanged(e) {
        this.setState({ receivedDate: new Date(e) });
    }

    handlePublicChanged(e) {
        const value = e.target.checked;
        this.setState({ isPublic: value });
    }

    handleChanged(e, name) {
        switch (name) {
            case "certificate":
                this.handleCertificateChanged(e);
                break;
            case "classification":
                this.handleClassificationChanged(e);
                break;
            case "result":
                this.handleResultChanged(e);
                break;
            case "degree":
                this.handleDegreeChanged(e);
                break;
            case "receivedDate":
                this.handleReceivedDateChanged(e);
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
        const { id, certificate_name, receivedDate, degree, classification, result, isPublic, associateWith } = this.state;
        const cvCode = this.props.cvCode;
        const token = localStorage.getItem('token');
        const data = {
            certificate_name,
            associateWith,
            receivedDate,
            degree,
            classification,
            result,
            isPublic: [{ isPublic, cvCode }]
        };

        var url = "api/userCV/create-certificate";
        const mode = (id) ? MODE.EDIT : MODE.CREATE;
        if (mode === MODE.EDIT) {
            url = "api/userCV/edit-certificate?id=" + id;
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
            url: "api/userCV/delete-certificate",
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
                <ItemTitle title="Bằng cấp" create={this.create} />

                {(!$.isEmptyObject(detail)) ?
                    detail.map(u => <CertificateElement key={u._id} item={u} edit={this.edit} />)
                    : null}

                <ItemModal showModal={showModal}
                    close={this.closeModal}
                    itemType={ITEM_TYPE.CERTIFICATE}
                    title={title}
                    handleChanged={this.handleChanged}
                    handleSubmited={this.handleSubmited}
                    handleDeleted={this.handleDeleted}
                    item={item} />
            </div>
        )
    }
}