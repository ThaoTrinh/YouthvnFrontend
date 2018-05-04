import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

export const EvaluateModal = ({showModal, close, note, rating,
        handleRatingChanged, handleNoteChanged, handleSubmited}) => {
    return (
        <div className="modal-container text-left usercms-modal">
            <Modal show={showModal}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Đánh giá và nhận xét</Modal.Title>
                </Modal.Header>
                <form className="form-horizontal usercms-detail" onSubmit={(e) => handleSubmited(e)}>
                    <Modal.Body>
                        <div className="form-group" style={{lineHeight: 5+'px', marginBottom: 15+'px'}}>
                            <label className="col-sm-4 control-label">Ngoại hình</label>
                            <div className="col-sm-8" style={{fontSize: 24}}>
                                <StarRatingComponent
                                    name="appearance"
                                    starCount={5}
                                    value={rating.appearance}
                                    onStarClick={handleRatingChanged}
                                    starColor={"#33cc33"}
                                    emptyStarColor={"grey"}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{lineHeight: 5+'px', marginBottom: 15+'px'}}>
                            <label className="col-sm-4 control-label">Trình độ chuyên môn</label>
                            <div className="col-sm-8" style={{fontSize: 24}}>
                                <StarRatingComponent
                                    name="qualification"
                                    starCount={5} 
                                    value={rating.qualification}
                                    onStarClick={handleRatingChanged}
                                    starColor={"#33cc33"}
                                    emptyStarColor={"grey"}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{lineHeight: 5+'px', marginBottom: 15+'px'}}>
                            <label className="col-sm-4 control-label">Kỹ năng giao tiếp</label>
                            <div className="col-sm-8" style={{fontSize: 24}}>
                                <StarRatingComponent
                                    name="communication"
                                    starCount={5}
                                    value={rating.communication}
                                    onStarClick={handleRatingChanged}
                                    starColor={"#33cc33"}
                                    emptyStarColor={"grey"}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{lineHeight: 5+'px', marginBottom: 15+'px'}}>
                            <label className="col-sm-4 control-label">Kinh nghiệm làm việc</label>
                            <div className="col-sm-8" style={{fontSize: 24}}>
                                <StarRatingComponent
                                    name="experience"
                                    starCount={5}
                                    value={rating.experience}
                                    onStarClick={handleRatingChanged}
                                    starColor={"#33cc33"}
                                    emptyStarColor={"grey"}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-4">Nhận xét</label>
                            <div className="col-sm-8">
                                <textarea rows="4" className="form-control" value={note} onChange={(e) => handleNoteChanged(e)}></textarea>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" className="btn btn-primary pull-left">
                            Xác nhận
                        </Button>
                        <Button type="button" className="btn btn-default" id="closeBtn">Trở về</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}