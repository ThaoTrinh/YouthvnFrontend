import React from 'react';
import $ from 'jquery';
export default class Introduce extends React.Component {

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
    <div className="edu-history-sec" >
      
      <h2 className="sb-title open" style={{marginBottom:20}}
        id={this.props.groupName}
        onClick={() => this.toggle_widget()}
        >{this.props.name} 
        <b onClick  = {()=>{this.toggleIcon()}}className={this.state.icondown?'fa fa-sort-up':'fa fa-sort-down'}>
        </b>
      </h2>

    <div className="specialism_widget"> 
    <div className="col-md-11 col-sm-11 col-xs-1o">
        <a href="#" className="fa fa-pencil pull-right"></a>
      </div>
      <br/>
      <p>
      
        Hello, my name is Mark William Connor and I’m a Web Designer & Web Developer from Melbourne, Australia. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. </p>
      <p>Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar.</p>
      </div>
      
   
    </div>
  );
  }
}