import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import Header from './fixedComponents/Header';
import Footer from './fixedComponents/Footer';
import Signin from './fixedComponents/Signin';
import Signup from './fixedComponents/Signup';

const $ = window.jQuery;
class App extends Component {
  constructor(props) {
    super(props)
    
 
  };
   fadeInSignIn =()=>{
   $(".signin-popup-box").fadeIn();
   }
    fadeInSignUp =()=>{
   $(".signup-popup-box").fadeIn();
   }
  render() {
    
    return (
      <div className='App theme-layout'>
        <Header fadeInSignIn = {this.fadeInSignIn}
        fadeInSignUp ={this.fadeInSignUp}
        />
      
        <div className="app-body">
          <main className="main overflow-y-hidden">
          {this.props.children}
          
          </main>
        </div>
         <Footer/>
         <Signin/>
         <Signup/>
      </div>
    
    );
  }
}

export default App;
