import React from 'react';

class Searchkeywords extends React.Component {
 
  
  
  render() {

    return (
       <div className="col-xs-12 col-sm-8 col-md-10 col-lg-8 search1">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                    <input type="search" 
                            name="keyword " 
                            className="form-control"
                            value="Job titles, keywords or Company name" 
                            placeholder="Nhập từ khóa"></input>
                    <span className="fa fa-keyboard-o"></span>
                </div>
                
            </div>
               
               
                                       
                              
        </div>
      
    )
  }
}

export default Searchkeywords;
