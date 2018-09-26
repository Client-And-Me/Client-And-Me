import React from "react";
// import "./Navbar.css";
import { Navbar, NavItem } from "react-materialize";
import SignOutButton from "../SignOutButton/signOut";


export default () => (
  <Navbar brand='client&me' right>
    <NavItem href='/SignIn'>Login</NavItem>
    <NavItem href='/register'>Register</NavItem>
  </Navbar>
)