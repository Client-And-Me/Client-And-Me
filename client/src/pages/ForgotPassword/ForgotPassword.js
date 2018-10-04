import React, { Component } from "react";
import { ForgotPasswordForm } from "../../components/ForgotPasswordForm/ForgotPasswordForm";
import NavbarHome from "../../components/Navbar/NavbarHome";

class ForgotPassword extends Component {

    render() {
        return (
            <div>
                <ForgotPasswordForm />
            </div>
        );
    }
}

export default ForgotPassword;