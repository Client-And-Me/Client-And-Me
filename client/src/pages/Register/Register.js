import React, { Component } from "react";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
// import "./SignUp.css";
import NavbarHome from "../../components/Navbar/NavbarHome";

class Register extends Component {

    render() {
        return (
            <div>
                <NavbarHome />
                <RegisterForm />
            </div>
        );
    }
}

export default Register;

