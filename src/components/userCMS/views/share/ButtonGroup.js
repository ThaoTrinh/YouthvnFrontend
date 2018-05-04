import React from "react";
 
export default class ButtonGroup extends React.Component {
    render() {
        const { handleSubmited, handleBack, handleReset } = this.props;
        return (
            <div className="form-group">
                <button className="ui large button recruitment-apply-btn" onClick={(e) => handleSubmited(e)}>Tạo</button>
                <button className="ui large button" onClick={() => handleReset()}>Làm mới</button>
                <button className="ui large button pull-right" onClick={() => handleBack()}>Trở về</button>
            </div>
        );
    }
}