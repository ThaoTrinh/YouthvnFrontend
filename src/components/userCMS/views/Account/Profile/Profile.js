import React, { Component } from 'react';
import ProfileTitle from './ProfileTitle';
import ProfileFormEdit from './ProfileFormEdit';
import SocialEdit from './SocialEdit';
import ContactEdit from './ContactEdit';
import ProfileJob from './ProfileJob';
const $ = window.jQuery;
class Profile extends Component {
  constructor(props) {
    super(props);
   
  }
  
  render() {
    

    return (
      <div className="Profile">
        <ProfileTitle />
        <ProfileFormEdit />
        <ProfileJob />
        <SocialEdit />         
		<ContactEdit />			 		
      </div>
    );
  }
}

export default Profile;
