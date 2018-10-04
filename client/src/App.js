import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClientHome from "./pages/ClientHome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProviderHome from "./pages/ProviderHome";
import ProviderClients from "./pages/ProviderClients";
import ProviderAppointments from "./pages/ProviderAppointments";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/ForgotPassword";
import Navigation from "./components/Navigation";
import { firebase } from './firebase';

import * as routes from "./constants/routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <Route exact path={routes.HOME} component={Home} />
          <Route exact path={routes.LOGIN} component={Login} />
          <Route exact path={routes.REGISTER} component={Register} />
          <Route exact path={routes.CLIENTHOME} component={ClientHome} />
          <Route exact path={routes.PROVIDERHOME} component={ProviderHome} />
          <Route exact path={routes.PROVIDERCLIENTS} component={ProviderClients} />
          <Route exact path={routes.PROVIDERAPPOINTMENTS} component={ProviderAppointments} />
          <Route exact path={routes.FORGOTPASSWORD} component={ForgotPassword} />

          <Footer />
        </div>
      </Router>
    );
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser.uid) {
        console.log("Success");
        this.setState({ authUser });
      }
      else {
        console.log("Fail");
        this.setState({ authUser: null });
      }
    });
  }
}

export default App;

