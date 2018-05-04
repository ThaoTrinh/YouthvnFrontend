import React, { Component } from 'react'
import { Link } from 'react-router';
import ListItem from '../share/ListItem';
import Pagination from "react-js-pagination/dist/Pagination";
import { PAGE_SIZE, MODES, SORT_TYPES } from './OrganizationHolder';
import _ from 'lodash';
import moment from 'moment';
import Spinner from 'react-spinkit';
class ListOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    }
  }
  renderOrganizations(propOrganizations) {
    try {
      if (_.isEmpty(propOrganizations)) {
        return (
          <div className="row">
            <div className="col-sm-12 spinner-container">
              <Spinner name="three-bounce" color="#14b1bb" className="spinner-center"/>
            </div>
          </div>
        )
      }
      const organizations = propOrganizations.map(elem => {
        
        const fieldNames = (elem.fieldNames)? elem.fieldNames.map(elem => elem.viName): [];
        var arr = [], logo = '';
        try {
          arr = elem._logo.url.split('/');  
          logo =  '/' + [arr[arr.length-2], arr[arr.length-1]].join('/');
        } catch (error) {};
        
        return (
          <ListItem
            key={elem._id} 
            linkTo={`/organizations/${elem._id}`}
            imageUrl={logo}
            name={elem.name}
            sub1={elem.slogan}
            col1_footer={`Cập nhật ${moment(new Date(elem.updatedDate), "YYYYMMDD").fromNow()}`}
            sub2={""}
            sub4={(elem.view)? elem.view.total: 0}
            col2_topleft={`${elem.location.streetNumber} ${elem.location.ward} ${elem.location.district} ${elem.location.province}`}
            col2_topright=""
            col2_btmleft={fieldNames}
            col2_btmright=""
            col2_footer={[]}
            col3_top={""}
            tags={[]}
          />
        )
      })
      return ( 
        <div className="list-item">
          {organizations}
        </div>
      )
    } catch (error) {
      console.log(error);
      return <div>404 Not Found</div>
    }
    2
  }
  renderPagination(propOrganizations, total) {
    try {
      if (_.isEmpty(propOrganizations)) {
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
  renderListHeader(propOrganizations, total, displayStr, mode, getSortOption, sortMode) {
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
    console.log(`active page is ${pageNumber}`);
    this.props.selectFuctionBasedOnMode(pageNumber - 1, PAGE_SIZE);
    this.setState({ activePage: pageNumber }, () => window.scrollTo(0, 0));
  }
  render () {
    moment.locale('vi');
    const {organizations, total, displayStr, mode, getSortOption, sortMode} = this.props;
    return (
      <div className="col-sm-8">
        <h2>Tổ chức</h2>
        {this.renderListHeader(organizations, total, displayStr, mode, getSortOption, sortMode)}
        {this.renderOrganizations(organizations)}
        {this.renderPagination(organizations, total)}
      </div>
    )
  }
}

export default ListOrganization;