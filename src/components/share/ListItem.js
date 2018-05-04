import React from 'react';
import { Link } from 'react-router';

import moment from 'moment';
import _ from 'lodash';
import UserAvatar from 'react-user-avatar';

export default class ListItem extends React.Component {
  render() {
    moment.locale('vi');
    const { name, sub1, sub2, sub3, col2_topleft, col2_topright,
      col2_btmright, col3_top, col1_footer, linkTo, sub5 } = this.props;  
    let { col2_footer, tags, col2_btmleft, sub4, imageUrl } = this.props;
    
    if (!_.isArray(col2_footer)) col2_footer = [];
    if (!_.isArray(col2_btmleft)) col2_btmleft = [];
    if (!_.isArray(tags)) tags = [];
    if (!sub4) sub4 = 0;
    if (!imageUrl) imageUrl = "https://placehold.it/50x50";
    return (
      <Link to={linkTo} className="featured" style={{ color: 'black' }}>
        <div className="row">
          <div className="col-md-1 hidden-sm hidden-xs">
            {/* <UserAvatar name="IMG" size="48" src={imageUrl} /> */}
            <div style={{
                
                background: `url(${imageUrl}) no-repeat`,
                backgroundPosition: "center right",
                width: 48,
                backgroundSize: "cover",
                height: 48,
                borderRadius: '100%'
            }}>
              
            </div>
          </div>
          <div className="col-md-4 col-sm-7 col-xs-12">
            <h5>{name}</h5>
            <p>
              <strong>{sub1}</strong> <br />
              <span style={{ color: '#888' }}> {sub2}</span>
            </p>
            <p style={{fontSize: 13}}>
              <span style={{ color: 'red', display: (!sub5)? 'none': 'block'}}>{sub5}</span>
              <span style={{ color: 'green', display: (!sub3)? 'none': 'block' }}> {sub3}</span>
              <span style={{ color: '#888' , display: (!col1_footer)? 'none': 'block'}}>
                {col1_footer}
              </span>
              {(sub4)? <span style={{color: '#888', display: (!sub4)? 'none': 'block'}}><i className="fa fa-eye" style={{marginRight: 3}}></i>{sub4}</span>: null}
            </p>
          </div>
          <div className="col-md-4 col-sm-5 col-xs-12 list-item-data" >
            <p>
              {(col2_topleft)?<i className="fa fa-map-marker"></i> : null}{col2_topleft} {col2_topright}
            </p>
            <p>
              {col2_btmleft.map(elem => <span className="ui green label" key={elem}>{elem}</span>)} {col2_btmright}
            </p>
            <div className="ui blue labels">
              {
                col2_footer.map(elem => <span className="ui label" key={elem}>{elem}</span>)
              }
            </div>
          </div>
          <div className="col-md-3 hidden-xs hidden-sm">
            <p>{col3_top}</p>
            <div className="ui labels">
              {
                tags.map(elem => <span className="ui label" key={elem}>{elem}</span>)
              }
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
