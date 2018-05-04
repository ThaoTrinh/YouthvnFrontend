import React, { Component } from 'react';
import {Link} from 'react-router';

class ItemTitle extends Component {
    render () {
        const {title, create} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-11 col-sm-11 col-xs-10">
                    <h2 className="profile-title">{title}</h2>
                    </div>

                    <div className="col-md-1 col-sm-1 col-xs-2">
                        <Link onClick={(e) => create(true)}><i className="large plus icon pull-right"></i></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemTitle