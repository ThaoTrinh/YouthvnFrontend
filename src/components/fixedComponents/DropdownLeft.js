import React from 'react';
import { Link, browserHistory } from 'react-router';
import swal from 'sweetalert';
import moment from 'moment';
import { MoneyToNumber, formattingItemArr, formattingMoney } from '../../commons/share';
import { ACCEPTED_TYPES, INVITATION_TYPES } from '../../commons/constants';
const $ = window.jQuery;

class DropdownLeft extends React.Component {
 

  render() {
     moment.locale('vi');
    
    return (
       <div className="dropdown">
            <button className="dropdown-toggle" id="menu1" data-toggle="dropdown"><i className="fa fa-bars"></i>
             </button>

            <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
              <li className="a1">
                <Link to="/"><span className="fa fa-home"> </span> Home </Link>
               </li>
                <li className="a1">
                <Link to="/cvs"><span className="fa fa-user"> </span> Candidates List <span className="fa fa-plus"></span></Link>
               </li>
              <li className="a ">
                <Link to="/organizations"> <span className="fa fa-building"> </span> Employers List <span className="fa fa-plus"></span></Link>
              </li>
              
              <li className="a ">
                <Link to="/recruitments"> <span className="fa fa-phone"> </span> Recruitments List <span className="fa fa-plus"></span></Link>
              </li>
            </ul>
       </div>
    )
  }
}

export default DropdownLeft;
