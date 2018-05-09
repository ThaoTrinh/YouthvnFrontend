import React from 'react';
import $ from 'jquery';
export default class Awards extends React.Component {

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

  render() { return (
    <div className="edu-history-sec" id="awards">
      <div className="row">
        <div className="col-md-11 col-sm-11 col-xs-10" style={{marginTop: 15}}>
          <h2 className="sb-title open"
              id={this.props.groupName}
              onClick={() => this.toggle_widget()}
              >{this.props.name}
              <b onClick  = {()=>{this.toggleIcon()}}className={this.state.icondown?'fa fa-sort-up':'fa fa-sort-down'}>
              </b>
          </h2>

          <div className="specialism_widget">
            <div className="edu-history style2">
              <i></i>
              <div className="edu-hisinfo">
                <div className="row">
                  <div className="col-md-11 col-sm-11 col-xs-10">
                    <span style={{color:'#8b91dd'}}>First prize in web</span>
                  </div>
                  <div className="col-md-1 col-sm-1 col-xs-2">
                    <a href="#"  className="fa fa-pencil pull-right"><i></i></a>
                  </div>
                </div>
                <i>2008 - 2012</i>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              </div>
            </div>
            <div className="edu-history style2">
              <i></i>
              <div className="edu-hisinfo">
                <div className="row">
                  <div className="col-md-11 col-sm-11 col-xs-10">
                    <span style={{color:'#8b91dd'}}>First prize in Blockchain</span>
                  </div>
                  <div className="col-md-1 col-sm-1 col-xs-2">
                  <a href="#"  className="fa fa-pencil pull-right"><i></i></a>
                  </div>
                </div>
                  <i>2008 - 2012</i>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              </div>
            </div>
            <div className="edu-history style2">
              <i></i>
              <div className="edu-hisinfo">
                <div className="row">
                    <div className="col-md-11 col-sm-11 col-xs-10">
                      <span style={{color:'#8b91dd'}}>First prize in React</span>
                    </div>
                    <div className="col-md-1 col-sm-1 col-xs-2">
                      <a href="#"  className="la la-pencil pull-right"><i></i></a>
                    </div>
                  </div>
                <i>2008 - 2012</i>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
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