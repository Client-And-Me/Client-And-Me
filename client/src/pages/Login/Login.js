import React, { Component } from "react";
import "./Login.css";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { withRouter } from "react-router-dom";




const Login = ({ history }) =>

  <div>
    <LoginForm history={history} />
  </div>

export default withRouter(Login);


