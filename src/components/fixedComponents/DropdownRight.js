import React from 'react';
import { Link, browserHistory } from 'react-router';
import swal from 'sweetalert';
import moment from 'moment';
const $ = window.jQuery;

class DropdownRight extends React.Component {
 

  render() {
     moment.locale('vi');
    
    return (
      
            <ul className="nav navbar-nav visible-xs">
              <li className="a1">
                <Link to="/"><span className="fa fa-home"> </span> Home </Link>
               </li>
               <li className="a1">
                <Link to="/cvs"><span className="fa fa-user"> </span> Candidates List<span className="fa fa-plus"></span></Link>
                </li>
              <li className="a ">
                <Link to="/organizations"> <span className="fa fa-building"> </span> Employers List <span className="fa fa-plus"></span></Link>
              </li>
              
              <li className="a ">
                <Link to="/recruitments"> <span className="fa fa-phone"> </span> Recruitments List <span className="fa fa-plus"></span></Link>
              </li>
              
            </ul>
       
    )
  }
}

export default DropdownRight;
