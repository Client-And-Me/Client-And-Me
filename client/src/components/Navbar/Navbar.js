import React from "react";
// import "./Navbar.css";
import { Navbar, NavItem } from "react-materialize";


export default () => (
  <Navbar brand='client&me' right>
    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
    <NavItem href='components.html'>Components</NavItem>
  </Navbar>
)