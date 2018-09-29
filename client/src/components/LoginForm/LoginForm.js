import React, { Component } from 'react';

import { auth } from '../../firebase';


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {

    loginType: null,
    email: '',
    password: '',
    error: null,
};

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            // loginType,
            email,
            password,
        } = this.state;

        auth.emailSignIn(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                // logintype push to route verified with sql
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            loginType,
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <div className="container">
                <div id="login-page" className="row">
                    <div className="col s12 z-depth-4 card-panel">
                        <form className="login-form" onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="input-field col s12 center">
                                    <img src="../../images/logo/login-logo.png" alt="" className="circle responsive-img valign profile-image-login" />
                                    <p className="center login-form-text">client&me</p>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <select value={loginType}
                                        onChange={event => this.setState(byPropKey('loginType', event.target.value))}>
                                        <option value="" disabled selected>Client or Provider</option>
                                        <option value="client">Client</option>
                                        <option value="provider">Provider</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix pt-5">person_outline</i>
                                    <input id="email" type="text" value={email}
                                        onChange={event => this.setState(byPropKey('email', event.target.value))} />
                                    <label htmlFor="email" className="center-align">Email</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix pt-5">lock_outline</i>
                                    <input id="password" type="password" value={password}
                                        onChange={event => this.setState(byPropKey('password', event.target.value))} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row margin col s12">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Remember Me</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <a href="" className="btn waves-effect waves-light pink accent-2 col s12" disabled={isInvalid} type="submit">Sign In</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 m6 l6">
                                    <p className="margin medium-small"><a href="/register">Register</a></p>
                                </div>
                                <div className="input-field col s6 m6 l6">
                                    <p className="margin right-align medium-small"><a href="/forgot-password">Forgot Password</a></p>
                                </div>
                            </div>
                            {error && <p>{error.message}</p>}
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}


export {
    LoginForm,
};


