import React from 'react';
import $ from 'jquery';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';
/* Properties:
    groupName={the name of the group}
    value={}
    options={}
    onChange={function}
    placeholder={}
*/
class SelectBar extends React.Component {
   /* toggle_widget() {
        $(document.getElementById(this.props.groupName)).next().slideToggle();
        document.getElementById(this.props.groupName).classList.toggle('active');
        document.getElementById(this.props.groupName).classList.toggle('closed');
    }*/
    render() {
        return (
            <div className="widget border emfield">
                <h3 className="sb-title open"
                    id={this.props.groupName}
                    /*onClick={() => this.toggle_widget()}*/>
                    {this.props.groupName}
                </h3>
                <div className="specialism_widget">
                    <Select
                        value={this.props.value}
                        options={this.props.options}
                        onChange={this.props.onChange}
                        multi={true}
                        placeholder={this.props.placeholder}
                    />
                </div>
            </div>
        );
    }
}
export default SelectBar;