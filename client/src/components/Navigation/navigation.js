import React, { Component } from 'react';

import SignOutButton from '../SignOutButton';
import * as routes from '../../constants/routes';


class Navigation extends Component {

    
render() {

    let nav;

    if (this.props.authUser.isProvider) {
        nav = <NavigationAuthProvider />
    } else if (this.props.authUser.isClient) {
        nav = <NavigationAuthClient />
    } else {
        nav = <NavigationNonAuth />
    }
    return (
        <div>
            {nav}
        </div>

    );
}
};

const NavigationAuthClient = () =>
    <nav>
        <div className="nav-wrapper navbar">
            <a href={routes.CLIENTHOME} className="brand-logo">client&me</a>
            <ul id="nav-mobile" className="right hide-on-large-and-up">
                <li><SignOutButton /></li>
            </ul>
        </div>
    </nav>

const NavigationAuthProvider = () =>
    <nav>
        <div className="nav-wrapper navbar">
            <a href={routes.PROVIDERHOME} className="brand-logo">client&me</a>
            <ul id="nav-mobile" className="right hide-on-large-and-up">
                <li><a href={routes.PROVIDERHOME}>Dashboard</a></li>
                <li><a href={routes.PROVIDERAPPOINTMENTS}>Appointments</a></li>
                <li><a href={routes.PROVIDERCLIENTS}>Clients</a></li>
                <li><SignOutButton /></li>
            </ul>
        </div>
    </nav>

const NavigationNonAuth = () =>
    <nav>
        <div className="nav-wrapper navbar">
            <a href={routes.HOME} className="brand-logo">client&me</a>
            <ul id="nav-mobile" className="right hide-on-large-and-up">
                <li><a href={routes.LOGIN}>Login</a></li>
                <li><a href={routes.REGISTER}>Register</a></li>
            </ul>
        </div>
    </nav>

export default Navigation;