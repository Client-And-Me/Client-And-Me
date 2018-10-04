import React, { Component } from "react";
import API from "../../utils/API";
import { auth } from "../../firebase";
import { Input } from "react-materialize";
import "./RegisterForm.css";
import * as routes from "../../constants/routes";



const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    brandName: '',
    userName: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});



class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {

        const {
            firstName,
            lastName,
            brandName,
            userName,
            email,
            passwordOne,
        } = this.state;

        auth.createUser(email, passwordOne)
            .then(authUser => {

                this.setState({ ...INITIAL_STATE });
                let param = {
                    first_name: firstName,
                    last_name: lastName,
                    brand_name: brandName,
                    user_id: userName,
                    email: email,
                    firebase_id: auth.currentUser().uid
                };
                console.log(param);

                this.saveUserToDatabase(param);


            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();

    }

    saveUserToDatabase(body) {

        const {
            history
        } = this.props;

        console.log(this.state.userType);
        if (this.state.userType === "provider") {
            API.createProvider(body)
                .then(function (response) {
                    console.log(response);
                    history.push(routes.PROVIDERHOME);
                })
                .catch(function (error) {
                    console.log(error);
                    console.log(body);
                });
        }

        else if (this.state.userType === "client") {
            API.createClient(body)
                .then(function (response) {
                    console.log(response);
                    history.push(routes.CLIENTHOME);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {

        const {
            firstName,
            lastName,
            brandName,
            userName,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            firstName === '' ||
            lastName === '';

        return (
            <div>
                <div id="login-page" className="row">
                    <div className="col s12 m4 l4 offset-l4 offset-m4 z-depth-2 hoverable card-panel loginCard">
                        <p className="center login-form-text">client&me</p>

                        <form onSubmit={this.onSubmit}>
                            <Input
                                name="userType"
                                onChange={this.handleInputChange}
                                s={12}
                                type='select'>

                                <option value="" disabled selected value>Sign up as Client or Provider</option>
                                <option value="client">Client</option>
                                <option value="provider">Provider</option>
                            </Input>

                            <input
                                value={firstName}
                                onChange={event => this.setState(byPropKey('firstName', event.target.value))}
                                type="text"
                                placeholder="First Name" />


                            <input
                                value={lastName}
                                onChange={event => this.setState(byPropKey('lastName', event.target.value))}
                                type="text"
                                placeholder="Last Name" />

                            {this.state.userType === "provider" ? (
                                <input
                                    value={brandName}
                                    onChange={event => this.setState(byPropKey('brandName', event.target.value))}
                                    type="text"
                                    placeholder="Brand Name" />
                            ) : (<input
                                value={userName}
                                onChange={event => this.setState(byPropKey('userName', event.target.value))}
                                type="text"
                                placeholder="User Name" />)}

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

                            <div className="row">
                                <div className="input-field col s12">
                                    <button className="btn waves-effect waves-light col s12" disabled={isInvalid} type="submit">Register</button>
                                </div>
                            </div>

                            {error && <p>{error.message}</p>}
                        </form>
                    </div >
                </div>
            </div>
        );
    }
}

export {
    RegisterForm
};






