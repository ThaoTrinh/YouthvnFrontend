import React from 'react';

import { PublicBasicInfoElement } from './PublicItemElement';

export default class PublicBasicInfoCard extends React.Component {
  render() {
    const { detail } = this.props;
    return (
      <div className="content profile-border">
        <PublicBasicInfoElement key={detail._id} item={detail} />
      </div>
    )
  }
}