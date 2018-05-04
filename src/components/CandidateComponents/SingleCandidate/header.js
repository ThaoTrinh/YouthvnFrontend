import React from 'react';

export default class Headers extends React.Component {
  render() { return (
    <header className="stick-top">
      <div className="menu-sec">
        <div className="container">
          <div className="logo">
            <a href="index.html" title=""><img src="http://placehold.it/178x40" alt="" /></a>
          </div>
          <div className="btns-profiles-sec">
            <span><img src="http://placehold.it/50x50" alt="" /> Tera Planer <i className="la la-angle-down"></i></span>
            <ul>
              <li><a href="#" title=""><i className="la la-file-text"></i> Company Profile</a></li>
              <li><a href="#" title=""><i className="la la-briefcase"></i> Manage Jobs</a></li>
              <li><a href="#" title=""><i className="la la-line-chart"></i> Transactions</a></li>
              <li><a href="#" title=""><i className="la la-magnet"></i> Resumes</a></li>
              <li><a href="#" title=""><i className="la la-folder-open"></i> Packages</a></li>
              <li><a href="#" title=""><i className="la la-leaf"></i> Post a New Job</a></li>
              <li><a href="#" title=""><i className="la la-phone"></i> Job Alerts</a></li>
              <li><a href="#" title=""><i className="la la-key"></i> Change Password</a></li>
              <li><a href="#" title=""><i className="la la-history"></i> Logout</a></li>
            </ul>
          </div>
          <nav>
            <ul>
              <li className="menu-item-has-children">
                <a href="#" title="">Home</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#" title="">Employers</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#" title="">Candidates</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#" title="">Blog</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#" title="">Job</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#" title="">Pages</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
}