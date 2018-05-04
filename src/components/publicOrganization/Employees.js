import React from 'react';
import { Link } from 'react-router';

class Employees extends React.Component {
  renderLi(propEmployees) {
    if (!propEmployees || propEmployees.length === 0) return <div>Không có nhân viên nào</div>
    return propEmployees.map((elem) => {
      return (
        <li key={elem._id}>
          <Link to={`/cvs/${elem._employee._id}`}>
            {`${elem._employee.lastname} ${elem._employee.firstname}`}
            <span className="meta">
              {elem.position}
            </span>
            <span style={{ color: '#888' }}>
              {elem.description}
            </span>
          </Link>
        </li>
      )
    })
  }
  render() {
    const { employees } = this.props;
    return (
      <div className="sidebar-links organization-employees" >
        <h5>
          <span className="fa-stack fa-lg" >
            <i className="fa fa-circle fa-stack-2x" ></i>
            <i className="fa fa-users fa-stack-1x fa-inverse"></i>
          </span>
          Nhân sự
        </h5>
        <ul>
          {this.renderLi(employees)}
        </ul>
      </div>
    )
  }
}
export default Employees