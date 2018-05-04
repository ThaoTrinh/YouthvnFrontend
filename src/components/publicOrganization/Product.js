import React from 'react';
const $ = window.jQuery;

class OneProduct extends React.Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4 col-xs-12 img-zoom">
        <a href="#" className="product-img">
          <img src={this.props.src}/>
        </a>
        <div className="product-desc">
          <p className="product-name">{this.props.name}</p>
          <p>{this.props.content}</p>
        </div>
      </div>
    )
  }
}

class Product extends React.Component {
  constructor() {
    super()
    this.state={
      product:[
          {
          image: "",
          name: "",
          content: ""
          },
          {
          image: "",
          name: "",
          content: ""
          },
          {
          image: "",
          name: "",
          content: ""
          },
          {
          image: "",
          name: "",
          content: ""
          },
          {
          image: "",
          name: "",
          content: ""
          },
          {
          image: "",
          name: "",
          content: ""
          }     
        ] 
    }
    this.getOrganization = this.getOrganization.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  
  componentWillMount(){ 
  }
  render() {
    return (
      <div id="product">
        <div className="pre-title">
          <div className="title">
            <h3>SẢN PHẨM - DỊCH VỤ </h3>
          </div>
        </div>
        <div className="product-show">
          <div className="row">
            <OneProduct src={this.state.product[0].image} name={this.state.product[0].name} content={this.state.product[0].content}/>
            <OneProduct src={this.state.product[1].image} name={this.state.product[1].name} content={this.state.product[1].content}/>
            <OneProduct src={this.state.product[2].image} name={this.state.product[2].name} content={this.state.product[2].content}/>
            <OneProduct src={this.state.product[3].image} name={this.state.product[3].name} content={this.state.product[3].content}/>
            <OneProduct src={this.state.product[4].image} name={this.state.product[4].name} content={this.state.product[4].content}/>
            <OneProduct src={this.state.product[5].image} name={this.state.product[5].name} content={this.state.product[5].content}/>
          </div>
        </div>
      </div>
    )
  }
}
export default Product