import React, { Component } from 'react'
import { Link } from 'react-router';
import ListItem from '../share/ListItem';
import Pagination from "react-js-pagination/dist/Pagination";
import { PAGE_SIZE, MODES, SORT_TYPES } from './RecruitmentHolder';
import _ from 'lodash';
import moment from 'moment';
import Spinner from 'react-spinkit';
class ListRecruitment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    }
  }
  renderRecruitments(propRecruitments) {
    try {
      if (_.isEmpty(propRecruitments)) {
        return (
          <div className="row">
            <div className="col-sm-12 spinner-container">
              <Spinner name="three-bounce" color="#14b1bb" className="spinner-center"/>
            </div>
          </div>
        )
      }
      const recruitments = propRecruitments.map(
        elem => {
          var organizationName = '', organizationSlogan = '', organizationLogo = '', arr = [];
          if (!elem._organization) {}
          else if (!elem._organization.id) {
            organizationName = elem._organization.name;
          }
          else if (elem._organization.id) {
            organizationName = elem._organization.id.name;
            organizationSlogan = elem._organization.id.slogan;
            try {
              arr = elem._organization.id._logo.url.split('/');
              organizationLogo =  '/' + [arr[arr.length-2], arr[arr.length-1]].join('/');  
            } catch (error) {}            
          }
          return (<ListItem
            key={elem._id} 
            linkTo={`/recruitments/${elem._id}`}
            imageUrl={organizationLogo}
            name={elem.title}
            sub1={organizationName}
            sub2={organizationSlogan}
            col1_footer={`Cập nhật ${moment(new Date(elem.updatedDate), "YYYYMMDD").fromNow()}`}
            sub4={(elem.view)? elem.view.total: 0}
            col2_topleft={`${elem.location.streetNumber} ${elem.location.ward} ${elem.location.district} ${elem.location.province}`}
            col2_topright=""
            col2_btmleft={elem.requirement.jobType}
            col2_btmright=""
            col2_footer={elem.requirement.positions}
            col3_top={`Lương: ${elem.requirement.minSalary} - ${elem.requirement.maxSalary} triệu`}
            tags={elem.requirement.skills}
          />)
        }
      )
      return (
        <div className="list-item">
          {recruitments}
        </div>
      )
    } catch (error) {
      console.log(error);
      return <div>404 Not Found.</div>
    } 
  }
  renderPagination(propRecruitments, total) {
    try {
      if (_.isEmpty(propRecruitments)) {
        return null;
      }
      return (
        <div className="row recruitments-pagination">
          <div className="col-sm-12 text-center">
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={PAGE_SIZE}
              totalItemsCount={total}
              pageRangeDisplayed={5}
              onChange={(e) => this.handlePageChange(e)}
            />
          </div>
      </div>
      )
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  renderListHeader(propRecruitments, total, displayStr, mode, getSortOption, sortMode) {
    try {
      // if (_.isEmpty(propRecruitments)) {
      //   return null;
      // }
      return (
        <div className="row" style={{marginBottom: 10}}>
          <div className="col-sm-3" style={{fontSize: 16}}>
            Có {total} kết quả.
          </div>
          <div className="col-sm-6 text-center">
            {
              (mode === MODES.SEARCH)
              ? <span style={{fontSize: 16}}>Lọc kết quả cho <strong>{displayStr}</strong></span>
              : null
            }
          </div>
          <div className="col-sm-3">
            <Link
              className="float-right"
              style={{marginLeft: 5}}
              onClick={(e) => window.location.reload()}>
              Xem tất cả
            </Link>
            <select className="float-right" value={sortMode} onChange={(e) => getSortOption(e.target.value)}>
              <option value={SORT_TYPES.NEWEST}>Mới nhất</option>
              <option value={SORT_TYPES.TRENDING}>Phổ biến</option>
              {(mode=== MODES.SEARCH)? <option value={SORT_TYPES.RELEVANT}>Liên quan</option>: null}
            </select>
          </div>
        </div>
      )
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  handlePageChange(pageNumber) {
    
    this.props.selectFuctionBasedOnMode(pageNumber - 1, PAGE_SIZE);
    this.setState({ activePage: pageNumber }, () => window.scrollTo(0, 0));
  }
  render () {
    moment.locale('vi'); 
    const {recruitments, total, displayStr, mode, getSortOption, sortMode} = this.props;
    return (
      <div className="col-sm-8">
        <h2>Tin tuyển dụng</h2>
        {this.renderListHeader(recruitments, total, displayStr, mode, getSortOption, sortMode)}
        {this.renderRecruitments(recruitments)}
        {this.renderPagination(recruitments, total)}
      </div>
    )
  }
}

export default ListRecruitment