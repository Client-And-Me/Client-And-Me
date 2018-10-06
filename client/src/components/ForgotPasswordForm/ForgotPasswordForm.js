import React, { Component } from 'react';
import "./ForgotPasswordForm.css"
import { auth } from '../../firebase';


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    error: null,
};

class ForgotPasswordForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { email } = this.state;

        auth.passwordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            email,
            error,
        } = this.state;

        const isInvalid = email === '';

        return (
            <div className="container">
                <div className="col s12 m4 l4 offset-l4 offset-m4 z-depth-2 hoverable card-panel loginCard">
                    <form onSubmit={this.onSubmit}>
                        <input
                            value={this.state.email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Email Address"
                        />
                        <button className="formBtn btn waves-effect waves-light col s12" disabled={isInvalid} type="submit">
                            Reset My Password
                    </button>

                        {error && <p>{error.message}</p>}
                    </form>
                </div>
            </div>
        );
    }
}

export {
    ForgotPasswordForm,
};