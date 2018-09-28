import React, { Component } from "react";
import "./Login.css";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import NavbarHome from "../../components/Navbar/NavbarHome";




class Login extends Component {

  ///login logic here

  render() {
    return (
      <div>
        <NavbarHome />
          <LoginForm />
      </div>
    );
  }
}

export default Login;


