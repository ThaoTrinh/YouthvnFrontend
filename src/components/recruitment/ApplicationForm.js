import React from 'react';
import { browserHistory } from 'react-router';

import request from 'superagent';

import Toggle from 'react-toggle'
import "react-toggle/style.css"
import { ITEM_TYPE } from '../../commons/constants';
import ItemCVCard from './ItemCVCard';

const $ = window.jQuery;

export default class ApplicationForm extends React.Component {
  arrayToString = (arr) => {
    let str = "";
    if (arr.length > 0) {
      arr.forEach((item) => {
        str = str + item + ", ";
      }, this);
      str = str.slice(0, str.length - 2);
    }
    return str;
  }

  otherItemsForm = (arr, handleUploadFile) => {
    let length = arr.length;
    if (length > 0) {
      const result = arr.map((item) => {
        return (
          <div>
            <div className="row">
              <div className="col-sm-4">
                {item}: 
              </div>
              <div className="col-sm-8">
                <input type="file" name={item} id={item} onChange={(e) => handleUploadFile(e)} />
              </div>
            </div>
            <div className="clearfix"></div>
            <br/>
          </div>
        )
      })
      return result;
    }
  }

  render() {
    const { applications, isOnlineCV, user, files, otherFiles, handleOnlineCVChanged, handleCVSubmited, handleUploadFile } = this.props;
    const firstItem = applications[0];
    const otherItems = applications.slice(1, applications.length);
    return (
      <form action="">
        
        <div className="form-group">
          <div className="col-sm-8">
            <div className="form-group">
              <label className="control-label text-left">
                <h3>{firstItem}</h3>
              </label>
              <div className="clearfix"></div>
            </div>
            <div className="form-group">
              <label className="col-md-1 col-sm-2 control-label no-padding">
                <Toggle
                  id="isOnlineCV"
                  defaultChecked={isOnlineCV}
                  onChange={(e) => handleOnlineCVChanged(e)} />
              </label>
              <label htmlFor="isOnlineCV" className="col-md-11 col-sm-10 control-label text-left no-padding"> Nộp hồ sơ online</label>
              <div className="clearfix"></div>
            </div>
            <div id="onlineCV" className={(isOnlineCV) ? "" : "hide"}>
              <div className="ui fluid card">
                <ItemCVCard title="Học vấn" detail={user._educations} type={ITEM_TYPE.EDUCATION} />
                <ItemCVCard title="Kinh nghiệm" detail={user._experiences} type={ITEM_TYPE.EXPERIENCE} />
                <ItemCVCard title="Dự án" detail={user._projects} type={ITEM_TYPE.PROJECT} />
                <ItemCVCard title="Kỹ năng" detail={user._skills} type={ITEM_TYPE.SKILL} />
                <ItemCVCard title="Báo xuất bản" detail={user._publications} type={ITEM_TYPE.PUBLICATION} />
                <ItemCVCard title="Giải thưởng" detail={user._awards} type={ITEM_TYPE.AWARD} />
                <ItemCVCard title="Hoạt động ngoại khóa" detail={user._activities} type={ITEM_TYPE.ACTIVITY} />
                <ItemCVCard title="Ngôn ngữ" detail={user._languages} type={ITEM_TYPE.LANGUAGE} />
                <ItemCVCard title="Khóa học" detail={user._courses} type={ITEM_TYPE.COURSE} />
                <ItemCVCard title="Bằng cấp" detail={user._certificates} type={ITEM_TYPE.CERTIFICATE} />
                <ItemCVCard title="Người giới thiệu" detail={user._middlemans} type={ITEM_TYPE.MIDDLEMAN} />
              </div>
            </div>
            <div className={(isOnlineCV) ? "hide" : ""} id="firstItem">
              <div>
                <input type="file" name={firstItem} id={firstItem} onChange={(e) => handleUploadFile(e)} />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label className="control-label text-left">
                <h3>Các hồ sơ khác</h3>
              </label>
              <div className="clearfix"></div>
            </div>
            {this.otherItemsForm(otherItems, handleUploadFile)}
          </div>
        </div>
      </form>
    )
  }
}