import React, { Component } from 'react';

import { auth } from '../../firebase';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});



class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {

        const {
            username,
            email,
            passwordOne,
        } = this.state;

        auth.createUser(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });

                // create user in sql

            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();

    }

    render() {

        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <div class="container">
                <form onSubmit={this.onSubmit}>



                    <select>
                        <option value="" disabled selected>Sign up as Client or Provider</option>
                        <option value="client">Client</option>
                        <option value="provider">Provider</option>
                    </select>

                    <input
                        value={username}
                        onChange={event => this.setState(byPropKey('username', event.target.value))}
                        type="text"
                        placeholder="Full Name" />

                    <input
                        value={email}
                        onChange={event => this.setState(byPropKey('email', event.target.value))}
                        type="text"
                        placeholder="Email Address" />

                    <input
                        value={passwordOne}
                        onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                        type="password"
                        placeholder="Password" />

                    <input
                        value={passwordTwo}
                        onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                        type="password"
                        placeholder="Confirm Password" />

                    <button disabled={isInvalid} type="submit">
                        Sign Up
                </button>

                    {error && <p>{error.message}</p>}
                </form>
            </div >
        );
    }
}

export {
    SignUpForm
};