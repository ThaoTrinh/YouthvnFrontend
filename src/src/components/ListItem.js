import React from 'react';
// import { Link } from 'react-router';
import Item from './item';
// import _ from 'lodash';


export default class ListItem extends React.Component {
  render() { 
    return (
      <div className="col-lg-8 column">
        <div className="padding-left">
          <div className="emply-resume-sec">	
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    );
  }
}
