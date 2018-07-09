import React from 'react';

class File extends React.Component {
   
    render() {
        return (
            
            <div className="File">
              <h3>File</h3>
               <form>
                  <div className="row">
                    <div className="col-lg-6">
                        <span className="pf-title">From</span>
                        <div className="pf-field">
                            <input type="text" placeholder="" />
                        </div>
                    </div> 
                    <div className="col-lg-6">
                        <span className="pf-title">To</span>
                        <div className="pf-field">
                            <input type="text" placeholder="" />
                        </div>
                    </div> 
                    <div className="col-lg-12">
                        <span className="pf-title">Include</span>					 						
                        <div className="pf-field no-margin">
                            <ul className="tags">
                            <li className="addedTag">Photoshop<span className="tagRemove">x</span><input type="hidden" name="tags[]" value="Photoshop"/></li>
                            <li className="addedTag">Digital & Creative<span  className="tagRemove">x</span><input type="hidden" name="tags[]" value="Digital"/></li>
                            <li className="addedTag">Agency<span  className="tagRemove">x</span><input type="hidden" name="tags[]" value="Agency"/></li>
                            
                        </ul>
                   </div>
                </div>
                  </div>
              </form>
            </div>
        );
    }
}
export default File;