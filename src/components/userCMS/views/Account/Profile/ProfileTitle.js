import React from 'react';

class ProfileTitle extends React.Component {
    
  handleChange=(e)=>{
    alert(e);
  }
    render() {
        return (
         <div className="profile-title">
            <h3>My Profile</h3>
            <div className="upload-img-bar">
              <span className="round"><img src="http://placehold.it/140x140" alt="" /><i className="fa fa-times"></i></span>
              <div className="upload-info">
                 <form>
                 <input type="file" name="file" id="file" className="inputfile" onChange={ (e) => this.handleChange(e.target.files)}/>
                 <label for="file">Choose a file</label>
                </form>
                <span>Max file size is 1MB Minimum dimension: 270x210 And Suitable files are .jpg & .png</span>
              </div>
            </div>  
          </div>
        );
    }
}
export default ProfileTitle;