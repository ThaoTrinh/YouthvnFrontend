import React from 'react';
import $ from 'jquery';
/* Properties:
    placeholder={keywords}
    value={}
    name={}
    onChange={function}
*/
class SearchBar extends React.Component {
    render() {
        return (
            <div className="widget">
                <div className="search_widget_job">
                    <div className="field_w_search">
                     <div class="row">
                          <input type="text"
                            placeholder={this.props.placeholder}
                            value={this.props.value}
                            name={this.props.name}
                            onChange={this.props.onChange}/>
                        <span><i className="fa fa-search"></i></span>
                     </div>
                       
                    </div>
                </div>
            </div>
        );
    }
}
export default SearchBar;