import React, { Component } from 'react'
import { Link } from 'react-router';
import ListItem from '../share/ListItem';
import request from 'superagent';
import _ from 'lodash';
import moment from 'moment';
import Spinner from 'react-spinkit';
import { AGE_VALUES, EXPERIENCE_VALUES, SORT_TYPES } from '../cvHolder/CVHolder';
import LazyLoad from 'react-lazyload';
const FULL_SIZE = 10;
class ListCV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvs : [
       {
         avatar:"",
         name:" ",
         job:" "

        },
      ]
    }
  }


  
  render() {
   
    return (
      <div>
         
         
            
            <div className="container-fluid CandidateList">
            <div id="carousel-id" className="carousel slide " data-ride="carousel">

              <ol className="carousel-indicators">
                <li data-target="#carousel-id" data-slide-to="0" className=""></li>
                <li data-target="#carousel-id" data-slide-to="1" className=""></li>
                <li data-target="#carousel-id" data-slide-to="2" className="active"></li>
              </ol>
              <div className="heading light">
              <h2>Kind Words From Happy Candidates</h2>
              <span>What other people thought about the service provided by JobHunt</span>
              </div>
              <div className="carousel-inner">
                <div className="item">
                  <img data-source="#carousel-id"/>
                  <div className="container">
                    <div className="carousel-caption">
                     <div className="row">
                       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 cv">
                         
                       </div>
                       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 cv">
                         
                       </div>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img data-source="#carousel-id" />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Another example headline.</h1>
                      <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                      <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                    </div>
                  </div>
                </div>
                <div className="item active">
                  <img data-source="#carousel-id"/>
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>One more for good measure.</h1>
                      <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                      <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
              <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
            </div>
            </div>
        

      </div>
    )
  }
}

export default ListCV