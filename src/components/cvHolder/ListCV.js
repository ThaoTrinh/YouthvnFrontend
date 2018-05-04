import React, { Component } from 'react'
import { Link } from 'react-router';
import ListItem from '../share/ListItem';
import Pagination from "react-js-pagination/dist/Pagination";
import { PAGE_SIZE, MODES, SORT_TYPES } from './CVHolder';
import _ from 'lodash';
import moment from 'moment';
import Spinner from 'react-spinkit';
class ListCV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    }
  }
  renderCVs(propCVs) {
    try {
      if (_.isEmpty(propCVs)) {
        return (
          <div className="row">
            <div className="col-sm-12 spinner-container">
              <Spinner name="three-bounce" color="#14b1bb" className="spinner-center"/>
            </div>
          </div>
        )
      }
      console.log(propCVs);
      const cvs = propCVs.map(
        elem => {
          const languages = elem._languages.map(lang => lang.language_name);
          const skills = _.flattenDeep(elem._skills.map(skill => skill.skill_name));
          var arr=[], avatar = '';
          try {
            arr = elem._avatar.url.split('/');  
            avatar =  '/' + [arr[arr.length-2], arr[arr.length-1]].join('/');
          } catch (error) {}
          return (<ListItem
            key={elem._id} 
            linkTo={`/cvs/${elem._id}`}
            imageUrl={avatar}
            name={`${elem.lastname} ${elem.firstname}`}
            sub1={(elem.fieldName)? elem.fieldName.viName: ""}
            sub2={(elem.fieldName)? elem.fieldName.engName: ""} // jobField
            sub4={(elem.view)? elem.view.total: 0}
            sub5={(elem.jobSearch.isOn)? 'Đang tìm việc': ''}
            col1_footer={`Cập nhật ${moment(new Date(elem.updatedDate), "YYYYMMDD").fromNow()}`}
            col2_topleft={`${elem.address.streetNo} ${elem.address.ward} ${elem.address.district} ${elem.address.province}`}
            col2_topright=""
            col2_btmleft={elem.positions} // array
            col2_btmright=""
            col2_footer={languages} // array
            col3_top={`Có ${elem.experience} năm kinh nghiệm`}
            tags={skills} //array
          />)
        }
      )
      return (
        <div className="list-item">
          {cvs}
        </div>
      )
    } catch (error) {
      console.log(error);
      return <div>404 Not Found.</div>
    } 
  }
  renderPagination(propCVs, total) {
    try {
      if (_.isEmpty(propCVs)) {
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
  renderListHeader(propCVs, total, displayStr, mode, getSortOption, sortMode) {
    try {
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
    const {cvs, total, displayStr, mode, sortMode, getSortOption} = this.props;
    return (
      <div className="col-sm-8">
        <h2>Hồ sơ người dùng</h2>
        {this.renderListHeader(cvs, total, displayStr, mode, getSortOption, sortMode)}
        {this.renderCVs(cvs)}
        {this.renderPagination(cvs, total)}
      </div>
    )
  }
}

export default ListCV