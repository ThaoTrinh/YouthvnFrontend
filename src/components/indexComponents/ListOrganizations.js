import React from 'react';
import {Link} from 'react-router';
import {listOfCategories, subCategories} from '../../commons/constants';
class Categories extends React.Component {
	render(){
		return(
			<div className="org-classification">
	          	<select className="ui dropdown">
						<option value="default">Lĩnh vực (Tất cả)</option>
						{listOfCategories.map(category => (<option key={category} value={category}>{category}</option>))}
				</select>
	            <select className="ui dropdown">
						<option value="default">Lĩnh vực phụ (Tất cả)</option>
						{listOfCategories.map(category => (<option key={category} value={category}>{category}</option>))}
				</select>
	         </div>
          )
	}
}

class ListOrganizations extends React.Component{
	render() {
    return (
        <div className="">
          <h2><Link to="/organizations" style={{color: "black"}}>Tổ chức</Link></h2>
          {/* <div className="">
          	<ul className="list-org row">
          		<li className="col-md-3 col-sm-4 col-xs-12">
          			<a href="https://google.com" className="org">
          				<div className="img-box">
          					<img src="http://www.coffeecreamthemes.com/themes/jobseek/site/images/logo01.jpg"/>
          				</div>
          				<span className="badge-org">12</span>
          			</a>
          		</li>
          		<li className="col-md-3 col-sm-4 col-xs-12">
          			<a href="https://google.com" className="org">
          				<div className="img-box">
          					<img src="http://www.coffeecreamthemes.com/themes/jobseek/site/images/logo02.jpg"/>
          				</div>
          				<span className="badge-org">12</span>
          			</a>
          		</li>
          		<li className="col-md-3 col-sm-4 col-xs-12">
          			<a href="https://google.com" className="org">
          				<div className="img-box">
          					<img src="http://www.coffeecreamthemes.com/themes/jobseek/site/images/logo03.jpg"/>
          				</div>
          				<span className="badge-org">12</span>
          			</a>
          		</li>
          		<li className="col-md-3 col-sm-4 col-xs-12">
          			<a href="https://google.com" className="org">
          				<div className="img-box">
          					<img src="http://www.coffeecreamthemes.com/themes/jobseek/site/images/logo04.jpg"/>
          				</div>
          				<span className="badge-org">12</span>
          			</a>
          		</li>
          		<li className="col-md-3 col-sm-4 col-xs-12">
          			<a href="https://google.com" className="org">
          				<div className="img-box">
          					<img src="http://www.coffeecreamthemes.com/themes/jobseek/site/images/logo05.jpg"/>
          				</div>
          				<span className="badge-org">12</span>
          			</a>
          		</li>
          		<li className="col-md-3 col-sm-4 col-xs-12">
          			<a href="https://google.com" className="org">
          				<div className="img-box">
          					<img src="http://www.coffeecreamthemes.com/themes/jobseek/site/images/logo06.jpg"/>
          				</div>
          				<span className="badge-org">12</span>
          			</a>
          		</li>
          		<li className="col-md-3 col-sm-4 col-xs-12">
          			<a href="https://google.com" className="org">
          				<div className="img-box">
          					<img src="http://www.coffeecreamthemes.com/themes/jobseek/site/images/logo07.jpg"/>
          				</div>
          				<span className="badge-org">12</span>
          			</a>
          		</li>
          		<li className="col-md-3 col-sm-4 col-xs-12">
          			<a href="https://google.com" className="org">
          				<div className="img-box">
          					<img src="http://www.coffeecreamthemes.com/themes/jobseek/site/images/logo08.jpg"/>
          				</div>
          				<span className="badge-org">12</span>
          			</a>
          		</li>
          		<li className="col-md-3 col-sm-4 col-xs-12">
          			<a href="https://google.com" className="org">
          				<div className="img-box">
          					<img src="http://www.coffeecreamthemes.com/themes/jobseek/site/images/logo09.jpg"/>
          				</div>
          				<span className="badge-org">12</span>
          			</a>
          		</li>
          		<li className="col-md-3 col-sm-4 col-xs-12">
          			<a href="https://google.com" className="org">
          				<div className="img-box">
          					<img src="http://www.coffeecreamthemes.com/themes/jobseek/site/images/logo10.jpg"/>
          				</div>
          				<span className="badge-org">12</span>
          			</a>
          		</li>
          		<li className="col-md-3 col-sm-4 col-xs-12">
          			<a href="https://google.com" className="org">
          				<div className="img-box">
          					<img src="http://www.coffeecreamthemes.com/themes/jobseek/site/images/logo11.jpg"/>
          				</div>
          				<span className="badge-org">12</span>
          			</a>
          		</li>
          		<li className="col-md-3 col-sm-4 col-xs-12">
          			<a href="https://google.com" className="org">
          				<div className="img-box">
          					<img src="http://www.coffeecreamthemes.com/themes/jobseek/site/images/logo12.jpg"/>
          				</div>
          				<span className="badge-org">12</span>
          			</a>
          		</li>
          	</ul> 
          </div> */}
        </div>
    )
  }
}
export default ListOrganizations;