import React, { Component } from 'react';

class ItemCVTitle extends Component {
    render () {
        const { title } = this.props;
        return (
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="profile-title">{title}</h2>
                </div>
            </div>
        )
    }
}

export default ItemCVTitle