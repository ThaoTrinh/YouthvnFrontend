import React from 'react';
import $ from 'jquery';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
/* Properties:
    defaultValue={1 value}
    min={minimum value}
    max={maximum value}
    step={a number}
    onChange={a function}
*/
class SliderBox extends React.Component {
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
                        <Slider
                            defaultValue={this.props.defaultValue}
                            min={this.props.min}
                            max={this.props.max}
                            step={this.props.step}
                            onChange={this.props.onChange}
                            trackStyle={[{ backgroundColor: '#fb236a', height: 10 }]}
                            handleStyle={[{ borderColor: '#fb236a', height: 19, width: 19 }]}
                            railStyle={{ height: 10 }}
                        />
                    </div>
                    <div id={this.state.name1}>
                        Từ <strong><span>
                            {this.props.defaultValue}
                        </span></strong> {this.props.unit} trở lên
                </div>
                </div>
            </div>
        );
    }
}
export default SliderBox;