import React, { Component } from 'react'
import { Link } from 'react-router';
import _ from 'lodash';
import request from 'superagent';
import loading from '../../assets/icon/Rolling.gif';

class OrganizationFigures extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      figure:[
        {
           name:'Viewed',
           value:164,
           icon:'fa fa-eye'
        },
        {
            name:'Posted Jobs',
            value:'4',
            icon:'fa fa-file-o'
         },
         {
            name:'Locations',
            value:'United States, Sans Diego',
            icon:'fa fa-map'

         },
         {
            name:'Since',
            value:'2012',
            icon:'fa fa-clock-o'
         },
         {
            name:'Teamsize',
            value:'15',
            icon:'fa fa-users'


         },
         {
            name:'Followers',
            value:4,
            icon:'fa fa-user',

         },
         {
            name:'Categories',
            value:'Design,Media',
            icon:'fa fa-navicon'
         }
        
      ]
    }
  }
  
  render() {
     var elms = this.state.figure.map((value,key)=>{
         return (
        <div key={key} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 figure-item">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 figure-icon">
                <span className={value.icon}></span>
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 figure-body">
                <h5>{value.name}</h5>
                <div>{value.value}</div>
            </div>
            
        </div>
        
         )
     })
    return (
     <div className="OrganizationFigures">
      <h3> Company Infomation </h3>
        <div className="row">
           {elms}
           <hr/>
        </div>
        
     </div>
    )
  }
}

export default OrganizationFigures
