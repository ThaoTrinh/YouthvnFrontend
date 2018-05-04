import React from 'react';
import $ from 'jquery';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
/* Properties:
    defaultValue={[array 2 elements]}
    min={minimum value}
    max={maximum value}
    allowCross={true | false}
    step={a number}
    onChange={a function}
*/
class RangeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name0: this.props.name + "[0]",
            name1: this.props.name + "[1]"
        }
    }
    componentDidMount() {
        var sli = document.getElementById(this.state.name0);
        var sli1 = document.getElementById(this.state.name1);
        sli.style.float = 'left';
        sli.style.width = '100%';
        sli.style.padding = '0px 10px 0px 10px';
        sli1.style.float = 'right';
        sli1.style.width = 'auto';
        sli1.style.padding = '5px 10px 5px 10px';
        sli1.style.fontSize = '13px';
    }
    toggle_widget() {
        $(document.getElementById(this.props.name)).next().slideToggle();
        document.getElementById(this.props.name).classList.toggle('active');
        document.getElementById(this.props.name).classList.toggle('closed');
    }
    render() {
        return (
            <div className="widget border">
                <h3 className="sb-title open"
                    id={this.props.name}
                    onClick={() => this.toggle_widget()}>
                    {this.props.name}
                </h3>
                <div className="range_slider">
                    <div id={this.state.name0}>
                        <Range
                            defaultValue={[this.props.defaultValue[0], this.props.defaultValue[1]]}
                            min={this.props.min}
                            max={this.props.max}
                            allowCross={this.props.allowCross}
                            step={this.props.step}
                            onChange={this.props.onChange}
                            trackStyle={[{ backgroundColor: '#fb236a', height: 10 }]}
                            handleStyle={[
                                { borderColor: '#fb236a', height: 18, width: 18 },
                                { borderColor: '#fb236a', height: 18, width: 18 }
                            ]}
                            railStyle={{ height: 10 }}
                        />
                    </div>
                    <div id={this.state.name1}>
                        Từ <strong>
                            {this.props.defaultValue[0]}
                        </strong> đến <strong>
                            {this.props.defaultValue[1]}
                        </strong> {this.props.unit}
                    </div>
                </div>
            </div>
        );
    }
}
export default RangeBox;