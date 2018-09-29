import React from "react";
import "./Navbar.css";


export default () => (
    <nav>
        <div class="nav-wrapper navbar">
            <a href="/" class="brand-logo">client&me</a>
            <ul id="nav-mobile" class="right hide-on-large-and-up">
                <li><a href="/">Log Out</a></li>
            </ul>
        </div>
    </nav>
)