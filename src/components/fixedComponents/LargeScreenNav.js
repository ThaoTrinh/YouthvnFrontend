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
                <ul>
                    <li><a href="index.html" title="">Home Layout 1</a></li>
                    <li><a href="index2.html" title="">Home Layout 2</a></li>
                    <li><a href="index3.html" title="">Home Layout 3</a></li>
                    <li><a href="index4.html" title="">Home Layout 4</a></li>
                    <li><a href="index5.html" title="">Home Layout 5</a></li>
							 </ul>
              </li>
              <li className="a ">
                <Link to="/organizations"> Employers List<span><i className="fa fa-caret-down"></i></span></Link>
                <ul>
								<li><a href="index.html" title="">Home Layout 1</a></li>
								<li><a href="index2.html" title="">Home Layout 2</a></li>
								<li><a href="index3.html" title="">Home Layout 3</a></li>
								<li><a href="index4.html" title="">Home Layout 4</a></li>
								<li><a href="index5.html" title="">Home Layout 5</a></li>
							</ul>
              </li>
              
              <li className="a ">
                <Link to="/recruitments">Recruitments List  <span><i className="fa fa-caret-down"></i></span></Link>
                <ul>
								<li><a href="index.html" title="">Home Layout 1</a></li>
								<li><a href="index2.html" title="">Home Layout 2</a></li>
								<li><a href="index3.html" title="">Home Layout 3</a></li>
								<li><a href="index4.html" title="">Home Layout 4</a></li>
								<li><a href="index5.html" title="">Home Layout 5</a></li>
							</ul>
              </li>
              
        </ul>
    )
  }
}

export default LargeScreenNav;
