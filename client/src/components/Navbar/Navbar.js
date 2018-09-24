import React from "react";
// import "./Navbar.css";
import { Navbar, NavItem } from "react-materialize";


export default () => (
  <Navbar brand='client&me' right>
    <NavItem href='/SignIn'>Login</NavItem>
    <NavItem href='/register'>Register</NavItem>
  </Navbar>
)