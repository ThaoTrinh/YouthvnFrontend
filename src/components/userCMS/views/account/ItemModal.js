import React from 'react';
import {Modal, Button} from 'react-bootstrap';

import {EducationForm, ExperienceForm, ProjectForm, ActivityForm, AwardForm, CourseForm, LanguageForm, SkillForm, PublicationForm, BasicInfoForm, CertificateForm, MiddlemanForm} from './ItemFormNew';
import {ITEM_TYPE} from '../../../../commons/constants';
import {EventOrgForm} from './ItemFormNew';

export const ItemModal = ({showModal, close, title, body_header, handleChanged, handleSubmited, handleDeleted,
                            item, itemType , time , content}) => {
    return (
        <div className="modal-container text-left usercms-modal">
            <Modal show={showModal}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">{title}</Modal.Title>
                </Modal.Header>
                <form className="form-horizontal usercms-detail" onSubmit={(e) => handleSubmited(e)}>
                    <Modal.Body>
                        {(itemType === ITEM_TYPE.EDUCATION)? <EducationForm handleChanged={handleChanged} item={item} />
                        : (itemType === ITEM_TYPE.EXPERIENCE)? <ExperienceForm handleChanged={handleChanged} item={item} /> 
                        : (itemType === ITEM_TYPE.AWARD)? <AwardForm handleChanged={handleChanged} item={item} /> 
                        : (itemType === ITEM_TYPE.ACTIVITY)? <ActivityForm handleChanged={handleChanged} item={item} /> 
                        : (itemType === ITEM_TYPE.COURSE)? <CourseForm handleChanged={handleChanged} item={item} /> 
                        : (itemType === ITEM_TYPE.LANGUAGE)? <LanguageForm handleChanged={handleChanged} item={item} /> 
                        : (itemType === ITEM_TYPE.PROJECT)? <ProjectForm handleChanged={handleChanged} item={item} /> 
                        : (itemType === ITEM_TYPE.PUBLICATION)? <PublicationForm handleChanged={handleChanged} item={item} />
                        : (itemType === ITEM_TYPE.SKILL)? <SkillForm handleChanged={handleChanged} item={item} />
                        : (itemType === ITEM_TYPE.CERTIFICATE)? <CertificateForm handleChanged={handleChanged} item={item} />
                        : (itemType === ITEM_TYPE.MIDDLEMAN)? <MiddlemanForm handleChanged={handleChanged} item={item} />
                        : (itemType === ITEM_TYPE.EVENT)? <EventOrgForm title={title} time={time} content={content}/>
                        : <BasicInfoForm handleChanged={handleChanged} item={item} /> }
                    </Modal.Body>
                    <Modal.Footer>
                        {(itemType == ITEM_TYPE.EVENT)? null:<Button type="submit" className="btn btn-primary btn-lg pull-left">Lưu</Button> }
                        {(item !== undefined && itemType !== ITEM_TYPE.BASICINFO)?
                        <div className="pull-left">
                            <Button className="btn btn-default btn-lg" onClick={(e) => handleDeleted(e)}>Xóa</Button>
                        </div>
                        : null}
                        <Button type="button" className="btn btn-default btn-lg" onClick={(e) => close(e)}>Trở về</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}