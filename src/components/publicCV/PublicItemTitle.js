import React, { Component } from 'react';

export default class PublicItemTitle extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className="padding-top-15">
                <h2 className="profile-title">{title}</h2>
            </div>
        )
    }
}