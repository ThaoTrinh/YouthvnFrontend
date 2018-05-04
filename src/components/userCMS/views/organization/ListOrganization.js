import React, { Component } from 'react'
import MyOrganization from './MyOrganization';
import _ from 'lodash';
import request from 'superagent';
class ListOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizations: []
    }
  }
  // api get orgs based on user
  getMyOrganizations() {
    const token = localStorage.getItem('token');
    if (!token) return;
    request
    .get(`/api/organization/me`)
    .set('x-access-token', token)
    .end((err, res) => {
      if (err) console.log(err);
      else {
        this.setState({organizations: res.body.organizations});
      }
    })
  }
  // -----
  
  componentWillMount () {
    this.getMyOrganizations();
  }
  
  render() {
    const { user } = this.props;
    const { organizations } = this.state;
    if (!user || _.isEmpty(organizations)) {
      return <div> Not found </div>
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 cms-organization">
            <div className="table-responsive">
              <table className="table table-hover user-cms-table">
                <thead>
                  <tr>
                    <th>Logo</th>
                    <th>Tên</th>
                    <th>Lĩnh vực</th>
                    <th>Loại</th>
                    <th>Địa chỉ</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    (organizations.map((elem) =>
                      <MyOrganization
                        organization={elem}
                        user={user}
                        key={elem._id}
                      />))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListOrganization