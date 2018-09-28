import React from "react";
import "./Navbar.css";
import { Navbar, NavItem } from "react-materialize";
import SignOutButton from "../SignOutButton/signOut";


export default () => (
    <nav>
        <div class="nav-wrapper navbar">
            <a href="/" class="brand-logo">client&me</a>
            <ul id="nav-mobile" class="right hide-on-large-and-up">
                <li><a href="/provider-home">Dashboard</a></li>
                <li><a href="/provider-appointments">Appointments</a></li>
                <li><a href="/provider-clients">Clients</a></li>
                <li><a href="/">Log Out</a></li>
            </ul>
        </div>
    </nav>
)

