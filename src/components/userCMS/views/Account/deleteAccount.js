import React,{Component} from 'react';


class DeleteAccount extends Component{


    render(){
        return(
            <div className="DeleteAccount">
               <h3>Delete Account</h3>
               <div className="Delete-Account">
               <p>This is immediate and 1-direction action. You will
               delete all the data about yourself. Still remove?</p>
               <form>
                        <div className="row">
                            <div className="col-lg-6"> 
                                <button type="submit">Delete</button>
                            </div>
                            <div className="col-lg-6">
                                <i className="fa fa-trash-o big-icon"></i>
                            </div>
                        </div>
                    </form>
               </div> 
            </div>
        )
    }
}
export default DeleteAccount;