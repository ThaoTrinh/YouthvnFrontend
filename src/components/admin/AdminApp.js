import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
const $ = window.jQuery;
class AdminApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      
      pending_recuitments : [],
      total_pending_recuitments : 0,
      
    }
  }
  componentWillMount() {
    
    this.getPendingRecuitments(0, 12);
    
  }
  
  getPendingRecuitments(page, PAGE_SIZE) {
    $.ajax({
      method: "GET",
      url: "/api/recuitment/get-pending-recuitments?page="+ page + "&page_size="+ PAGE_SIZE +"",
    }).done((response) => {
      console.log('fak');
      console.log(response);
      if (response.success) {
        const {pending_recuitments, page, total_elements} = response;
        console.log(pending_recuitments);
        this.setState({pending_recuitments, total_pending_recuitments: total_elements});
      }
      else {
        // alert(response.message);
      }
    })
  }
  render() {
    
    
    const {total_pending_recuitments, pending_recuitments} = this.state;
    const children = React.Children.map(this.props.children,
       (child) => React.cloneElement(child, {
         
         total_pending_recuitments,
         pending_recuitments,
         
      }))
    return (
      <div className='admin-app skin-blue'>
        <AdminHeader />
        <AdminSidebar />
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    );
  }
}

export default AdminApp;
