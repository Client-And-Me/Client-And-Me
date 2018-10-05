import React from "react";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { withRouter } from "react-router-dom";
// import "./SignUp.css";


const Register = ({ history }) =>

    <div>
        <RegisterForm history={history} />
    </div>

export default withRouter(Register);

