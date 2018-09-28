import React, { Component } from "react";
import { PasswordForgetForm } from "../../components/PasswordForgetForm/passwordForgetForm";
import NavbarHome from "../../components/Navbar/NavbarHome";

class PasswordForget extends Component {

    render() {
        return (
            <div>
                <NavbarHome />
            <PasswordForgetForm />
            </div>
        );
    }
}

export default PasswordForget;