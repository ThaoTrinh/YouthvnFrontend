import React from 'react';

import PublicItemTitle from './PublicItemTitle';
import { PublicLanguageElement } from './PublicItemElement';

const $ = window.jQuery;

export default class PublicLanguageCard extends React.Component {
    getDetail = (detail) => {
        const results = detail.filter((item) => {
            return item.isPublic == true;
        });
        return results.length;
    }

    render() {
        const { detail } = this.props;
        return (
            <div className={(!detail || detail.length === 0 || this.getDetail(detail) == 0)? "" : "content"}>
                {(!detail || detail.length === 0 || this.getDetail(detail) == 0)? null :
                (<div className="row">
                    <div className="col-sm-4">
                        <PublicItemTitle title="Ngôn ngữ" />
                    </div>

                    <div className="col-sm-8">
                    {(!$.isEmptyObject(detail)) ?
                        detail.map(u => <PublicLanguageElement key={u._id} item={u} />)
                        : null}
                    </div>
                </div>)}
            </div>
        )
    }
}