import React from 'react';
import $ from 'jquery';
export default class Degree extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      icondown: true
    }
  }


  toggle_widget() {
    $(document.getElementById(this.props.groupName)).next().slideToggle();
    document.getElementById(this.props.groupName).classList.toggle('active');
    document.getElementById(this.props.groupName).classList.toggle('closed');
  }

  toggleIcon=()=>{
    this.setState({icondown:!this.state.icondown});
  }

  render(){
    return(
      <div className="edu-history-sec" id="degree">
        <div className="row">
          <div className="col-md-11 col-sm-11 col-xs-10">
            <h2 className="sb-title open"
              id={this.props.groupName}
              onClick={() => this.toggle_widget()}
              >{this.props.name}

              <b onClick  = {()=>{this.toggleIcon()}}className={this.state.icondown?'fa fa-sort-up':'fa fa-sort-down'}>
              </b>
            </h2>

            <div className="specialism_widget">
              <div className="edu-history">
                <i className="fa fa-star"></i>
                <div className="edu-hisinfo">
                  <div className="row">
                    <div className="col-md-11 col-sm-11 col-xs-10">
                      <span style={{color:'#8b91dd'}}>Engineer Degree</span>
                    </div>
                    <div className="col-md-1 col-sm-1 col-xs-2">
                    <i className="fa fa-pencil pull-right"></i>
                    <i className="fa fa-trash-o pull-right" style={{color:"#8b91dd",fontSize:21}}></i>
                    </div>
                  </div>
                  <span>Level: Toeic 700</span>
                </div>
              </div>
              <div className="edu-history">
                <i className="fa fa-star"></i>
                <div className="edu-hisinfo">
                  <div className="row">
                    <div className="col-md-11 col-sm-11 col-xs-10">
                      <span style={{color:'#8b91dd'}}>Master Degree</span>
                    </div>
                    <div className="col-md-1 col-sm-1 col-xs-2" style={{display:"flex"}}>
                    <i className="fa fa-pencil pull-right"></i>
                    <i className="fa fa-trash-o pull-right" style={{color:"#8b91dd",fontSize:21}}></i>
                    </div>
                  </div>
                  <span>Level: N2</span>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-1 col-sm-1 col-xs-2">
           <a href="#" className="fa fa-plus" style={{marginTop:10}}></a>
          </div>
        </div>
      </div>
    );
  }
}