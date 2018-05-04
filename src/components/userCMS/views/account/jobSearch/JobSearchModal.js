import React from 'react';
import {Modal, Button} from 'react-bootstrap';

import JobSearchForm from './JobSearchForm';

export const JobSearchModal = ({showModal, close, handleChanged, handleSubmited, item}) => {
    return (
        <div className="modal-container text-left usercms-modal">
            <Modal show={showModal}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Thông tin tìm việc</Modal.Title>
                </Modal.Header>
                <form className="form-horizontal usercms-detail" onSubmit={(e) => handleSubmited(e)}>
                    <Modal.Body>
                        <JobSearchForm item={item} handleChanged={handleChanged} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" className="btn btn-primary btn-lg pull-left">Lưu</Button>
                        <Button type="button" className="btn btn-default btn-lg" id="closeBtn">Trở về</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}