import React, { Component } from "react";
import { Input } from 'react-materialize'
import "./SignIn.css";

class SignIn extends Component {


  ///login logic here

  render() {
    return (
      // <h1>SIGN ME IN MAYNE</h1>
      <div className="container">
        <div id="login-page" className="row">
          <div className="col s12 z-depth-4 card-panel">
            <form className="login-form">
              <div className="row">
                <div className="input-field col s12 center">
                  <img src="../../images/logo/login-logo.png" alt="" className="circle responsive-img valign profile-image-login" />
                  <p className="center login-form-text">client&me</p>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix pt-5">person_outline</i>
                  <input id="username" type="text" />
                  <label for="username" className="center-align">Username</label>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix pt-5">lock_outline</i>
                  <input id="password" type="password" />
                  <label for="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12 ml-2 mt-3">
                  <input type="checkbox" id="remember-me" />
                  <label for="remember-me">Remember me</label>
                  <Input name='group1' type='checkbox' value='red' label='test' />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <a href="/" className="btn waves-effect waves-light pink accent-2 col s12">Login</a>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 m6 l6">
                  <p className="margin medium-small"><a href="/register">Register Now!</a></p>
                </div>
                <div className="input-field col s6 m6 l6">
                  <p className="margin right-align medium-small"><a href="page-forgot-password.html">Forgot password ?</a></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;



// $(document).ready(function () {
//   $('select').material_select();
// });

