import React from "react";
import "./Navbar.css";


export default () => (
    <nav>
        <div className="nav-wrapper navbar">
            <a href="/" className="brand-logo">client&me</a>
            <ul id="nav-mobile" className="right hide-on-large-and-up">
                <li><a href="/">Log Out</a></li>
            </ul>
        </div>
    </nav>
)