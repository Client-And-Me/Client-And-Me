import React from "react";
import "./Footer.css";
import { Footer } from "react-materialize";

export default () => (
  <Footer copyrights="Copyright 2018"
    
    className='example'
  >
    <h5 className="white-text">client&me</h5>
      <ul>
        <li className="footerLink"><a className="grey-text text-lighten-3" href="/login">Login</a></li>
        <li><a className="grey-text text-lighten-3" href="/register">Register</a></li>
      </ul>
  </Footer>
)