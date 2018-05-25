import React from 'react';
import { Link, browserHistory } from 'react-router';
import swal from 'sweetalert';
import moment from 'moment';
import { MoneyToNumber, formattingItemArr, formattingMoney } from '../../commons/share';
import { ACCEPTED_TYPES, INVITATION_TYPES } from '../../commons/constants';
const $ = window.jQuery;

class LargeScreenNav extends React.Component {
 

  render() {
     moment.locale('vi');
    
    return (
       <ul className="nav navbar-nav hidden-xs hidden-sm hidden-md">
              <li className="a1">
                <Link to="/cvs"> Candidates List <span><i className="fa fa-caret-down"></i></span></Link>
              </li>
              <li className="a ">
                <Link to="/organizations"> Employers List<span><i className="fa fa-caret-down"></i></span></Link>
              </li>
              
              <li className="a ">
                <Link to="/recruitments">Recruitments List  <span><i className="fa fa-caret-down"></i></span></Link>
              </li>
              
        </ul>
    )
  }
}

export default LargeScreenNav;
