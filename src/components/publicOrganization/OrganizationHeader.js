import React from 'react';


class OrganizationHeader extends React.Component {
  render() {
    const { name, logo, slogan} = this.props;
    // const banner = {
    //   background: `url(${this.state.banner})`,
    //   height: '400px',
    //   backgroundSize: 'cover'	,
    //   backgroundPosition: 'center'
    // }
    return (
      <section id="organization-header">
        <div className="row">
          <div className="col-sm-2">
            <img src={logo} alt="img" className="img-circle" width="125px" height="125px"/>
          </div>
          <div className="col-sm-10">
            <h1 className="org-title">
            {name} <br/>
            <small>{slogan}</small>
            </h1>
          </div>
        </div>
      </section>
    )
  }
}
export default OrganizationHeader