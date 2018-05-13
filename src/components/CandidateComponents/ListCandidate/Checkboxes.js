import React from 'react';
import $ from 'jquery';
/* Properties:
    elem={}
    groupName={}
    onChange={function}
    isProvince={true | false} is used to choose between regular checkboxes and province checkboxes.
*/
class Checkbox extends React.Component {
    render() {
        return (
            <div className="simple-checkbox">
                <p key={this.props.elem}>
                    <input
                        type="checkbox"
                        value={this.props.elem}
                        name={this.props.groupName}
                        onChange={this.props.onChange}
                        id={this.props.elem} />
                    <label htmlFor={this.props.elem}>{this.props.elem}</label>
                </p>
            </div>
        );
    }
}
class Province extends React.Component {
    render() {
        return (
            <div className="simple-checkbox">
                <p key={this.props.elem.province_id}>
                    <input
                        type="checkbox"
                        value={this.props.elem.province_id}
                        name={this.props.groupName}
                        onChange={this.props.onChange}
                        id={this.props.elem.province_id} />
                    <label htmlFor={this.props.elem.province_id}>
                        <p>{`${this.props.elem.type} ${this.props.elem.name}`}
                            <span className="badge"> {this.props.elem.count}</span>
                        </p>
                    </label>
                </p>
            </div>
        );
    }
}

class Checkboxes extends React.Component {
    renderCheckboxGroup(valueArr, groupName) {
        return valueArr.map(elem =>
            <Checkbox elem={elem} groupName={groupName} />
        );
    }
    renderProvinceGroup(valueArr, groupName) {
        return valueArr.map(elem =>
            <Province elem={elem} groupName={groupName} />
        );
    }
    toggle_widget() {
        $(document.getElementById(this.props.groupName)).next().slideToggle();
        document.getElementById(this.props.groupName).classList.toggle('active');
        document.getElementById(this.props.groupName).classList.toggle('closed');
    }
    render() {
        const func = this.props.isProvince ? (
            this.renderProvinceGroup(this.props.valueArr, this.props.groupName)
        ) : (
                this.renderCheckboxGroup(this.props.valueArr, this.props.groupName)
            );
        return (
            <div className="checkbox Team" style={{marginBottom:-100}}>
                <p>
                    
                    {this.props.name}
                </p>
                
                <div className="input">
                    {func}
                </div>
        
            </div>
        );
    }
}

export default Checkboxes;