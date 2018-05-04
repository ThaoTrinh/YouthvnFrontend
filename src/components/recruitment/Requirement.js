import React, { Component } from 'react'
import async from 'async';
import request from 'superagent';

class Requirement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldName: []
    }
  }
  getField3 = (arr) => {
    async.each(arr, (item, callback) => {
      request
      .get("/api/field/field3/" + item)
      .end((error, res) => {
        const field = res.body.result;  
        const { fieldName } = this.state;
        this.setState({ fieldName: [...fieldName, field.viName]});
        callback();
      })
    }, (err) => {
      console.log(err);
    })
  }

  // type => 1: languages, 2: skills, 3: fieldName, 4: attachFiles
  dataList = (arr, type) => {
    const result = arr.map((item) => {
      return (
        <a key={item} className="ui label">
          {item}
        </a>
      )
    });
    return result;
  }
  
  componentWillMount () {
    const { requirement } = this.props;
    this.getField3(requirement.fieldName);
  }
  
  render() {
    const { requirement, applications } = this.props;
    const { fieldName } = this.state;
    return (
      <div className="table-responsive col-sm-4">
        <h2>Yêu cầu</h2>
        <table className="table">
          <tbody>
            <tr>
              <td>Chuyên ngành</td>
              <td>
                <div className="ui brown labels">
            
                  {this.dataList(fieldName, 3)}
                </div>
              </td>
            </tr>
            <tr>
              <td>Bằng cấp</td>
              {(requirement.atLeastDegree === "Không yêu cầu")?
                <td>{requirement.atLeastDegree}</td>
                : <td>{requirement.atLeastDegree} trở lên</td>}
            </tr>
            <tr>
              <td>Kinh nghiệm</td>
              <td>{requirement.minExperience} năm trở lên</td>
            </tr>
            <tr >
              <td>Tuổi</td>
              <td>{requirement.minAge} đến {requirement.maxAge} tuổi</td>
              
            </tr>
            <tr>
              <td>Ngôn ngữ</td>
              <td >
                <div className="ui purple labels">
                  
                  {this.dataList(requirement.languages, 1)}
                </div>
              </td>
              
            </tr>
            <tr>
              <td>Kỹ năng</td>
              <td>
                <div className="ui labels">
                  
                  {this.dataList(requirement.skills, 2)}
                </div>
              </td>
            </tr>
            <tr>
              <td>Giới tính</td>
              <td>{requirement.gender}</td>
            </tr>
            <tr>
              <td>Hồ sơ</td>
              <td>
                <div className="ui orange labels">
                  
                  {this.dataList(applications, 4)}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Requirement