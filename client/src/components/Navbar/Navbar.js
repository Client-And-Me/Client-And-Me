import React from "react";
import "./Navbar.css";
import { Navbar, NavItem } from "react-materialize";


export default () => (
  <nav>
    <div class="nav-wrapper navbar">
      <a href="/" class="brand-logo">client&me</a>
      <ul id="nav-mobile" class="right hide-on-large-and-up">
        <li><a href="/SignIn">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </div>
  </nav>
)