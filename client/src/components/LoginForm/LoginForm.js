import React, { Component } from 'react';
import "./LoginForm.css";
import { auth } from '../../firebase';
import * as routes from "../../constants/routes";
import API from "../../utils/API";


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
            .then((authUser) => {
                this.setState({ ...INITIAL_STATE });


                this.getSignedInUser();


            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    getSignedInUser = () => {

        const {
            history
        } = this.props;

        API.getIsClient(auth.currentUser().uid)
            .then(response => {
                if (response.data) {
                    history.push(routes.CLIENTHOME);
                    window.location.reload();
                }

                else {
                    API.getIsProvider(auth.currentUser().uid)
                        .then(response => {
                            history.push(routes.PROVIDERHOME);
                            window.location.reload();
                        })
                        .catch(error => {

                        });
                }
            })
            .catch(error => {

            });
    };

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
            <div>
                <div id="login-page" className="row">
                    <div className="col s12 m4 l4 offset-l4 offset-m4 z-depth-2 hoverable card-panel loginCard">
                        <form className="login-form" onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="input-field col s12 center">
                                    <img src="../../images/logo/login-logo.png" alt="" className="circle responsive-img valign profile-image-login" />
                                    <p className="center login-form-text">client&me</p>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix pt-5">person_outline</i>
                                    <input className="loginInput" className="loginInput" id="email" type="text" value={email}
                                        onChange={event => this.setState(byPropKey('email', event.target.value))} />
                                    <label htmlFor="email" className="center-align" >Email</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix pt-5">lock_outline</i>
                                    <input className="loginInput" id="password" type="password" value={password}
                                        onChange={event => this.setState(byPropKey('password', event.target.value))} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                                <div className="input-field col s12">
                                    <button className="btn waves-effect waves-light col s12 loginButton" disabled={isInvalid} type="submit">Login</button>
                                </div>
                            <div className="row margin">
                                <div className="input-field col s6 m6 l6">
                                    <p className="margin medium-small"><a href="/register" className="registerLink">Register</a></p>
                                </div>
                                <div className="input-field col s6 m6 l6">
                                    <p className="margin right-align medium-small"><a href="/forgot-password" className="forgotPasswordLink">Forgot Password</a></p>
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


